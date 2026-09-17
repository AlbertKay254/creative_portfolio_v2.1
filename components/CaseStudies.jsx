'use client';

import { useState } from 'react';
import { cases } from '@/data/content';

export default function CaseStudies({ onOpen }) {
  const [tab, setTab] = useState(0);
  const active = cases[tab];

  return (
    <section id="case" className="section section--alt">
      <div className="wrap">
        <div className="split" data-reveal style={{ alignItems: 'end' }}>
          <div>
            <p className="eyebrow" style={{ margin: '0 0 18px' }}>03 — Case studies</p>
            <h2 className="h2">
              Four ways
              <br />
              in
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.6, color: '#c8c6c0' }}>
            Posters, packaging, marks. Pick a discipline and see how the work gets made — from brief to print-ready artwork.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Case studies">
          {cases.map((c, i) => (
            <button
              key={c.label}
              className="tab"
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
            >
              {`0${i + 1}`} · {c.label}
            </button>
          ))}
        </div>

        <div className="case-grid">
          <div>
            <h3>{active.title}</h3>
            <p className="case-blurb">{active.blurb}</p>
            <dl style={{ margin: 0 }}>
              {active.steps.map((s) => (
                <div className="case-step" key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="shots">
            {active.shots.map((s) => (
              <button
                key={s.src}
                className="shot"
                onClick={() => onOpen(s)}
                style={{ background: s.tile || '#08080b', aspectRatio: s.ratio || '1 / 1' }}
                aria-label={`Enlarge ${s.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  style={{ objectFit: s.fit || 'cover', padding: s.pad || 0 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
