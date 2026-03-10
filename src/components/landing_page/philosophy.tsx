'use client';

export default function Philosophy() {
  return (
    <div className="relative w-full py-16 px-6 md:py-28 md:px-10 overflow-hidden rounded-3xl sm:rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-[#040d0a] via-[#081510] to-[#020504] border border-emerald-900/30 group">

      {/* Info: (20260310 - Luphia) 背景：動態流動的積分曲線預覽 (SVG Overlay) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M0,400 Q250,350 500,200 T1000,50" fill="none" stroke="#10b981" strokeWidth="2" className="animate-[dash_10s_linear_infinite]" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Info: (20260310 - Luphia) 核心標籤 */}
        <div className="flex items-center justify-center w-full gap-2 sm:gap-4 mb-10 md:mb-14">
          <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
          <span className="text-[9px] sm:text-[11px] font-black tracking-[0.3em] sm:tracking-[0.6em] text-emerald-500 uppercase text-center block max-w-full">
            The Negentropy Law
          </span>
          <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
        </div>

        {/* Info: (20260310 - Luphia) 積分公式主體 */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-6 gap-y-6 md:gap-y-10 font-serif text-2xl sm:text-3xl md:text-5xl text-white w-full">

          {/* Info: (20260310 - Luphia) 結果變數 */}
          <div className="flex flex-col items-center">
            <span className="text-emerald-400 font-bold drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">Ω</span>
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 mt-2 tracking-tighter uppercase font-normal text-center hidden sm:block">Total Net-Zero Value</span>
            <span className="text-[8px] font-mono text-slate-500 mt-1 tracking-tighter uppercase font-normal text-center sm:hidden">Net-Zero</span>
          </div>

          <span className="text-slate-700 not-italic font-light text-xl sm:text-3xl md:text-5xl">=</span>

          {/* Info: (20260310 - Luphia) 積分符號系統 */}
          <div className="flex items-center shrink-0 max-w-full overflow-x-auto pb-4 sm:pb-0 hide-scrollbar">
            <div className="relative flex flex-col items-center ml-2 sm:ml-0 shrink-0">
              <span className="text-[10px] sm:text-sm font-mono text-emerald-600 absolute -top-4 sm:-top-8 italic">t_future</span>
              <span className="text-5xl sm:text-6xl md:text-8xl font-light text-emerald-500/80 leading-none">∫</span>
              <span className="text-[10px] sm:text-sm font-mono text-emerald-900 absolute -bottom-4 sm:-bottom-6 italic">t_0</span>
            </div>

            {/* Info: (20260310 - Luphia) 積分函數內容 */}
            <div className="flex flex-col items-center mx-2 sm:mx-6 shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-3 px-2 sm:px-8 pb-2 sm:pb-4 border-b border-white/10 shrink-0">
                <span className="text-white text-base sm:text-3xl md:text-5xl">Tech(t)</span>
                <span className="text-emerald-500/50 not-italic">·</span>
                <span className="text-emerald-400 text-base sm:text-3xl md:text-5xl">η</span>
                <span className="text-[9px] sm:text-sm text-emerald-700 italic translate-y-1 sm:translate-y-2">green</span>
              </div>
              <div className="pt-2 sm:pt-4 text-xs sm:text-xl md:text-2xl text-slate-500 font-mono italic shrink-0">
                <span className="hidden sm:inline">ln( Energy Consumption )</span>
                <span className="sm:hidden">ln(Energy)</span>
              </div>
            </div>

            <span className="text-emerald-500 font-bold ml-1 sm:ml-2 text-base sm:text-3xl md:text-5xl shrink-0">dt</span>
          </div>
        </div>

        {/* Info: (20260310 - Luphia) 願景宣言 */}
        <div className="mt-12 sm:mt-20 max-w-2xl text-center px-4 w-full">
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            「讓科技與環境共創
            <span className="block sm:inline mt-1 sm:mt-0">
              <span className="text-emerald-400 font-semibold mx-1 sm:mx-2 italic">秩序的累積</span>
              」
            </span>
          </p>
          <p className="mt-4 sm:mt-6 text-[9px] sm:text-xs text-slate-500 font-mono tracking-[0.1em] sm:tracking-widest uppercase opacity-60 leading-relaxed px-2">
            Reversing climate entropy through time-weighted intelligence.
          </p>
        </div>

        {/* Info: (20260310 - Luphia) 底部數據點 */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-x-16 border-t border-white/5 pt-6 sm:pt-8 w-full px-4">
          <div className="text-center group/stat shrink-0 w-[40%] sm:w-auto">
            <p className="text-emerald-500 font-mono text-[10px] sm:text-xs group-hover:scale-110 transition-transform">dE/dt ↓</p>
            <p className="text-[8px] sm:text-[9px] text-slate-600 uppercase mt-1">Entropy Rate</p>
          </div>
          <div className="text-center group/stat shrink-0 w-[40%] sm:w-auto">
            <p className="text-emerald-500 font-mono text-[10px] sm:text-xs group-hover:scale-110 transition-transform">Σ Intelligence ↑</p>
            <p className="text-[8px] sm:text-[9px] text-slate-600 uppercase mt-1">Tech Accumulation</p>
          </div>
          <div className="text-center group/stat shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
            <p className="text-emerald-500 font-mono text-[10px] sm:text-xs group-hover:scale-110 transition-transform">100% Green</p>
            <p className="text-[8px] sm:text-[9px] text-slate-600 uppercase mt-1">Energy Source</p>
          </div>
        </div>

      </div>

      {/* Info: (20260310 - Luphia) 四角裝飾 */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-2 sm:w-4 h-2 sm:h-4 border-t border-l border-emerald-500/30"></div>
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-2 sm:w-4 h-2 sm:h-4 border-b border-r border-emerald-500/30"></div>
    </div>
  );
}
