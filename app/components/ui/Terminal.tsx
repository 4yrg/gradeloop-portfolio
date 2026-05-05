'use client';

import React, { useEffect } from 'react';

const Terminal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const fill = document.getElementById('fill-overall');
      if (fill) fill.style.width = '87%';
      const fillCor = document.getElementById('fill-cor');
      if (fillCor) fillCor.style.width = '95%';
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .gl-term { background: #080f0a; border: 1px solid rgba(74,222,128,0.15); border-radius: 14px; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }
        .gl-bar { background: #0f1a12; border-bottom: 1px solid rgba(74,222,128,0.1); padding: 8px 14px; display: flex; align-items: center; gap: 8px; }
        .gl-dot { width: 10px; height: 10px; border-radius: 50%; }
        .gl-tabs { display: flex; gap: 2px; margin-left: 12px; }
        .gl-tab { padding: 2px 10px; border-radius: 5px 5px 0 0; font-size: 9.5px; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); cursor: pointer; transition: all 0.2s; border: 1px solid transparent; border-bottom: none; }
        .gl-tab.active { background: #080f0a; color: rgba(74,222,128,0.9); border-color: rgba(74,222,128,0.15); }
        .gl-body { padding: 16px 18px 18px; }
        .gl-line { display: flex; gap: 14px; min-height: 18px; align-items: flex-start; }
        .gl-ln { color: rgba(255,255,255,0.12); min-width: 14px; text-align: right; user-select: none; margin-top: 1px; }
        .gl-code { flex: 1; line-height: 1.6; }
        .k { color: #ff7b72; }
        .fn { color: #d2a8ff; }
        .s { color: #a5d6ff; }
        .n { color: #79c0ff; }
        .v { color: #ffa657; }
        .cm { color: #3a5240; }
        .op { color: rgba(255,255,255,0.5); }
        .t { color: rgba(255,255,255,0.85); }
        .dim { color: rgba(255,255,255,0.35); }
        .indent1 { margin-left: 16px; }
        .indent2 { margin-left: 32px; }
        .gl-divider { height: 1px; background: rgba(74,222,128,0.07); margin: 10px 0; }
        .gl-output { margin-top: 12px; padding: 10px 12px; background: rgba(0,0,0,0.3); border-radius: 8px; border-left: 2px solid rgba(74,222,128,0.4); }
        .gl-row { display: flex; align-items: center; gap: 8px; font-size: 11px; margin-bottom: 6px; }
        .gl-row:last-child { margin-bottom: 0; }
        .gl-badge { padding: 1.5px 6px; border-radius: 4px; font-size: 9px; font-weight: 700; letter-spacing: 0.06em; }
        .badge-pass { background: rgba(40,200,100,0.15); color: #4ade80; border: 1px solid rgba(40,200,100,0.2); }
        .badge-warn { background: rgba(251,191,36,0.12); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .badge-hint { background: rgba(139,92,246,0.12); color: #a78bfa; border: 1px solid rgba(139,92,246,0.2); }
        .badge-info { background: rgba(56,189,248,0.12); color: #38bdf8; border: 1px solid rgba(56,189,248,0.2); }
        .gl-score-bar { height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; flex: 1; overflow: hidden; }
        .gl-score-fill { height: 100%; border-radius: 2px; transition: width 1.2s cubic-bezier(0.22,1,0.36,1); }
        .gl-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 10px; }
        .gl-stat { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 6px 10px; }
        .gl-stat-label { font-size: 8.5px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 2px; }
        .gl-stat-val { font-size: 15px; font-weight: 700; }
        .gl-cursor { display: inline-block; width: 6px; height: 11px; background: #4ade80; margin-left: 2px; vertical-align: middle; animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .gl-hint { background: rgba(139,92,246,0.04); border: 1px solid rgba(139,92,246,0.12); border-radius: 6px; padding: 6px 10px; margin-top: 6px; font-size: 10.5px; color: rgba(255,255,255,0.6); line-height: 1.5; }
        .gl-hint-num { display: inline-block; background: rgba(139,92,246,0.2); color: #c4b5fd; border-radius: 3px; padding: 0px 5px; margin-right: 5px; font-size: 9px; font-weight: 700; }
        .live-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; display: inline-block; margin-right: 4px; animation: pulse 1.5s ease-in-out infinite; }
      `,
        }}
      />

      <div className="gl-term relative z-10 shadow-2xl">
        <div className="gl-bar">
          <div className="gl-dot" style={{ background: '#ff5f57' }}></div>
          <div className="gl-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="gl-dot" style={{ background: '#28c840' }}></div>
          <div className="gl-tabs">
            <div className="gl-tab active">gradeloop_assess.py</div>
            <div className="gl-tab">rubric.json</div>
            <div className="gl-tab dim">output.log</div>
          </div>
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '9px',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.12em',
            }}
          >
            <span className="live-dot"></span>LIVE
          </span>
        </div>

        <div className="gl-body">
          <div className="gl-line">
            <span className="gl-ln">1</span>
            <span className="gl-code cm">
              # ── GradeLoop Assessment Engine v2.4 ──
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">2</span>
            <span className="gl-code">
              <span className="k">import</span>{' '}
              <span className="n">gradeloop</span> <span className="k">as</span>{' '}
              <span className="n">gl</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">3</span>
            <span className="gl-code"> </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">4</span>
            <span className="gl-code">
              <span className="op">@</span>
              <span className="n">gl</span>
              <span className="op">.</span>
              <span className="fn">pipeline</span>
              <span className="op">(</span>
              <span className="v">mode</span>
              <span className="op">=</span>
              <span className="s">"strict"</span>
              <span className="op">)</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">5</span>
            <span className="gl-code">
              <span className="k">async def</span>{' '}
              <span className="fn">assess</span>
              <span className="op">(</span>
              <span className="v">submission</span>
              <span className="op">, </span>
              <span className="v">rubric</span>
              <span className="op">):</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">6</span>
            <span className="gl-code indent1 cm">
              # Static analysis + AST parser
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">7</span>
            <span className="gl-code indent1">
              <span className="v">ast</span> <span className="op">=</span>{' '}
              <span className="n">gl</span>
              <span className="op">.</span>
              <span className="fn">parse_ast</span>
              <span className="op">(</span>
              <span className="v">submission</span>
              <span className="op">.</span>
              <span className="v">code</span>
              <span className="op">)</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">8</span>
            <span className="gl-code"> </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">9</span>
            <span className="gl-code indent1 cm">
              # LLM-powered feedback & grading
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">10</span>
            <span className="gl-code indent1">
              <span className="v">feedback</span> <span className="op">=</span>{' '}
              <span className="k">await</span> <span className="n">gl</span>
              <span className="op">.</span>
              <span className="n">llm</span>
              <span className="op">.</span>
              <span className="fn">analyze</span>
              <span className="op">(</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">11</span>
            <span className="gl-code indent2">
              <span className="v">code</span>
              <span className="op">=</span>
              <span className="v">submission</span>
              <span className="op">.</span>
              <span className="v">code</span>
              <span className="op">, </span>
              <span className="v">ast</span>
              <span className="op">=</span>
              <span className="v">ast</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">12</span>
            <span className="gl-code indent1">
              <span className="op">)</span>
            </span>
          </div>
          <div className="gl-line">
            <span className="gl-ln">13</span>
            <span className="gl-code indent1">
              <span className="k">return</span> <span className="n">gl</span>
              <span className="op">.</span>
              <span className="fn">Result</span>
              <span className="op">(</span>
              <span className="v">feedback</span>
              <span className="op">, </span>
              <span className="v">rubric</span>
              <span className="op">)</span>
            </span>
          </div>

          <div className="gl-divider"></div>

          <div
            style={{
              fontSize: '9px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            ── run output ─────────────────────────────
          </div>

          <div className="gl-output">
            <div className="gl-row">
              <span className="gl-badge badge-pass">PASS</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                Overall score
              </span>
              <div className="gl-score-bar" id="bar-overall">
                <div
                  className="gl-score-fill"
                  id="fill-overall"
                  style={{
                    width: '0%',
                    background: 'linear-gradient(90deg,#22c55e,#4ade80)',
                  }}
                ></div>
              </div>
              <span
                style={{
                  color: '#4ade80',
                  fontWeight: 700,
                  minWidth: '35px',
                  textAlign: 'right',
                }}
                id="score-overall"
              >
                87/100
              </span>
            </div>
            <div className="gl-row">
              <span className="gl-badge badge-pass">PASS</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                Correctness
              </span>
              <div className="gl-score-bar" id="bar-cor">
                <div
                  className="gl-score-fill"
                  id="fill-cor"
                  style={{ width: '0%', background: '#22c55e' }}
                ></div>
              </div>
              <span
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  minWidth: '35px',
                  textAlign: 'right',
                }}
              >
                95/100
              </span>
            </div>
            <div className="gl-row">
              <span className="gl-badge badge-warn">WARN</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Code style</span>
              <div className="gl-score-bar">
                <div
                  className="gl-score-fill"
                  style={{ width: '72%', background: '#f59e0b' }}
                ></div>
              </div>
              <span
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  minWidth: '35px',
                  textAlign: 'right',
                }}
              >
                72/100
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              fontSize: '9px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            ── adaptive hints ──────────────────────────
          </div>

          <div className="gl-hint">
            <span className="gl-hint-num">H1</span>
            <span style={{ color: '#c4b5fd' }}>naming</span> — Variable{' '}
            <span style={{ color: '#ffa657' }}>r</span> is single-character;
            prefer <span style={{ color: '#ffa657' }}>result</span>.
          </div>
          <div className="gl-hint">
            <span className="gl-hint-num">H2</span>
            <span style={{ color: '#c4b5fd' }}>perf</span> — Nested loop is
            O(n²). Consider a hash map to bring it down to O(n).
          </div>

          <div className="gl-stats">
            <div className="gl-stat">
              <div className="gl-stat-label">Latency</div>
              <div className="gl-stat-val" style={{ color: '#4ade80' }}>
                1.2
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  s
                </span>
              </div>
            </div>
            <div className="gl-stat">
              <div className="gl-stat-label">Tokens</div>
              <div className="gl-stat-val" style={{ color: '#38bdf8' }}>
                2.4
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  k
                </span>
              </div>
            </div>
            <div className="gl-stat">
              <div className="gl-stat-label">Hints</div>
              <div className="gl-stat-val" style={{ color: '#a78bfa' }}>
                2
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  /2
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '10px',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            <span className="live-dot"></span>
            <span>pipeline finished</span>
            <span style={{ marginLeft: 'auto', color: 'rgba(74,222,128,0.6)' }}>
              exit code 0
            </span>
            <span className="gl-cursor"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
