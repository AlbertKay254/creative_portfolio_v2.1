# Albert Kaimenyi — Portfolio

Next.js (App Router) + React + three.js via React Three Fiber. A WebGL layer sits behind the
page: an iridescent torus-knot sculpture, a drifting particle field, and a cursor-reactive
liquid blob, all driven by scroll position and pointer movement.

## Requirements

Node.js 18.18 or newer.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Deploy

Zero config on Vercel:

```bash
npx vercel --prod
```

Netlify / Cloudflare Pages also work — build command `npm run build`, framework preset "Next.js".

## Project layout

```
app/
  layout.js        html shell, fonts, metadata
  page.js          the whole page (client component; holds lightbox + form state)
  globals.css      all styling, one file, plain CSS with custom properties
components/
  Scene.jsx        the three.js scene (React Three Fiber): shaders, geometry, motion
  CaseStudies.jsx  tabbed case studies (Poster / Product / Logo / Branding)
  Lightbox.jsx     full-screen image viewer
  useReveal.js     scroll reveals, skill bars, reel parallax
data/
  content.js       ALL copy, projects, skills, timeline, links — edit here first
public/
  assets/          logos, packaging mockups, Ruaka guideline slides
  cv/              downloadable CV
```

## Editing

- **Text, projects, case studies, skills, timeline, links** → `data/content.js`.
- **Colours, type, spacing** → the `:root` custom properties at the top of `app/globals.css`
  (`--accent` is the lime; change it once and the whole site follows).
- **3D** → `components/Scene.jsx`. `Sculpture()` holds the per-frame motion; the shader
  strings above it control the iridescent surface.

### Adding a case-study image

1. Put the file in `public/assets/`.
2. Add it to the matching entry in `cases[].shots` in `data/content.js`:

```js
{ src: '/assets/my-image.png', title: 'My image', year: '2026', ratio: '16 / 9' }
```

Options: `ratio` (tile aspect ratio), `tile` (tile background colour), `fit` (`cover` /
`contain`), `pad` (inset for logos).

## Notes

- Gallery artwork in the reel and archive is loaded from
  `https://albert-graphic-design-portfolio.vercel.app/gallery/…`, so those images need an
  internet connection. To self-host them, download the files into `public/assets/` and change
  `remote()` to `local()` in `data/content.js`.
- Plain `<img>` is used rather than `next/image` so the remote gallery works without extra
  configuration; `next.config.mjs` already whitelists the host if you want to switch.
- The contact form is front-end only — it confirms visually but sends nothing. Wire the
  `onSubmit` in `app/page.js` to Formspree, Resend, or a route handler for real submissions.
- Motion respects `prefers-reduced-motion`: the render loop is disabled and transitions are
  turned off.
