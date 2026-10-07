// All site copy and media live here. Edit this file to change the portfolio's content.

const GALLERY = 'https://albert-graphic-design-portfolio.vercel.app/gallery';
const remote = (file) => `${GALLERY}/${file}`;
const local = (file) => `/assets/${file}`;

export const profile = {
  name: 'Albert Kaimenyi',
  role: 'Branding · Visual identity · Digital art',
  city: 'Nairobi, KE',
  cv: '/cv/albert-kaimenyi-cv.pdf',
  intro:
    'I build identities that hold their nerve. Four years turning briefs into logos, guidelines, packaging and campaigns — with a Computer Science degree backing every pixel.'
};

export const marquee = [
  'Branding', 'Visual identity', 'Logo design', 'Brand guidelines', 'Packaging mockups',
  'UI/UX', 'Digital art', 'Print-ready artwork', 'Campaigns', 'Typesetting'
];

export const stats = [
  { n: '4+', l: 'Years designing' },
  { n: '5', l: 'Organisations' },
  { n: '2', l: 'Gallery shows' },
  { n: '9', l: 'Tools mastered' }
];

export const studio = [
  'Nairobi-based graphic designer and digital artist. Computer Science, Kenyatta University. I work where identity systems meet the screens they actually live on — Adobe Creative Suite and Figma on one side, front-end frameworks on the other.',
  'Clients include CHAK, Swap Circle and PixxelArt Studios — from hospital information-system interfaces to a full mall brand guideline. Work shown at Ardhi Gallery (2023) and the Pawa254 Exhibition (2024).'
];

const angelsGuide = {
  href: '/brand/abtc-brand-guidelines-bloom.pdf',
  label: 'Download full guideline',
  size: 'PDF · 15 MB'
};

export const featured = [
  {
    no: '01', title: 'Ruaka Mall', year: '2025', tag: 'Branding & identity',
    src: remote('1.png'),
    blurb: 'Logo, brand guidelines, signage and sixteen product mockups for a proposed Nairobi retail development.'
  },
  {
    no: '02', title: 'Angels Beauty', year: '2026', tag: 'Brand guidelines',
    src: local('angels-01.webp'),
    blurb: 'The Bloom identity for Angels Beauty Training Centre — logo suite, tangerine-and-teal palette, voice and applications for a KOICA IBS partnership project.',
    download: angelsGuide
  },
  {
    no: '03', title: 'Typography', year: '2025', tag: 'Type design',
    src: remote('type2.jpg'),
    blurb: 'A typographic study on hierarchy, rhythm and tension — letterforms doing the heavy lifting.'
  },
  {
    no: '04', title: 'Joan of Arc', year: '2024', tag: 'Digital design',
    src: remote('joan1.png'),
    blurb: 'Composite digital portraiture: layered imagery, texture and text fused into one narrative frame.'
  },
  {
    no: '05', title: 'Eclipse', year: '2025', tag: 'Photo manipulation',
    src: remote('ECLIPSE_.jpg'),
    blurb: 'Retouching and manipulation pushed until the photograph becomes an object rather than a record.'
  }
];

export const archive = [
  { title: 'Ardhi Gallery', year: 'Nov 2023', src: remote('ardhi1.png') },
  { title: 'Hierarchy', year: '2025', src: remote('hierachy2.png') },
  { title: 'Swap Circle', year: '2025', src: remote('korea_swap.png') },
  { title: 'Swap Kisumu', year: '2022', src: remote('swp_kisumu.png') },
  { title: 'Prelude', year: '2025', src: remote('PRELUDE_1_.jpg') },
  { title: 'Collage Art', year: '2022', src: remote('ardhi2.png') },
  { title: 'Pawa254', year: 'Aug 2024', src: remote('pawa254.png') },
  { title: 'Mockups', year: '2024', src: remote('mockup.png') }
];

const ruakaSlides = [
  ['ruaka-01.webp', 'About the brand'], ['ruaka-02.webp', 'The logo'], ['ruaka-03.webp', 'Logo variations'],
  ['ruaka-04.webp', 'Minimum logo size'], ['ruaka-05.webp', 'Incorrect logo application'], ['ruaka-06.webp', 'Brand colours'],
  ['ruaka-07.webp', 'Strawberry Pink'], ['ruaka-08.webp', 'Typography'], ['ruaka-09.webp', 'T-shirts'],
  ['ruaka-10.webp', 'Stationery'], ['ruaka-11.webp', 'Shopping bags'], ['ruaka-12.webp', 'Signage in situ']
].map(([file, label]) => ({
  src: local(file), title: `Ruaka Shopping Mall — ${label}`, year: '2025', ratio: '16 / 9', tile: '#E9E9E9'
}));

