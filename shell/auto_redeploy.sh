#!/usr/bin/env bash
# Info: (20261022 - Luphia) 自動更新並部署 cafeca.com.tw
#   1. 從 GitHub 取得最新程式並印出目前版本
#   2. 有更新：安裝相依套件（如有需要）→ build → pm2 重啟服務
#   3. 無更新：檢查 pm2 服務，未啟動或異常即啟動
#
# 可用環境變數覆寫：
#   APP_NAME  pm2 服務名稱（預設 cafeca.com.tw）
#   PORT      服務埠號（預設 10015）
#   BRANCH    追蹤的分支（預設為目前所在分支）
#   REMOTE    遠端名稱（預設 origin）

set -euo pipefail

APP_NAME="${APP_NAME:-cafeca.com.tw}"
PORT="${PORT:-10015}"
REMOTE="${REMOTE:-origin}"

# Info: (20261022 - Luphia) 切換到專案根目錄（本檔位於 shell/ 下）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

BRANCH="${BRANCH:-$(git rev-parse --abbrev-ref HEAD)}"
NEXT_BIN="$PROJECT_DIR/node_modules/next/dist/bin/next"
# Info: (20261022 - Luphia) 記錄最後一次成功 build 的 commit，build 失敗時下次會重試
DEPLOYED_FILE="$PROJECT_DIR/.next/DEPLOYED_COMMIT"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }
get_version() { node -p "require('./package.json').version" 2>/dev/null || echo "unknown"; }

# Info: (20261022 - Luphia) 防止同時執行（例如 cron 重疊）
LOCK_DIR="${TMPDIR:-/tmp}/auto_redeploy_${APP_NAME}.lock"
if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  log "另一個部署程序正在執行（$LOCK_DIR），結束。"
  exit 0
fi
trap 'rmdir "$LOCK_DIR" 2>/dev/null || true' EXIT

for cmd in git node npm pm2; do
  command -v "$cmd" >/dev/null 2>&1 || { log "找不到指令：$cmd"; exit 1; }
done

# Info: (20261022 - Luphia) 啟動 pm2 服務（直接執行 next start，避免 npm start 重複 build）
start_service() {
  if [ ! -f "$NEXT_BIN" ]; then
    log "尚未安裝相依套件，執行 npm install"
    npm install
  fi
  if [ ! -f ".next/BUILD_ID" ]; then
    log "尚未 build，執行 npm run build"
    npm run build
    git rev-parse HEAD > "$DEPLOYED_FILE"
  fi
  log "pm2 啟動 $APP_NAME（port $PORT）"
  pm2 start "$NEXT_BIN" --name "$APP_NAME" --cwd "$PROJECT_DIR" -- start -p "$PORT"
  pm2 save >/dev/null
}

service_status() {
  # Info: (20261022 - Luphia) 回傳 online / stopped / errored ...；不存在時回傳空字串
  pm2 jlist 2>/dev/null | node -e '
    let s = "";
    process.stdin.on("data", (d) => (s += d));
    process.stdin.on("end", () => {
      try {
        const p = JSON.parse(s).find((x) => x.name === process.argv[1]);
        process.stdout.write(p ? p.pm2_env.status : "");
      } catch { process.stdout.write(""); }
    });' "$APP_NAME"
}

# ---------- 1. 更新程式 ----------
OLD_VERSION="$(get_version)"
OLD_COMMIT="$(git rev-parse HEAD)"
log "目前版本：v$OLD_VERSION（$BRANCH @ ${OLD_COMMIT:0:7}）"

log "git fetch $REMOTE $BRANCH"
git fetch --prune "$REMOTE" "$BRANCH"
REMOTE_COMMIT="$(git rev-parse "$REMOTE/$BRANCH")"

UPDATED=false
if [ "$OLD_COMMIT" != "$REMOTE_COMMIT" ]; then
  if git merge-base --is-ancestor "$REMOTE_COMMIT" "$OLD_COMMIT"; then
    log "本機版本較遠端新，不需更新。"
  else
    log "發現更新：${OLD_COMMIT:0:7} → ${REMOTE_COMMIT:0:7}"
    git pull --ff-only "$REMOTE" "$BRANCH"
    UPDATED=true
  fi
fi

NEW_VERSION="$(get_version)"
log "最新版本：v$NEW_VERSION（$BRANCH @ $(git rev-parse --short HEAD)）"

# Info: (20261022 - Luphia) 上次 build 失敗或尚未記錄部署版本時，同樣視為需要部署
DEPLOYED_COMMIT="$(cat "$DEPLOYED_FILE" 2>/dev/null || true)"
if [ "$UPDATED" = false ] && [ -f ".next/BUILD_ID" ] && [ "$DEPLOYED_COMMIT" != "$(git rev-parse HEAD)" ]; then
  log "目前程式（$(git rev-parse --short HEAD)）尚未成功部署，重新 build。"
  UPDATED=true
fi

# ---------- 2. 有更新：重新 build 並重啟 ----------
if [ "$UPDATED" = true ]; then
  if ! git diff --quiet "${DEPLOYED_COMMIT:-$OLD_COMMIT}" HEAD -- package.json 2>/dev/null || [ ! -f "$NEXT_BIN" ]; then
    log "package.json 有變動，執行 npm install"
    npm install
  fi

  log "執行 npm run build"
  if ! npm run build; then
    log "build 失敗，不重啟服務（下次執行會重試）。"
    exit 1
  fi
  git rev-parse HEAD > "$DEPLOYED_FILE"

  if [ -n "$(service_status)" ]; then
    log "pm2 重啟 $APP_NAME（v$OLD_VERSION → v$NEW_VERSION）"
    pm2 restart "$APP_NAME" --update-env
    pm2 save >/dev/null
  else
    start_service
  fi
  log "部署完成。"
  exit 0
fi

# ---------- 3. 無更新：確認服務狀態 ----------
STATUS="$(service_status)"
case "$STATUS" in
  online)
    log "沒有更新，$APP_NAME 運行中。"
    ;;
  "")
    log "沒有更新，$APP_NAME 尚未在 pm2 中，啟動服務。"
    start_service
    ;;
  *)
    log "沒有更新，$APP_NAME 狀態為 $STATUS，重新啟動。"
    pm2 restart "$APP_NAME" --update-env
    pm2 save >/dev/null
    ;;
esac
