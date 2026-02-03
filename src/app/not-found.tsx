"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/hooks/use_translations';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Info: (20260203 - Luphia) C60 Wireframe Config
    const numPoints = 60; // Info: (20260203 - Luphia) Fullerene C60 approx
    const sphereRadius = 300; // Info: (20260203 - Luphia) Enlarged
    const connectionDistance = 90; // Info: (20260203 - Luphia) Threshold for "edges"
    const perspective = 800; // Info: (20260203 - Luphia) Camera distance

    // Info: (20260203 - Luphia) Generate points on sphere (Fibonacci Sphere)
    const points: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = 2.39996322972865332 * i; // Info: (20260203 - Luphia) golden angle
      points.push({
        x: Math.cos(theta) * radius * sphereRadius,
        y: y * sphereRadius,
        z: Math.sin(theta) * radius * sphereRadius
      });
    }

    let angleX = 0;
    let angleY = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      angleX += 0.001; // Info: (20260203 - Luphia) Slow rotation
      angleY += 0.001; // Info: (20260203 - Luphia) Slow rotation

      // Info: (20260203 - Luphia) Rotation Matrices
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);

      // Info: (20260203 - Luphia) Project and Draw
      const projectedPoints: { x: number, y: number, z: number, scale: number }[] = [];

      // Info: (20260203 - Luphia) 1. Transform Points
      for (const p of points) {
        // Info: (20260203 - Luphia) Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // Info: (20260203 - Luphia) Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = perspective / (perspective + z2);
        projectedPoints.push({
          x: x1 * scale + cx,
          y: y2 * scale + cy,
          z: z2,
          scale: scale
        });
      }

      // Info: (20260203 - Luphia) 2. Draw Edges (Wireframe) - Dimmer Color
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.15)'; // Info: (20260203 - Luphia) Dimmed Cyan
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < numPoints; i++) {
        for (let j = i + 1; j < numPoints; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          if (dx * dx + dy * dy < connectionDistance * connectionDistance * p1.scale * p1.scale) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // Info: (20260203 - Luphia) 3. Draw Vertices - Constant Area (Billboarding)
      ctx.fillStyle = 'rgba(0, 229, 255, 0.4)'; // Dimmer Cyan
      for (const p of projectedPoints) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-bg-primary text-center">
      {/* Info: (20260203 - Luphia) 3D Wireframe Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--bg-primary)_80%)]" />
      </div>

      <div className="z-10 flex flex-col items-center px-4 backdrop-blur-sm">
        {/* Info: (20260203 - Luphia) Large 404 Display */}
        <h1 className="text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 sm:text-[180px] md:text-[240px] drop-shadow-2xl">
          404
        </h1>

        {/* Info: (20260203 - Luphia) Message */}
        <h2 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
          {t('title') || 'Page Not Found'}
        </h2>

        <p className="mb-10 text-lg text-text-secondary">
          {t('description') || 'The page you are looking for does not exist.'}
        </p>

        {/* Info: (20260203 - Luphia) Return Home Button */}
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-cyan px-8 py-3 text-sm font-bold text-bg-primary transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          <span className="relative z-10">{t('button') || 'Return Home'}</span>
          <svg
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