const angelsSlides = [
  ['angels-01.webp', 'Cover · Your glow-up starts here'], ['angels-02.png', 'The brand at a glance'],
  ['angels-03.png', 'The curriculum'], ['angels-04.png', 'Logo variations'],
  ['angels-05.png', 'Peacock Teal & colour system'], ['angels-06.png', 'Voice & messaging'],
  ['angels-07.png', 'Banner application']
].map(([file, label]) => ({
  src: local(file), title: `Angels Beauty Training Centre — ${label}`, year: '2026', ratio: '1055 / 815', tile: '#FFFBF3'
}));

export const cases = [
  {
    label: 'Poster design', title: 'Swap Circle posters',
    blurb: 'Event promotion for a Nairobi swap community — posters that had to read from across a room and survive being reposted at phone size.',
    steps: [
      { k: 'Brief', d: 'Drive turnout for recurring swap events across Nairobi and Kisumu, on a fast turnaround and no photography budget.' },
      { k: 'Approach', d: 'Bold type as the primary image, high-contrast colour blocking, and a fixed information hierarchy so every edition looks related.' },
      { k: 'Result', d: 'Higher event visibility and participation, plus a poster template the organisers could reuse per city.' }
    ],
    shots: [
      { src: remote('korea_swap.png'), title: 'Swap Circle — Korea', year: '2025', ratio: '1 / 1.414' },
      { src: remote('swp_kisumu.png'), title: 'Swap Circle — Kisumu', year: '2022', ratio: '1 / 1.414' }
    ]
  },
  {
    label: 'Product design', title: 'Packaging & mockups',
    blurb: 'Restaurant packaging systems — cups, bags and boxes — plus the posters that sell the offers. Designed as artwork, proved as mockups.',
    steps: [
      { k: 'Brief', d: 'Give Korean street-food concepts a packaging identity that works on paper stock, in daylight, and in a delivery photo.' },
      { k: 'Approach', d: 'One motif family — bowl mark, Hangul texture, brush shapes — redrawn per surface so every item reads as the same brand.' },
      { k: 'Result', d: 'Print-ready artwork applied across cup, bag and box, rendered in realistic mockups for client sign-off.' }
    ],
    shots: [
      { src: local('mockup-cupbap-cup.png'), title: 'CupBap cup', year: '2025' },
      { src: local('mockup-cupbap-bag.png'), title: 'CupBap paper bag', year: '2025' },
      { src: local('mockup-cupbap-box.png'), title: 'CupBap box', year: '2025' },
      { src: local('mockup-matzip-cup.png'), title: 'Matzip cup', year: '2025' },
      { src: local('poster-haru-open.webp'), title: 'Haru — We are open', year: '2025', ratio: '4 / 5' },
      { src: local('poster-koreagarden-flavour.webp'), title: 'Korea Garden — Big flavour', year: '2025', ratio: '4 / 5' },
      { src: local('poster-koreagarden-sizzle.webp'), title: 'Korea Garden — Sizzle & Steam', year: '2025', ratio: '4 / 5' },
      { src: local('poster-koreagarden-somek-combo.png'), title: 'Korea Garden — Somek chicken combo', year: '2025', ratio: '1 / 1.414' }
    ]
  },
  {
    label: 'Logo design', title: 'Marks & identity',
    blurb: 'Marks built to hold up small: beauty training, construction, retail. Simplicity first, then the variants that make it usable everywhere.',
    steps: [
      { k: 'Brief', d: 'Each client needed one mark that communicates the business instantly and survives signage, stamps and favicons.' },
      { k: 'Approach', d: 'Single-line iconography, geometric containment, and a lockup set — emblem, horizontal and icon-only — per brand.' },
      { k: 'Result', d: 'Delivered logo suites with usage rules so teams can apply them without breaking the mark.' }
    ],
    shots: [
      { src: local('logo-angels-emblem.png'), title: 'Angels Beauty — emblem', year: '2025', tile: '#F4F1EA', fit: 'contain', pad: '12%' },
      { src: local('logo-angels-lockup.png'), title: 'Angels Beauty — horizontal lockup', year: '2025', tile: '#F4F1EA', fit: 'contain', pad: '12%' },
      { src: local('logo-cbsl.png'), title: 'CBSL — Building Value', year: '2025', tile: '#F4F1EA', fit: 'contain', pad: '14%' },
      { src: local('logo-r-monogram.png'), title: 'R monogram', year: '2024', tile: '#F4F1EA', fit: 'contain', pad: '18%' }
    ]
  },
  {
    label: 'Branding',
    projects: [
      {
        name: 'Ruaka Mall', title: 'Ruaka Shopping Mall',
        blurb: 'A full brand identity for a modern retail and lifestyle destination in Ruaka — mark, palette, typography, guidelines and applications, now installed on the building itself.',
        steps: [
          { k: 'Brief', d: 'PixxelArt needed a complete, proposal-ready identity for a mall serving Ruaka and its fast-growing surrounding neighbourhoods.' },
          { k: 'Mark', d: 'A stylised "R" in Azure Mist on Strawberry Red — clean, modern, energetic, and legible down to 64 × 64 pixels.' },
          { k: 'System', d: 'Strawberry Red, Azure Mist, Onyx, Grapefruit Pink and Graphite, set in Open Sans with Alatsi as secondary, plus clear-space, minimum-size and misuse rules.' },
          { k: 'Applications', d: 'Guidelines extended into t-shirts, stationery and staff IDs, shopping bags, and the fascia signage now standing at the mall.' }
        ],
        shots: ruakaSlides
      },
      {
        name: 'Angels Beauty', title: 'Angels Beauty Training Centre',
        blurb: 'Bloom — a warm, career-first identity for a beauty school that takes women from dreamer to career woman. Logo suite, colour, type, voice and applications in one guideline.',
        steps: [
          { k: 'Brief', d: 'A KOICA IBS partnership project: give ABTC a brand that feels aspirational yet credible, and speaks to students woman-to-woman — never as "beneficiaries".' },
          { k: 'Mark', d: 'A single-line profile inside an open circle, signed A·B·T·C — delivered in thin and bold gradient, solid orange, emblem and secondary lockups.' },
          { k: 'System', d: 'A mango → tangerine → coral signature gradient on Cloud Ivory and Plum Ink, with Peacock Teal as the sparing complementary accent and AA/AAA contrast pairings.' },
          { k: 'Voice', d: '"Learn it. Earn it. Glow." — short, confident lines, a curriculum system for hair, nails, skincare and spa, and banner applications built from it.' }
        ],
        shots: angelsSlides,
        download: angelsGuide
      }
    ]
  }
];

