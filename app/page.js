'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import useReveal from '@/components/useReveal';
import CaseStudies from '@/components/CaseStudies';
import Lightbox from '@/components/Lightbox';
import {
  profile, marquee, stats, studio, featured, archive, skills, tools, timeline, shows, links
} from '@/data/content';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  useReveal();
  const [lightbox, setLightbox] = useState(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Analytics />
      <Scene />
      <div className="grain" aria-hidden="true" />

      <nav className="nav">
        <a className="nav-brand" href="#top">
          <strong>AK</strong>
          <span className="label">{profile.city}</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#case">Case studies</a>
          <a href="#studio">Studio</a>
          <a className="nav-cta" href="#contact">Hire me</a>
        </div>
      </nav>

      {/* ---------- hero ---------- */}
      <header className="hero" id="top">
        <div style={{ marginBottom: 'auto' }} />
        <div className="hero-inner">
          <p className="eyebrow" style={{ margin: '0 0 clamp(14px,2vw,26px)' }}>{profile.role}</p>
          <h1>
            Albert
            <br />
            Kaimenyi
          </h1>
          <div className="hero-foot">
            <p>{profile.intro}</p>
            <div className="btn-row">
              <a className="btn" href="#work">See the work</a>
              <a className="btn btn-ghost" href={profile.cv} download>Download CV ↓</a>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- marquee ---------- */}
      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div className="marquee-half" key={half}>
              {marquee.map((m) => (
                <span key={m}>
                  {m}
                  <i>✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- studio ---------- */}
      <section className="section" id="studio">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow" style={{ margin: '0 0 26px' }}>01 — Studio</p>
            <h2 className="h2 h2--serif" style={{ fontSize: 'clamp(2rem,4.4vw,4.2rem)', lineHeight: 1.02, textTransform: 'none' }}>
              Design that behaves like <em>infrastructure</em>.
            </h2>
          </div>
          <div className="glass" data-reveal>
            {studio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div key={s.l}>
                  <b>{s.n}</b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- reel ---------- */}
      <section id="work">
        <div className="reel-head">
          <div>
            <p className="eyebrow" style={{ margin: '0 0 18px' }}>02 — Selected work</p>
            <h2 className="h2">The reel</h2>
          </div>
          <span className="label">Scroll ↓</span>
        </div>
        {featured.map((p) => (
          <article className="reel-item" key={p.no} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.title} loading="lazy" data-parallax />
            <div className="reel-veil" />
            <div className="reel-body">
              <div>
                <p className="reel-meta">{p.no} · {p.tag} · {p.year}</p>
                <h3>{p.title}</h3>
              </div>
              <div className="reel-actions">
                <p>{p.blurb}</p>
                <div className="btn-row">
                  <button className="btn btn-ghost" onClick={() => setLightbox(p)}>View full size</button>
                  {p.download && (
                    <a className="btn" href={p.download.href} download>{p.download.label} ↓</a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CaseStudies onOpen={setLightbox} />

      {/* ---------- archive ---------- */}
      <section className="section">
        <div className="wrap">
          <div
            data-reveal
            style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'clamp(28px,4vw,52px)' }}
          >
            <div>
              <p className="eyebrow" style={{ margin: '0 0 18px' }}>04 — Archive</p>
              <h2 className="h2">Everything else</h2>
            </div>
            <span className="label">Click to enlarge</span>
          </div>
          <div className="archive">
            {archive.map((a) => (
              <button className="archive-item" key={a.src} data-reveal onClick={() => setLightbox(a)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.title} loading="lazy" />
                <span className="archive-cap">
                  <strong>{a.title}</strong>
                  <span>{a.year}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- craft + experience ---------- */}
      <section className="section section--alt">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow" style={{ margin: '0 0 18px' }}>05 — Toolkit</p>
            <h2 className="h2" style={{ marginBottom: 'clamp(26px,3vw,40px)', fontSize: 'clamp(1.9rem,4vw,3.4rem)' }}>Craft</h2>
            <div className="bars">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="bar-head">
                    <b>{s.name}</b>
                    <span>{s.v}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" data-bar={s.v} />
                  </div>
                </div>
              ))}
            </div>
            <div className="chips">
              {tools.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div data-reveal>
            <p className="eyebrow" style={{ margin: '0 0 18px' }}>06 — Track record</p>
            <h2 className="h2" style={{ marginBottom: 'clamp(26px,3vw,40px)', fontSize: 'clamp(1.9rem,4vw,3.4rem)' }}>Experience</h2>
            {timeline.map((e) => (
              <div className="tl-item" key={e.role + e.org}>
                <div className="tl-when">{e.when}</div>
                <div className="tl-body">
                  <h4>{e.role}</h4>
                  <div className="org">{e.org}</div>
                  <p>{e.what}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 44, borderTop: '1px solid var(--line)', paddingTop: 26 }}>
              <p className="eyebrow" style={{ margin: '0 0 20px' }}>07 — Exhibitions</p>
              <div className="shows">
                {shows.map((x) => (
                  <div className="show" key={x.name}>
                    <h4>{x.name}</h4>
                    <div className="date">{x.date}</div>
                    <p>{x.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section className="section contact" id="contact">
        <div className="wrap">
          <p className="eyebrow" data-reveal style={{ margin: '0 0 22px' }}>08 — Contact</p>
          <h2 data-reveal>
            Let&apos;s build
            <br />
            <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>something</em> sharp
          </h2>
          <div className="split">
            <div className="link-list" data-reveal>
              {links.map((l) => (
                <a className="link-row" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  <span className="meta">
                    <span>{l.label}</span>
                    <b>{l.value}</b>
                  </span>
                  <span className="arrow">↗</span>
                </a>
              ))}
            </div>

            <form
              data-reveal
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input name="name" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
              <textarea name="brief" rows={5} placeholder="What are we making?" />
              <button className="btn" type="submit">{sent ? 'Sent — talk soon ✓' : 'Send message'}</button>
              <p className="note">Replies within 24 hours · Nairobi (GMT+3)</p>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Albert Kaimenyi — Nairobi, Kenya</span>
        <a href={profile.cv} download style={{ color: '#a9a9b4' }}>Download CV ↓</a>
      </footer>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
