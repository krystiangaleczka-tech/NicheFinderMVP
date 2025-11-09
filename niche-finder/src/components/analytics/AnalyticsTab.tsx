'use client';

import React, { useMemo, useState } from 'react';
import { Card } from '../ui/Card';

interface AnalyticsTabProps {
  className?: string;
}

type Cat = { name: string; value: number };
type Plat = { name: string; value: number };
type Hot = { id: number; title: string; changePct: number };

const colors = ['#3a86ff', '#ff6b35', '#ffbe0b', '#9d4edd', '#00bfb3', '#ff006e', '#06ffa5'];

export const AnalyticsTab: React.FC<AnalyticsTabProps> = ({ className = '' }) => {
  // Tooltip state
  type Bubble = { x: number; y: number; r: number; title: string; mentions: number };
  const bubbles: Bubble[] = [
    { x: 7.0, y: 6.0, r: 46, title: 'Slow Performance & Rate Limiting', mentions: 178 },
    { x: 7.9, y: 6.8, r: 60, title: 'Checkout/Payment Integration', mentions: 245 },
    { x: 8.2, y: 6.6, r: 56, title: 'API Quotas & Limits', mentions: 204 },
    { x: 8.0, y: 4.8, r: 44, title: 'Docs Gaps', mentions: 132 },
  ];

  const W = 1000, H = 300;
  const m = { top: 16, right: 20, bottom: 50, left: 70 };
  const iw = W - m.left - m.right;
  const ih = H - m.top - m.bottom;
  const x = (v: number) => m.left + (Math.max(0, Math.min(10, v)) / 10) * iw;
  const y = (v: number) => m.top + (1 - Math.max(0, Math.min(10, v)) / 10) * ih;

  type Hover = { cx: number; cy: number; rr: number; label: string; color: string };
  const [hover, setHover] = useState<Hover | null>(null);


  type DonutHover = { name: string; value: number; color: string; midAngle: number };
  const [donutHover, setDonutHover] = useState<DonutHover | null>(null);
  const [lockedTooltip, setLockedTooltip] = useState<DonutHover | null>(null);



  const data = useMemo(
    () => ({
      hottest: [
        { id: 1, title: 'Payment Integration', changePct: 45 },
        { id: 2, title: 'Performance Issues', changePct: 28 },
        { id: 3, title: 'Documentation', changePct: 0 },
      ] as Hot[],
      categories: [
        { name: 'UX/UI', value: 32 },
        { name: 'Payment', value: 28 },
        { name: 'Support', value: 18 },
        { name: 'Performance', value: 15 },
        { name: 'Other', value: 7 },
      ] as Cat[],
      platforms: [
        { name: 'Reddit', value: 4500 },
        { name: 'YouTube', value: 3200 },
        { name: 'Twitter', value: 1800 },
        { name: 'GitHub', value: 890 },
        { name: 'Others', value: 450 },
      ] as Plat[],
    }),
    []
  );

  const donutSize = 160;
  const ringOuter = donutSize / 2 - 6;
  const ringInner = ringOuter - 40;
  const catTotal = data.categories.reduce((s, c) => s + c.value, 0);


  const polar = (cx: number, cy: number, r: number, aDeg: number) => {
    const a = (Math.PI / 180) * (aDeg - 90);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  return (
    <div className={className}>
      <div className="retro-header mb-6">
        <h1 className="text-xl font-bold pixel-text py-2 text-white">ANALYTICS DASHBOARD</h1>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card showCorners className="stats-card p-5 text-center relative !bg-gradient-to-br from-[#ff006e] to-[#ff6b35]">
          <div className="text-4xl font-bold mb-2 value">5,432</div>
          <div className="text-xs font-bold">TOTAL IDEAS</div>
        </Card>
        <Card showCorners className="stats-card p-5 text-center relative !bg-gradient-to-br from-[#06ffa5] to-[#00bfb3]">
          <div className="text-4xl font-bold mb-2 value">1</div>
          <div className="text-xs font-bold">VALID</div>
        </Card>
        <Card showCorners className="stats-card p-5 text-center relative !bg-gradient-to-br from-[#9d4edd] to-[#ff006e]">
          <div className="text-4xl font-bold mb-2 value">0</div>
          <div className="text-xs font-bold">LAUNCH</div>
        </Card>
        <Card showCorners className="stats-card p-5 text-center relative !bg-gradient-to-br from-[#ff6b35] to-[#ffbe0b]">
          <div className="text-4xl font-bold mb-2 value">$236M</div>
          <div className="text-xs font-bold">TAM</div>
        </Card>
      </div>

      {/* TOP ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* HOTTEST */}
        <div className="card p-5 relative">
          <div className="corner-decor top-left" />
          <div className="corner-decor top-right" />
          <h3 className="font-bold mb-4 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black" style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
            HOTTEST PAIN POINTS
          </h3>
          <div className="space-y-2">
            {data.hottest.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between px-3 py-2 rounded border border-black/10 bg-white">
                <span className="text-sm">{p.title}</span>
                <span className="text-xs" style={{ color: i < 2 ? '#ff6b35' : '#00bfb3' }}>
                  {i < 2 ? `↑↑ +${p.changePct}%` : '→ Stable'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY SPLIT */}
        <div className="card p-5 relative" style={{ zIndex: 1 }}>
          <div className="corner-decor top-left" />
          <div className="corner-decor top-right" />
          <h3 className="font-bold mb-4 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
            CATEGORY SPLIT
          </h3>
          <div className="flex flex-col items-center relative" style={{ height: 200 }} onMouseLeave={() => {
            setLockedTooltip(null);
            setDonutHover(null);
          }}>
            <svg width={donutSize} height={donutSize} viewBox={`0 0 ${donutSize} ${donutSize}`}>
              {(() => {
                const cx = donutSize / 2,
                  cy = donutSize / 2;
                return data.categories.map((c, i) => {
                  const startAngle = data.categories.slice(0, i).reduce((acc, cat) => acc + (cat.value / catTotal) * 360, 0);
                  const angle = (c.value / catTotal) * 360;
                  const end = startAngle + angle;
                  const p1 = polar(cx, cy, ringOuter, startAngle);
                  const p2 = polar(cx, cy, ringOuter, end);
                  const p3 = polar(cx, cy, ringInner, end);
                  const p4 = polar(cx, cy, ringInner, startAngle);
                  const large = angle > 180 ? 1 : 0;
                  const midAngle = startAngle + angle / 2;

                  const d = [
                    `M ${p1.x} ${p1.y}`,
                    `A ${ringOuter} ${ringOuter} 0 ${large} 1 ${p2.x} ${p2.y}`,
                    `L ${p3.x} ${p3.y}`,
                    `A ${ringInner} ${ringInner} 0 ${large} 0 ${p4.x} ${p4.y}`,
                    'Z',
                  ].join(' ');

                  const isHovered = donutHover && donutHover.name === c.name;
                  const scale = isHovered ? 1.15 : 1;
                  
                  return (
                    <g key={c.name}>
                      <path
                        d={d}
                        fill={colors[i % colors.length]}
                        stroke="#1a1a2e"
                        strokeWidth={isHovered ? 1 : 2}
                        onMouseEnter={() => {
                          setDonutHover({ name: c.name, value: c.value, color: colors[i % colors.length], midAngle });
                          setLockedTooltip({ name: c.name, value: c.value, color: colors[i % colors.length], midAngle });
                        }}
                        style={{ 
                          cursor: 'pointer',
                          transition: 'all 0.15s ease-in',
                          transformOrigin: `${cx}px ${cy}px`,
                          transform: `scale(${scale})`
                        }}
                      />
                    </g>
                  );
                });
              })()}
              <circle cx={donutSize / 2} cy={donutSize / 2} r={ringInner - 1} fill="white" stroke="#1a1a2e" strokeWidth={2} style={{ pointerEvents: 'none' }} />


            </svg>

            {/* tooltip poza SVG */}
            {lockedTooltip && (() => {
              const label = `${lockedTooltip.name} ${lockedTooltip.value}%`;
              const padX = 10, padY = 6;
              const fontSize = 13;
              const boxW = label.length * (fontSize * 0.6) + 24 + padX * 2;
              const boxH = 28;
              
              // pozycja tooltipa - środek diva kontenera + pozycja wycinka
              const containerWidth = donutSize; // rzeczywista szerokość kontenera
              const containerHeight = donutSize; // rzeczywista wysokość kontenera
              const centerX = containerWidth / 2; // środek diva
              const centerY = containerHeight / 2;
              
              // oblicz pozycję wycinka względem środka diva
              const angleRad = (lockedTooltip.midAngle - 90) * (Math.PI / 180);
              const radius = (ringOuter + ringInner) / 2; // środek pierścienia
              const segmentCenterX = centerX + radius * Math.cos(angleRad);
              const segmentCenterY = centerY + radius * Math.sin(angleRad);
              
              // tooltip pozycjonowany względem wycinka
              const tx = segmentCenterX + 50; // 50px w prawo od środka wycinka
              const ty = segmentCenterY - boxH / 2; // wyśrodkowany pionowo na wycinku

              return (
                <div 
                  className="absolute pointer-events-none"
                  style={{
                    left: `${tx}px`,
                    top: `${ty}px`,
                    width: `${boxW}px`,
                    height: `${boxH}px`,
                    zIndex: 9999
                  }}
                >
                  {/* główny dymek z tłem */}
                  <div 
                    className="absolute"
                    style={{ 
                      backgroundColor: '#808080',
                      border: '4px solid #1a1a2e',
                      boxShadow: '8px 8px 0 rgba(0,0,0,0.1)',
                      width: `${boxW}px`,
                      height: `${boxH}px`
                    }}
                  />
                  {/* cienie jak w kartach */}
                  <div 
                    className="absolute"
                    style={{
                      left: '8px',
                      top: '8px',
                      width: `${boxW}px`,
                      height: `${boxH}px`,
                      backgroundColor: 'rgba(0,0,0,0.1)'
                    }}
                  />
                  {/* mały kolorowy kwadracik */}
                  <div 
                    className="absolute rounded-sm"
                    style={{
                      left: `${padX}px`,
                      top: `${padY + 2}px`,
                      width: '10px',
                      height: '10px',
                      backgroundColor: lockedTooltip.color
                    }}
                  />
                  {/* tekst */}
                  <div 
                    className="absolute flex items-center"
                    style={{
                      left: `${padX + 16}px`,
                      top: `${boxH / 2}px`,
                      transform: 'translateY(-50%)',
                      color: '#ffffff',
                      fontSize: `${fontSize}px`,
                      fontFamily: 'IBM Plex Mono, monospace'
                    }}
                  >
                    {label}
                  </div>
                </div>
              );
            })()}

            {/* legenda */}
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs justify-items-center">
              {data.categories.map((c, i) => (
                <div key={c.name} className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 border border-black" style={{ background: colors[i % colors.length] }} />
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLATFORM SPLIT */}
        <div className="card p-5 relative" style={{ zIndex: 0 }}>
          <div className="corner-decor top-left" />
          <div className="corner-decor top-right" />
          <h3 className="font-bold mb-4 text-sm bg-pink-500 text-white px-3 py-1 inline-block border-2 border-black" style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
            PLATFORM SPLIT
          </h3>
          
          <div className="w-full h-48">
            <svg viewBox="0 0 400 270" className="w-full h-full">
              {/* Grid lines */}
              {[0, 1000, 2000, 3000, 4000, 5000].map((value) => {
                const x = 80 + (value / 5000) * 270;
                return (
                  <g key={value}>
                    <line x1={x} y1={20} x2={x} y2={250} stroke="rgba(0,0,0,0.10)" />
                    <text x={x} y={265} fontSize="10" textAnchor="middle" fill="#1a1a2e" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                      {value}
                    </text>
                  </g>
                );
              })}
              
              {/* Axes */}
              <line x1={80} y1={250} x2={350} y2={250} stroke="#1a1a2e" strokeWidth="1.5" />
              <line x1={80} y1={20} x2={80} y2={250} stroke="#1a1a2e" strokeWidth="1.5" />
              
              {/* Calculate dynamic dimensions */}
              {(() => {
                const barHeight = 20;
                const barSpacing = 140 / data.platforms.length;
                const topMargin = 20;


                const startY = topMargin;
                
                return [...data.platforms].sort((a, b) => b.value - a.value).map((p, i) => {
                  const y = startY + (i * barSpacing) + (barSpacing - barHeight) / 2;
                  const barWidth = (p.value / 5000) * 270;
                
                return (
                  <g key={p.name}>
                    <rect 
                      x={80} 
                      y={y} 
                      width={barWidth} 
                      height={barHeight} 
                      fill={colors[i % colors.length]}
                      stroke="#1a1a2e"
                      strokeWidth="2"
                      rx="2"
                    />
                    <text 
                      x={80 + barWidth + 10} 
                      y={y + barHeight / 2 + 4} 
                      fontSize="11" 
                      fill="#1a1a2e" 
                      style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600 }}
                    >
                      {p.value}
                    </text>
                    <text 
                      x={70} 
                      y={y + barHeight / 2 + 4} 
                      fontSize="10" 
                      textAnchor="end" 
                      fill="#1a1a2e" 
                      style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                      {p.name}
                    </text>
                   </g>
                 );
                });
              })()}
            </svg>
          </div>
        </div>
      </div>

      {/* OPPORTUNITY MATRIX */}
      <div className="card p-5 relative mt-5">
        <div className="corner-decor top-left" />
        <div className="corner-decor top-right" />
        <h3 className="font-bold mb-4 text-sm bg-purple-500 text-white px-3 py-1 inline-block border-2 border-black" style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
          OPPORTUNITY MATRIX
        </h3>

        <div className="w-full h-80">
          {(() => {
            const ticks = Array.from({ length: 11 }, (_, i) => i);

            return (
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
                <rect x={m.left} y={m.top} width={iw} height={ih} fill="#ffffff" />
                {ticks.map((t) => (
                  <line key={`vx-${t}`} x1={x(t)} y1={m.top} x2={x(t)} y2={m.top + ih} stroke="rgba(0,0,0,0.10)" />
                ))}
                {ticks.map((t) => (
                  <line key={`hy-${t}`} x1={m.left} y1={y(t)} x2={m.left + iw} y2={y(t)} stroke="rgba(0,0,0,0.10)" />
                ))}

                <line x1={m.left} y1={m.top + ih} x2={m.left + iw} y2={m.top + ih} stroke="#1a1a2e" strokeWidth="1.5" />
                <line x1={m.left} y1={m.top} x2={m.left} y2={m.top + ih} stroke="#1a1a2e" strokeWidth="1.5" />

                {ticks.map((t) => (
                  <g key={`xt-${t}`}>
                    <line x1={x(t)} y1={m.top + ih} x2={x(t)} y2={m.top + ih + 4} stroke="#1a1a2e" />
                    <text x={x(t)} y={m.top + ih + 18} fontSize="11" textAnchor="middle" fill="#1a1a2e" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                      {t}
                    </text>
                  </g>
                ))}
                {ticks.map((t) => (
                  <g key={`yt-${t}`}>
                    <line x1={m.left - 4} y1={y(t)} x2={m.left} y2={y(t)} stroke="#1a1a2e" />
                    <text x={m.left - 10} y={y(t) + 4} fontSize="11" textAnchor="end" fill="#1a1a2e" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                      {t}
                    </text>
                  </g>
                ))}

                <text x={m.left + iw / 2} y={H - 10} fontSize="14" textAnchor="middle" fill="#1a1a2e" style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700 }}>
                  Severity
                </text>
                <text transform={`translate(18 ${m.top + ih / 2}) rotate(-90)`} fontSize="14" textAnchor="middle" fill="#1a1a2e" style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700 }}>
                  Opportunity Score
                </text>

                {bubbles.map((b, i) => {
                  const cx = x(b.x);
                  const cy = y(b.y);
                  const rr = b.r / 2;
                  const label = `${b.title}: Severity ${b.x}, Opportunity ${b.y}, ${b.mentions} mentions`;
                  const isHovered = hover && hover.cx === cx && hover.cy === cy;
                  const scale = isHovered ? 1.15 : 1;
                  return (
                    <g key={i} onMouseEnter={() => setHover({ cx, cy, rr, label, color: '#ff6b35' })} onMouseLeave={() => setHover(null)} tabIndex={0}>
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={rr * scale} 
                        fill="#ff6b35" 
                        opacity={0.8} 
                        stroke="#1a1a2e" 
                        strokeWidth={isHovered ? 1 : 2}
                        style={{ 
                          transition: 'all 0.15s ease-in',
                          transformOrigin: `${cx}px ${cy}px`
                        }} 
                      />
                    </g>
                  );
                })}


              </svg>
            );
          })()}
        </div>
      </div>
    </div>
  );
};