export const skills = [
  { name: 'Adobe Photoshop', v: 90 },
  { name: 'Adobe Lightroom', v: 88 },
  { name: 'Adobe Illustrator', v: 85 },
  { name: 'Figma', v: 85 },
  { name: 'UI/UX Design', v: 85 },
  { name: 'Premiere Pro & After Effects', v: 80 }
];

export const tools = [
  'InDesign', 'Branding & mockups', 'Colour theory', 'Print-ready artwork', 'Photo retouching',
  'Pitch decks', 'HTML/CSS/Tailwind', 'Chakra UI', 'SQL & MongoDB', 'Social campaigns'
];

export const timeline = [
  {
    when: '2023 — 2026', role: 'Graphic & Web Design', org: 'CHAK',
    what: 'Front-end UI/UX and visual modules for a Hospital Management Information System, plus posters, reports and infographics translating health data into clear communication.'
  },
  {
    when: '2025 — 2026', role: 'Graphic Designer', org: 'YoungToon',
    what: 'Manhwa typesetting — dialogue bubbles, spacing and placement that guide the reader’s eye — alongside brand visuals and mockups.'
  },
  {
    when: '2025', role: 'Branding & Mockups', org: 'PixxelArt Studios Ltd',
    what: 'Logo, brand guidelines and product mockups for the proposed Ruaka Shopping Mall.'
  },
  {
    when: '2022 — 2026', role: 'Graphic Designer', org: 'Swap Circle',
    what: 'Promotional posters and event photo editing that lifted turnout and sharpened the organisation’s presence.'
  },
  {
    when: '2020 — 2022', role: 'Independent Projects', org: 'Freelance',
    what: 'Self-taught Photoshop and Illustrator mastery through logos, social graphics and digital illustration.'
  }
];

export const shows = [
  { name: 'Ardhi Gallery', date: 'November 4, 2023', note: 'Two pieces in a group exhibition of abstract and digital artists in Kenya.' },
  { name: 'Pawa254 Exhibition', date: 'August 10, 2024', note: 'A curated showcase on contemporary expression and current events in Kenya.' }
];

export const links = [
  { label: 'Email', value: 'albertkaimenyi254@gmail.com', href: 'mailto:albertkaimenyi254@gmail.com' },
  { label: 'Phone', value: '+254 702 519 938', href: 'tel:+254702519938' },
  { label: 'Instagram', value: '@lucid.craft_', href: 'https://www.instagram.com/lucid.craft_/' },
  { label: 'Behance', value: 'albertkay_', href: 'https://www.behance.net/albertkay_' },
  { label: 'Kaleido', value: 'kaleido.art/links/alberKay', href: 'https://www.kaleido.art/links/alberKay' }
];
