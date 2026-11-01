// Generates the neon line-art project illustrations in assets/images/projects/*.svg
// Run from the Portfolio folder:  node _src/project-art.js
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'images', 'projects');
const C = { cyan: '#22d3ee', violet: '#a78bfa', red: '#ff5a4e', amber: '#fbbf24', green: '#34d399', lime: '#a3e635', sky: '#38bdf8', teal: '#2dd4bf', orange: '#fb923c', blue: '#60a5fa', ink: '#e6f1ff', dim: '#64748b' };
const SANS = "'Segoe UI','Helvetica Neue',Arial,sans-serif";
const MONO = "Consolas,'Courier New',monospace";

/* ---------- shared pieces ---------- */
const xml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const text = (x, y, s, { size = 12, fill = C.ink, font = MONO, weight = 400, anchor = 'start', opacity = 1 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" fill-opacity="${opacity}" text-anchor="${anchor}">${xml(s)}</text>`;

const pin = (x, y, color) =>
  `<path d="M${x} ${y - 14}a12 12 0 0 1 12 12c0 9-12 20-12 20s-12-11-12-20a12 12 0 0 1 12-12z" stroke="${color}"/><circle cx="${x}" cy="${y - 2}" r="4" stroke="${color}"/>`;

const browser = (x, y, w, h, url, color = C.cyan) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" stroke="${color}"/>
  <path d="M${x} ${y + 26}h${w}" stroke="${color}" stroke-opacity=".6"/>
  <circle cx="${x + 14}" cy="${y + 13}" r="3.5" fill="${C.red}" stroke="none"/><circle cx="${x + 26}" cy="${y + 13}" r="3.5" fill="${C.amber}" stroke="none"/><circle cx="${x + 38}" cy="${y + 13}" r="3.5" fill="${C.green}" stroke="none"/>
  <rect x="${x + 54}" y="${y + 6}" width="${w - 70}" height="14" rx="7" stroke="${color}" stroke-opacity=".4" stroke-width="1.5"/>`;
const browserUrl = (x, y, url) => text(x + 64, y + 17, url, { size: 10, fill: C.dim });

// Deterministic QR-style module grid with three finder squares
function qr(x, y, size, color, seed = 7) {
  const n = 11, c = size / n;
  let s = seed, out = '';
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const finder = (fx, fy) => `<rect x="${x + fx * c}" y="${y + fy * c}" width="${c * 3}" height="${c * 3}" stroke="${color}" stroke-width="2"/><rect x="${x + (fx + 1) * c}" y="${y + (fy + 1) * c}" width="${c}" height="${c}" fill="${color}" stroke="none"/>`;
  out += finder(0, 0) + finder(n - 3, 0) + finder(0, n - 3);
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const inFinder = (i < 4 && j < 4) || (i > n - 5 && j < 4) || (i < 4 && j > n - 5);
    if (!inFinder && rnd() > 0.52) out += `<rect x="${x + i * c + 0.6}" y="${y + j * c + 0.6}" width="${c - 1.2}" height="${c - 1.2}" fill="${color}" stroke="none"/>`;
  }
  return out;
}

function frame({ label, accent, art, overlay = '', acronym = '', glowX = 0.5 }) {
  const ncip = acronym ? `
  <rect x="552" y="18" width="68" height="24" rx="6" fill="#ffffff" fill-opacity=".06" stroke="#ffffff" stroke-opacity=".3"/>
  ${text(586, 34, 'GOV', { size: 12, fill: C.ink, anchor: 'middle', weight: 700 })}
  <text x="28" y="322" font-family="${SANS}" font-size="${acronym.length > 6 ? 50 : 60}" font-weight="800" fill="#ffffff" filter="url(#neon)" letter-spacing="-1">${acronym}</text>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050813"/><stop offset="1" stop-color="#0c1226"/></linearGradient>
  <radialGradient id="glow" cx="${glowX}" cy="0.48" r="0.55"><stop offset="0" stop-color="${accent}" stop-opacity="0.30"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#22d3ee" stroke-opacity="0.07"/></pattern>
  <filter id="neon" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="640" height="360" fill="url(#bg)"/>
<rect width="640" height="360" fill="url(#grid)"/>
<rect width="640" height="360" fill="url(#glow)"/>
<g filter="url(#neon)" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${art}</g>
${overlay}
${text(24, 34, '// ' + label, { size: 13, fill: C.cyan, opacity: 0.8 })}${ncip}
<rect x="0" y="356" width="640" height="4" fill="${accent}" fill-opacity="0.85"/>
</svg>
`;
}

/* ---------- illustrations ---------- */
const ART = {
  // ===== NCIP systems (art on the right, acronym bottom-left) =====
  drip: frame({
    label: 'data repository', accent: C.cyan, acronym: 'DRIP', glowX: 0.74,
    art: `
      <ellipse cx="500" cy="100" rx="78" ry="20" stroke="${C.cyan}"/>
      <path d="M422 100v160M578 100v160" stroke="${C.cyan}"/>
      <path d="M422 153a78 20 0 0 0 156 0M422 206a78 20 0 0 0 156 0M422 260a78 20 0 0 0 156 0" stroke="${C.cyan}"/>
      ${[[452, 128], [480, 132], [508, 130], [462, 182], [500, 186], [536, 182], [470, 235], [520, 238]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="${C.cyan}" stroke="none"/>`).join('')}
      ${pin(352, 96, C.violet)}${pin(338, 178, C.violet)}${pin(360, 258, C.violet)}
      <path d="M366 92C392 92 400 108 420 118M352 176C380 176 396 178 420 178M374 252C396 252 404 240 420 236" stroke="${C.violet}" stroke-dasharray="4 7"/>`,
  }),
  pdmis: frame({
    label: 'proposal → approval → signed plan', accent: C.red, acronym: 'PDMIS', glowX: 0.74,
    art: `
      <path d="M365 132h30M425 132h30M485 132h30M545 132h20" stroke="${C.dim}"/>
      ${[350, 410, 470, 530].map((x, i) => `<circle cx="${x}" cy="132" r="15" stroke="${i < 3 ? C.cyan : C.amber}"/>${i < 3 ? `<path d="M${x - 6} 132l4 4 8-8" stroke="${C.cyan}"/>` : `<path d="M${x - 6} 138l9-9 3 3-9 9h-3z" stroke="${C.amber}"/>`}`).join('')}
      <path d="M572 112h26l10 10v34h-36z" stroke="${C.red}"/><path d="M580 136c6-8 10 6 16-2" stroke="${C.red}"/>
      <path d="M470 112C458 72 362 72 350 112" stroke="${C.amber}" stroke-dasharray="5 6"/><path d="M344 104l6 8 7-7" stroke="${C.amber}"/>
      <rect x="340" y="196" width="120" height="12" rx="4" fill="${C.red}" fill-opacity=".75" stroke="none"/>
      <rect x="400" y="222" width="150" height="12" rx="4" fill="${C.violet}" fill-opacity=".7" stroke="none"/>
      <rect x="370" y="248" width="90" height="12" rx="4" fill="${C.cyan}" fill-opacity=".7" stroke="none"/>
      <rect x="470" y="274" width="130" height="12" rx="4" fill="${C.amber}" fill-opacity=".7" stroke="none"/>`,
    overlay: ['draft', 'review', 'recommend', 'approve', 'sign'].map((s, i) => text(350 + i * 60 + (i === 4 ? 12 : 0), 168, s, { size: 10, fill: C.dim, anchor: 'middle' })).join(''),
  }),
  sso: frame({
    label: 'single sign-on', accent: C.teal, acronym: 'SSO', glowX: 0.74,
    art: `
      <path d="M480 92l62 24v52c0 46-31 72-62 84-31-12-62-38-62-84v-52z" stroke="${C.teal}"/>
      <circle cx="480" cy="160" r="13" stroke="${C.ink}"/><path d="M480 173v24" stroke="${C.ink}"/>
      ${[[352, 70], [352, 240], [568, 70], [568, 240]].map(([x, y]) => `<rect x="${x}" y="${y}" width="44" height="44" rx="10" stroke="${C.violet}"/><path d="M${x + 12} ${y + 16}h20M${x + 12} ${y + 24}h14M${x + 12} ${y + 32}h18" stroke="${C.violet}" stroke-width="2"/>`).join('')}
      <path d="M396 100L428 128M396 252L428 220M568 100L536 128M568 252L536 220" stroke="${C.teal}" stroke-dasharray="4 6"/>`,
  }),
  coc: frame({
    label: 'certificate + qr verification', accent: C.green, acronym: 'COC', glowX: 0.74,
    art: `
      <rect x="340" y="70" width="150" height="206" rx="8" stroke="${C.ink}" stroke-opacity=".85"/>
      <path d="M364 100h102M378 120h74" stroke="${C.ink}" stroke-width="3"/>
      <path d="M362 150h106M362 168h106M362 186h80M362 204h96" stroke="${C.dim}" stroke-width="2"/>
      <circle cx="450" cy="240" r="18" stroke="${C.amber}"/><path d="M440 255l-6 22 10-6 6 10 4-20M460 255l6 22-10-6-6 10" stroke="${C.amber}" stroke-width="2"/>
      ${qr(512, 110, 96, C.green, 11)}
      <path d="M504 158h112" stroke="${C.cyan}" stroke-width="3"/>
      <circle cx="606" cy="100" r="15" stroke="${C.green}"/><path d="M599 100l5 5 9-10" stroke="${C.green}"/>`,
  }),
  ips: frame({
    label: 'indigenous political structures & organizations', accent: C.violet, acronym: 'IPS · IPO', glowX: 0.74,
    art: `
      <path d="M480 100L390 170M480 100L480 170M480 100L570 170M390 170L355 248M390 170L420 248M480 170L470 248M480 170L525 248M570 170L580 248" stroke="${C.violet}" stroke-opacity=".7"/>
      ${[[480, 92, 16], [390, 170, 13], [480, 170, 13], [570, 170, 13]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" stroke="${C.violet}"/><circle cx="${x}" cy="${y - 4}" r="${r / 3.2}" stroke="${C.ink}" stroke-width="2"/><path d="M${x - r / 2} ${y + r / 2.2}a${r / 2} ${r / 2.6} 0 0 1 ${r} 0" stroke="${C.ink}" stroke-width="2"/>`).join('')}
      ${[355, 420, 470, 525, 580].map((x) => `<circle cx="${x}" cy="252" r="9" stroke="${C.cyan}"/><circle cx="${x}" cy="252" r="2.5" fill="${C.cyan}" stroke="none"/>`).join('')}`,
  }),
  dts: frame({
    label: 'document routing & tracking', accent: C.sky, acronym: 'DTS v2', glowX: 0.74,
    art: `
      ${[[340, 210], [460, 96], [566, 210]].map(([x, y]) => `<path d="M${x} ${y + 60}v-48l22-12 22 12v48z" stroke="${C.sky}"/><path d="M${x + 12} ${y + 24}h6M${x + 26} ${y + 24}h6M${x + 12} ${y + 38}h6M${x + 26} ${y + 38}h6M${x + 18} ${y + 60}v-10h8v10" stroke="${C.sky}" stroke-width="2"/>`).join('')}
      <path d="M384 238C420 238 420 150 456 140M508 140C548 150 560 200 566 230" stroke="${C.violet}" stroke-dasharray="5 7"/>
      <path d="M404 166h28l10 10v36h-38z" stroke="${C.ink}"/><path d="M432 166v10h10M412 186h22M412 196h16" stroke="${C.ink}" stroke-width="2"/>
      ${pin(546, 170, C.amber)}`,
  }),
  qras: frame({
    label: 'quick response authenticator', accent: C.lime, acronym: 'QRAS', glowX: 0.74,
    art: `
      <rect x="340" y="120" width="76" height="100" rx="6" stroke="${C.ink}" stroke-opacity=".8"/>
      <path d="M352 140h52M352 152h40" stroke="${C.dim}" stroke-width="2"/>${qr(366, 168, 40, C.ink, 5)}
      <path d="M424 170h34M450 162l8 8-8 8" stroke="${C.lime}"/>
      <rect x="470" y="66" width="120" height="220" rx="18" stroke="${C.lime}"/><path d="M512 80h36" stroke="${C.lime}" stroke-width="2"/>
      ${qr(486, 120, 88, C.lime, 23)}
      <path d="M478 168h104" stroke="${C.cyan}" stroke-width="3"/>
      <circle cx="530" cy="250" r="16" stroke="${C.green}"/><path d="M522 250l6 6 10-11" stroke="${C.green}"/>`,
  }),
  eais: frame({
    label: 'educational assistance', accent: C.amber, acronym: 'EAIS v3', glowX: 0.74,
    art: `
      <path d="M470 70l84 32-84 32-84-32z" stroke="${C.amber}"/>
      <path d="M418 116v34c0 18 104 18 104 0v-34" stroke="${C.amber}"/><path d="M554 102v52" stroke="${C.amber}"/><circle cx="554" cy="160" r="5" stroke="${C.amber}"/>
      <path d="M380 222c30-12 60-12 90 4 30-16 60-16 90-4v62c-30-12-60-12-90 4-30-16-60-16-90-4z" stroke="${C.ink}" stroke-opacity=".85"/><path d="M470 226v62" stroke="${C.ink}" stroke-opacity=".85"/>
      <path d="M396 244h56M396 258h46M488 244h56M488 258h40" stroke="${C.dim}" stroke-width="2"/>
      <path d="M352 200l26-22 20 10 28-30" stroke="${C.cyan}"/><path d="M414 158h12v12" stroke="${C.cyan}"/>`,
  }),
  abis: frame({
    label: 'accounting & budget', accent: C.blue, acronym: 'ABIS', glowX: 0.74,
    art: `
      <path d="M340 280h270M340 280V90" stroke="${C.dim}"/>
      ${[[360, 200], [410, 160], [460, 180], [510, 120], [560, 140]].map(([x, y], i) => `<rect x="${x}" y="${y}" width="30" height="${280 - y}" rx="4" fill="${[C.blue, C.cyan, C.blue, C.violet, C.cyan][i]}" fill-opacity=".55" stroke="none"/>`).join('')}
      <path d="M375 190L425 150 475 168 525 108 575 126" stroke="${C.amber}"/>
      ${[[375, 190], [425, 150], [475, 168], [525, 108], [575, 126]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#0c1226" stroke="${C.amber}"/>`).join('')}
      <circle cx="400" cy="92" r="24" stroke="${C.amber}"/>`,
    overlay: text(400, 101, '₱', { size: 26, fill: C.amber, font: SANS, weight: 700, anchor: 'middle' }),
  }),

  // ===== Live demo =====
  approval: frame({
    label: 'live demo · laravel 12 · try it', accent: C.cyan,
    art: `
      ${['draft', 'review', 'approved', 'signed'].map((s, i) => `<rect x="${84 + i * 118}" y="70" width="96" height="34" rx="8" stroke="${i === 3 ? C.green : C.cyan}" ${i === 3 ? `fill="${C.green}" fill-opacity=".12"` : ''}/>`).join('')}
      <path d="M180 87h22M298 87h22M416 87h22" stroke="${C.dim}"/>
      <path d="M298 70C286 40 196 40 180 70" stroke="${C.amber}" stroke-dasharray="5 6"/><path d="M174 62l6 8 7-7" stroke="${C.amber}"/>
      <rect x="120" y="140" width="250" height="176" rx="10" stroke="${C.ink}" stroke-opacity=".8"/>
      <path d="M142 170h150M142 190h110" stroke="${C.ink}" stroke-width="3"/>
      <path d="M142 222h200M142 240h200M142 258h140" stroke="${C.dim}" stroke-width="2"/>
      <path d="M142 296c10-14 20 8 30-4s18 6 28-2" stroke="${C.violet}"/>
      ${qr(410, 168, 110, C.green, 19)}
      <path d="M402 222h126" stroke="${C.cyan}" stroke-width="3"/>
      <circle cx="532" cy="150" r="16" stroke="${C.green}"/><path d="M525 150l5 5 9-10" stroke="${C.green}"/>`,
    overlay: ['draft', 'in review', 'approved', 'signed'].map((s, i) => text(132 + i * 118, 92, s, { size: 12, fill: i === 3 ? C.green : C.ink, anchor: 'middle' })).join('') +
      text(142, 160, 'CERTIFICATE OF APPROVAL', { size: 10, fill: C.dim }) + text(465, 300, 'scan to verify', { size: 11, fill: C.green, anchor: 'middle' }),
  }),

  // ===== Web development =====
  capstone3: frame({
    label: 'mern e-commerce', accent: C.violet,
    art: `
      ${browser(120, 52, 360, 262, '', C.violet)}
      ${[0, 1, 2].map((i) => `<rect x="${140 + i * 110}" y="128" width="96" height="150" rx="8" stroke="${C.violet}" stroke-opacity=".8"/><rect x="${150 + i * 110}" y="138" width="76" height="60" rx="5" stroke="${C.cyan}" stroke-opacity=".7"/><path d="M${150 + i * 110} 214h56M${150 + i * 110} 228h36" stroke="${C.dim}" stroke-width="2"/><rect x="${150 + i * 110}" y="246" width="76" height="20" rx="6" fill="${C.violet}" fill-opacity=".35" stroke="${C.violet}" stroke-width="1.5"/>`).join('')}
      <path d="M512 130h14l18 70h62l14-50h-86" stroke="${C.cyan}"/><circle cx="552" cy="216" r="7" stroke="${C.cyan}"/><circle cx="598" cy="216" r="7" stroke="${C.cyan}"/>
      <circle cx="616" cy="128" r="12" fill="${C.red}" stroke="none"/>`,
    overlay: browserUrl(120, 52, 'digital-depot.app') + text(140, 108, 'Digital Depot', { size: 20, font: SANS, weight: 800 }) +
      text(616, 133, '3', { size: 13, font: SANS, weight: 700, anchor: 'middle' }) +
      [0, 1, 2].map((i) => text(188 + i * 110, 260, 'Add to cart', { size: 9, fill: C.ink, anchor: 'middle' })).join(''),
  }),
  capstone2: frame({
    label: 'rest api · express + mongodb', accent: C.green,
    art: `<rect x="96" y="56" width="448" height="252" rx="12" stroke="${C.green}"/><path d="M96 84h448" stroke="${C.green}" stroke-opacity=".6"/>
      <circle cx="112" cy="70" r="4" fill="${C.red}" stroke="none"/><circle cx="126" cy="70" r="4" fill="${C.amber}" stroke="none"/><circle cx="140" cy="70" r="4" fill="${C.green}" stroke="none"/>`,
    overlay: [
      text(160, 74, 'api — node server.js', { size: 11, fill: C.dim }),
      text(116, 112, '$ npm start', { size: 13, fill: C.ink }),
      text(116, 134, '▸ Express server running on port 4000', { size: 13, fill: C.green }),
      text(116, 156, '▸ MongoDB connected', { size: 13, fill: C.green }),
      text(116, 188, 'GET ', { size: 13, fill: C.cyan, weight: 700 }) + text(170, 188, '/products', { size: 13 }) + text(470, 188, '200', { size: 13, fill: C.green }),
      text(116, 210, 'POST', { size: 13, fill: C.amber, weight: 700 }) + text(170, 210, '/users/login', { size: 13 }) + text(470, 210, '200', { size: 13, fill: C.green }),
      text(116, 232, 'POST', { size: 13, fill: C.amber, weight: 700 }) + text(170, 232, '/orders/checkout', { size: 13 }) + text(470, 232, '201', { size: 13, fill: C.green }),
      text(116, 254, 'PUT ', { size: 13, fill: C.violet, weight: 700 }) + text(170, 254, '/products/:id/archive', { size: 13 }) + text(470, 254, '200', { size: 13, fill: C.green }),
      text(116, 286, '{ "access": "eyJhbGciOiJIUzI1NiIs…" }', { size: 13, fill: C.dim }),
    ].join(''),
  }),
  dianne: frame({
    label: 'architect portfolio', accent: C.amber,
    art: `
      ${browser(100, 52, 440, 262, '', C.amber)}
      <path d="M380 290V150l60-30 60 30v140" stroke="${C.cyan}"/><path d="M440 120v170M380 150l60 28 60-28M440 178v112" stroke="${C.cyan}" stroke-opacity=".7"/>
      ${[0, 1, 2, 3].map((r) => `<path d="M392 ${190 + r * 24}l36 16M452 ${206 + r * 24}l36-16" stroke="${C.cyan}" stroke-width="1.6" stroke-opacity=".7"/>`).join('')}
      <path d="M340 290h200M350 290v-50h30" stroke="${C.amber}" stroke-dasharray="4 5"/>
      <rect x="124" y="226" width="96" height="28" rx="14" stroke="${C.amber}"/>`,
    overlay: browserUrl(100, 52, 'architect-portfolio.design') + text(124, 136, 'Hello, I\'m an', { size: 16, font: "Georgia,serif", fill: C.ink }) +
      text(124, 166, 'Architectural', { size: 24, font: "Georgia,serif", weight: 700 }) + text(124, 194, 'Designer', { size: 24, font: "Georgia,serif", weight: 700 }) +
      text(172, 245, 'View work', { size: 11, fill: C.amber, anchor: 'middle' }),
  }),
  capstone1: frame({
    label: 'html · css · bootstrap', accent: C.orange,
    art: `
      ${browser(100, 52, 440, 262, '', C.orange)}
      <path d="M380 98h30M420 98h30M460 98h30M500 98h24" stroke="${C.dim}" stroke-width="2"/>
      ${[0, 1, 2].map((i) => `<rect x="${124 + i * 136}" y="214" width="120" height="78" rx="8" stroke="${C.orange}" stroke-opacity=".75"/><path d="M${138 + i * 136} 236h70M${138 + i * 136} 252h50M${138 + i * 136} 268h60" stroke="${C.dim}" stroke-width="2"/>`).join('')}
      <rect x="282" y="176" width="76" height="22" rx="4" stroke="${C.orange}"/>`,
    overlay: browserUrl(100, 52, 'raychardatienza.github.io/webportfolio') + text(124, 103, 'RA', { size: 14, fill: C.orange, weight: 700 }) +
      text(320, 140, 'Welcome to my Portfolio', { size: 22, fill: C.orange, anchor: 'middle' }) + text(320, 164, 'Raychard Atienza · Full Stack Web Developer', { size: 11, fill: C.ink, anchor: 'middle', opacity: 0.8 }) +
      text(320, 191, 'About me', { size: 10, fill: C.orange, anchor: 'middle' }),
  }),

  // ===== Engineering, security & IoT =====
  fruit: frame({
    label: 'automated fruit picking machine', accent: C.green,
    art: `
      <rect x="176" y="282" width="110" height="22" rx="6" stroke="${C.ink}" stroke-opacity=".8"/><path d="M196 304v10M266 304v10" stroke="${C.ink}" stroke-opacity=".8"/>
      <path d="M231 282L262 196 372 156" stroke="${C.cyan}" stroke-width="6"/>
      ${[[231, 282], [262, 196], [372, 156]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" stroke="${C.ink}"/>`).join('')}
      <path d="M372 156l26-14M372 156l26 14M398 142l8 6M398 170l8-6" stroke="${C.cyan}"/>
      <rect x="244" y="168" width="30" height="20" rx="4" stroke="${C.violet}"/><circle cx="259" cy="178" r="5" stroke="${C.violet}"/>
      <path d="M274 172L414 150M274 184L476 200" stroke="${C.violet}" stroke-dasharray="3 6" stroke-width="1.6"/>
      <path d="M560 82C520 100 470 120 430 136M520 100c4 30 -10 60 -30 84" stroke="#86efac"/>
      <path d="M470 118c10-16 30-18 36-10-10 12-26 16-36 10z" stroke="#86efac"/>
      <circle cx="428" cy="158" r="18" stroke="${C.red}" fill="${C.red}" fill-opacity=".2"/>
      <circle cx="490" cy="202" r="14" stroke="#86efac" fill="#86efac" fill-opacity=".15"/>`,
    overlay: text(452, 176, 'ripe ✓', { size: 11, fill: C.red }) + text(526, 228, 'unripe', { size: 11, fill: '#86efac', anchor: 'middle' }),
  }),
  cctv: frame({
    label: 'ip video surveillance', accent: C.cyan,
    art: `
      <path d="M210 320V150" stroke="${C.ink}" stroke-opacity=".8" stroke-width="4"/><path d="M210 150h30v-18" stroke="${C.ink}" stroke-opacity=".8"/>
      <rect x="196" y="96" width="120" height="40" rx="10" stroke="${C.cyan}"/><rect x="316" y="104" width="16" height="24" rx="4" stroke="${C.cyan}"/>
      <circle cx="324" cy="116" r="5" fill="${C.cyan}" stroke="none"/>
      <path d="M332 116L580 52M332 116L580 236" stroke="${C.cyan}" stroke-dasharray="5 7"/>
      <path d="M332 116L580 52V236Z" fill="${C.cyan}" fill-opacity=".07" stroke="none"/>
      <circle cx="226" cy="116" r="5" fill="${C.red}" stroke="none"/>
      <path d="M210 300H420" stroke="${C.violet}" stroke-dasharray="4 6"/>
      <rect x="420" y="276" width="140" height="44" rx="8" stroke="${C.violet}"/>
      ${[440, 456, 472].map((x) => `<circle cx="${x}" cy="298" r="3.5" fill="${C.green}" stroke="none"/>`).join('')}<path d="M500 292h44M500 304h30" stroke="${C.violet}" stroke-width="2"/>`,
    overlay: text(236, 121, 'REC', { size: 11, fill: C.red, weight: 700 }) + text(490, 268, 'NVR', { size: 11, fill: C.violet, anchor: 'middle' }),
  }),
  access: frame({
    label: 'access control system', accent: C.violet,
    art: `
      <rect x="150" y="60" width="160" height="264" rx="4" stroke="${C.ink}" stroke-opacity=".75"/><rect x="164" y="74" width="132" height="236" stroke="${C.ink}" stroke-opacity=".35"/>
      <path d="M282 190h-14" stroke="${C.ink}" stroke-width="4"/>
      <rect x="340" y="110" width="80" height="140" rx="12" stroke="${C.violet}"/>
      <circle cx="380" cy="132" r="4" fill="${C.green}" stroke="none"/>
      ${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${356 + c * 18}" y="${148 + r * 18}" width="12" height="12" rx="3" stroke="${C.violet}" stroke-width="1.6"/>`).join('')).join('')}
      <path d="M368 224a12 12 0 0 1 24 0M364 232a16 16 0 0 1 32 0M372 224v8M388 224v6" stroke="${C.cyan}" stroke-width="1.8"/>
      <g transform="rotate(-14 520 170)"><rect x="470" y="140" width="96" height="60" rx="8" stroke="${C.cyan}"/><rect x="482" y="152" width="22" height="16" rx="3" stroke="${C.amber}" stroke-width="2"/><path d="M482 184h50" stroke="${C.cyan}" stroke-width="2"/></g>
      <path d="M440 150a28 28 0 0 1 0 40M452 140a44 44 0 0 1 0 60" stroke="${C.cyan}"/>`,
  }),
  water: frame({
    label: 'water leak detection', accent: C.sky,
    art: `
      <path d="M96 104H300M96 128H300M340 104H560M340 128H560" stroke="${C.ink}" stroke-opacity=".8"/>
      <rect x="296" y="94" width="48" height="44" rx="6" stroke="${C.sky}"/><path d="M320 94V74M306 74h28" stroke="${C.sky}"/>
      <path d="M326 138l-4 8 6 4" stroke="${C.red}"/>
      ${[[322, 172, 1], [334, 208, 0.85], [318, 238, 0.7]].map(([x, y, s]) => `<path d="M${x} ${y - 14 * s}c${7 * s} ${9 * s} ${10 * s} ${14 * s} ${10 * s} ${19 * s}a${10 * s} ${10 * s} 0 0 1 -${20 * s} 0c0-5 ${3 * s}-10 ${10 * s}-19z" stroke="${C.sky}" fill="${C.sky}" fill-opacity=".18"/>`).join('')}
      <ellipse cx="330" cy="290" rx="90" ry="12" stroke="${C.sky}" fill="${C.sky}" fill-opacity=".12"/>
      <rect x="420" y="270" width="70" height="26" rx="6" stroke="${C.violet}"/><circle cx="436" cy="283" r="4" fill="${C.red}" stroke="none"/>
      <path d="M440 254a20 20 0 0 1 30 0M430 240a36 36 0 0 1 50 0M420 226a52 52 0 0 1 70 0" stroke="${C.amber}"/>`,
    overlay: text(455, 316, 'sensor', { size: 11, fill: C.violet, anchor: 'middle' }),
  }),
  advise: frame({
    label: 'automated advising system', accent: C.violet,
    art: `
      <rect x="120" y="76" width="150" height="208" rx="12" stroke="${C.violet}"/>
      <circle cx="195" cy="122" r="22" stroke="${C.ink}" stroke-opacity=".85"/><path d="M161 178a34 22 0 0 1 68 0" stroke="${C.ink}" stroke-opacity=".85"/>
      <path d="M142 206h106M142 224h80M142 242h96M142 260h60" stroke="${C.dim}" stroke-width="2"/>
      <path d="M286 180h46M322 170l10 10-10 10" stroke="${C.cyan}"/>
      <path d="M352 284h196M352 284V100" stroke="${C.dim}"/>
      ${[[370, 220], [410, 190], [450, 200], [490, 150], [530, 130]].map(([x, y]) => `<rect x="${x}" y="${y}" width="24" height="${284 - y}" rx="4" fill="${C.violet}" fill-opacity=".5" stroke="none"/>`).join('')}
      <path d="M382 206L422 178 462 186 502 138 542 116" stroke="${C.cyan}"/>
      <path d="M520 70l30 12-30 12-30-12z" stroke="${C.amber}"/><path d="M502 88v12c0 7 36 7 36 0V88" stroke="${C.amber}"/>`,
  }),
  lighting: frame({
    label: 'room lighting system', accent: C.amber,
    art: `
      <path d="M320 64a42 42 0 0 1 26 75v19h-52v-19a42 42 0 0 1 26-75z" stroke="${C.amber}" fill="${C.amber}" fill-opacity=".12"/>
      <path d="M298 168h44M302 178h36M312 188h16" stroke="${C.amber}"/><path d="M310 120l10 14 10-14" stroke="${C.amber}" stroke-width="2"/>
      <path d="M252 104h-26M388 104h26M266 58l-18-18M374 58l18-18M320 40V16" stroke="${C.amber}"/>
      <rect x="250" y="236" width="140" height="74" rx="8" stroke="${C.cyan}"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${266 + i * 14} 236v-8" stroke="${C.cyan}" stroke-width="2"/>`).join('')}
      <rect x="292" y="258" width="48" height="30" rx="4" stroke="${C.cyan}" stroke-opacity=".6"/>
      <circle cx="160" cy="250" r="20" stroke="${C.violet}"/><path d="M148 250h6l3-7 6 14 3-7h6" stroke="${C.violet}" stroke-width="2"/>
      <path d="M180 250H250" stroke="${C.violet}" stroke-dasharray="4 5"/>
      <rect x="450" y="244" width="70" height="46" rx="6" stroke="${C.green}"/><circle cx="472" cy="267" r="9" stroke="${C.green}"/><path d="M472 267l40-34" stroke="${C.green}" stroke-width="4"/>
      <path d="M390 268H450" stroke="${C.green}" stroke-dasharray="4 5"/>`,
    overlay: text(160, 294, 'LDR', { size: 11, fill: C.violet, anchor: 'middle' }) + text(320, 327, 'Arduino Uno', { size: 11, fill: C.cyan, anchor: 'middle' }) + text(485, 310, 'servo', { size: 11, fill: C.green, anchor: 'middle' }),
  }),
  pp: frame({
    label: 'pong on an 8×8 led matrix', accent: C.red,
    art: `
      <rect x="226" y="52" width="188" height="188" rx="10" stroke="${C.ink}" stroke-opacity=".6"/>
      ${Array.from({ length: 64 }, (_, k) => {
        const r = Math.floor(k / 8), c = k % 8;
        const lit = (c === 0 && r >= 2 && r <= 4) || (c === 7 && r >= 4 && r <= 6) || (c === 4 && r === 3);
        return `<circle cx="${244 + c * 22}" cy="${70 + r * 22}" r="7" ${lit ? `fill="${c === 4 ? C.amber : C.red}" stroke="none"` : `stroke="${C.dim}" stroke-width="1.4" stroke-opacity=".6"`}/>`;
      }).join('')}
      <path d="M332 136l-60-30" stroke="${C.amber}" stroke-dasharray="3 6" stroke-width="1.6"/>
      <rect x="250" y="262" width="140" height="62" rx="8" stroke="${C.cyan}"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${266 + i * 14} 262v-8" stroke="${C.cyan}" stroke-width="2"/>`).join('')}
      <circle cx="140" cy="290" r="20" stroke="${C.violet}"/><path d="M140 290l10-10" stroke="${C.violet}"/><circle cx="500" cy="290" r="20" stroke="${C.violet}"/><path d="M500 290l-10-10" stroke="${C.violet}"/>
      <path d="M160 290H250M390 290H480" stroke="${C.violet}" stroke-dasharray="4 5"/>`,
  }),
  burglar: frame({
    label: 'infrared burglar alarm', accent: C.red,
    art: `
      <path d="M200 330V70h220v260" stroke="${C.ink}" stroke-opacity=".7"/>
      <rect x="200" y="184" width="18" height="18" rx="3" stroke="${C.red}"/><rect x="402" y="184" width="18" height="18" rx="3" stroke="${C.red}"/>
      <path d="M218 193H282M346 193H402" stroke="${C.red}" stroke-dasharray="6 5"/>
      <circle cx="314" cy="128" r="18" stroke="${C.ink}"/><path d="M314 146v80M314 168l-30 26M314 168l30 22M314 226l-24 70M314 226l24 70" stroke="${C.ink}"/>
      <path d="M500 104l26-16v68l-26-16h-16v-36z" stroke="${C.amber}"/>
      <path d="M540 104a20 20 0 0 1 0 32M552 92a38 38 0 0 1 0 56M564 80a56 56 0 0 1 0 80" stroke="${C.amber}"/>`,
    overlay: text(310, 352 - 30, 'IR beam broken → alarm', { size: 11, fill: C.red, anchor: 'middle' }),
  }),
  calculator: frame({
    label: 'assembly language calculator', accent: C.green,
    art: `
      <rect x="120" y="58" width="160" height="250" rx="16" stroke="${C.green}"/>
      <rect x="138" y="78" width="124" height="46" rx="6" stroke="${C.green}" stroke-opacity=".7"/>
      ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${140 + c * 30}" y="${142 + r * 40}" width="22" height="28" rx="5" stroke="${c === 3 ? C.amber : C.green}" stroke-opacity="${c === 3 ? 1 : 0.7}" stroke-width="1.8"/>`).join('')).join('')}
      <rect x="310" y="76" width="246" height="210" rx="10" stroke="${C.dim}"/>`,
    overlay: text(252, 112, '42', { size: 26, fill: C.green, anchor: 'end', weight: 700 }) +
      [['MOV', 'AX, 0017h'], ['MOV', 'BX, 0019h'], ['ADD', 'AX, BX'], ['CALL', 'PRINT_NUM'], ['MOV', 'AH, 4Ch'], ['INT', '21h']].map(([op, arg], i) =>
        text(330, 112 + i * 28, op, { size: 15, fill: C.green, weight: 700 }) + text(390, 112 + i * 28, arg, { size: 15 })).join(''),
  }),
  pasystem: frame({
    label: 'public address system', accent: C.violet,
    art: `
      <rect x="120" y="110" width="44" height="74" rx="22" stroke="${C.ink}" stroke-opacity=".85"/>
      <path d="M128 134h28M128 148h28M128 162h28" stroke="${C.ink}" stroke-opacity=".5" stroke-width="2"/>
      <path d="M110 160a32 32 0 0 0 64 0M142 192v50M118 242h48" stroke="${C.ink}" stroke-opacity=".85"/>
      <path d="M174 214C210 214 214 238 250 238" stroke="${C.violet}" stroke-dasharray="4 5"/>
      <rect x="250" y="200" width="130" height="76" rx="10" stroke="${C.violet}"/>
      <rect x="264" y="214" width="62" height="28" rx="4" stroke="${C.cyan}" stroke-width="1.8"/><path d="M268 228c6-14 10 14 16 0s10 14 16 0 10 14 16 0" stroke="${C.cyan}" stroke-width="1.8"/>
      <circle cx="350" cy="228" r="9" stroke="${C.violet}"/><circle cx="290" cy="260" r="6" stroke="${C.violet}" stroke-width="1.8"/><circle cx="316" cy="260" r="6" stroke="${C.violet}" stroke-width="1.8"/>
      <path d="M380 238C410 238 420 200 440 180" stroke="${C.violet}" stroke-dasharray="4 5"/>
      <path d="M440 150h22l50-40v140l-50-40h-22z" stroke="${C.cyan}"/>
      <path d="M528 150a30 30 0 0 1 0 40M542 134a52 52 0 0 1 0 72M556 118a74 74 0 0 1 0 104" stroke="${C.cyan}"/>`,
  }),
  dc: frame({
    label: 'dc power supply · 220v ac → 3/6/9/12v dc', accent: C.amber,
    art: `
      <path d="M90 180c15-50 30-50 45 0s30 50 45 0 30-50 45 0" stroke="${C.cyan}"/>
      <path d="M250 120v120M262 120v120" stroke="${C.ink}" stroke-opacity=".6" stroke-width="2"/>
      <path d="M244 130c-20 0-20 16 0 16-20 0-20 16 0 16-20 0-20 16 0 16-20 0-20 16 0 16-20 0-20 16 0 16-20 0-20 16 0 16" stroke="${C.amber}"/>
      <path d="M268 136c14 0 14 14 0 14 14 0 14 14 0 14 14 0 14 14 0 14 14 0 14 14 0 14" stroke="${C.amber}"/>
      <path d="M350 130l50 50-50 50-50-50z" stroke="${C.violet}"/>
      <path d="M318 162l14-14M368 148l14 14M318 198l14 14M368 212l14-14" stroke="${C.violet}" stroke-width="2"/>
      <path d="M280 150H300M280 210H300M400 180h40" stroke="${C.dim}"/>
      ${[[440, 240, 0.6], [440, 200, 0.75], [440, 160, 0.9], [440, 120, 1]].map(([x, y, o]) => `<path d="M${x} ${y}H570" stroke="${C.green}" stroke-opacity="${o}"/>`).join('')}
      <path d="M440 240V120" stroke="${C.dim}" stroke-width="2"/>`,
    overlay: text(158, 236, '220V AC', { size: 12, fill: C.cyan, anchor: 'middle' }) + text(350, 262, 'rectifier', { size: 11, fill: C.violet, anchor: 'middle' }) +
      ['3V', '6V', '9V', '12V'].map((v, i) => text(584, 244 - i * 40, v, { size: 13, fill: C.green, weight: 700 })).join(''),
  }),
};

/* ---------- motion (SMIL, so it plays even when the SVG is used as an <img>) ---------- */
const loop = (attr, values, dur, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${dur}" repeatCount="indefinite" ${extra}/>`;
const travel = (d, color, dur = '2.6s', begin = '0s', r = 4) => `<circle r="${r}" fill="${color}"><animateMotion path="${d}" dur="${dur}" begin="${begin}" repeatCount="indefinite"/>${loop('opacity', '0;1;1;0', dur, `begin="${begin}"`)}</circle>`;
const ring = (cx, cy, r0, r1, color, dur = '2.6s') => `<circle cx="${cx}" cy="${cy}" r="${r0}" fill="none" stroke="${color}">${loop('r', `${r0};${r1}`, dur)}${loop('opacity', '.9;0', dur)}</circle>`;
const sweepBar = (x, y0, y1, w, color, dur = '2.4s') => `<rect x="${x}" y="${y0}" width="${w}" height="3" fill="${color}">${loop('y', `${y0};${y1};${y0}`, dur)}</rect>`;
const blink = (shape, dur = '1.2s') => shape.replace('/>', `>${loop('opacity', '1;0.15;1', dur)}</${shape.match(/^<(\w+)/)[1]}>`);

const ANIMS = {
  drip: ['M366 92C392 92 400 108 420 118', 'M352 176C380 176 396 178 420 178', 'M374 252C396 252 404 240 420 236'].map((d, i) => travel(d, C.violet, '2.4s', `${i * 0.7}s`, 3.5)).join(''),
  pdmis: travel('M335 132H600', C.cyan, '3.2s', '0s', 5),
  sso: ring(480, 160, 24, 90, C.teal),
  coc: sweepBar(508, 112, 204, 104, C.cyan),
  ips: ring(480, 92, 16, 60, C.violet, '3s'),
  dts: travel('M384 238C420 238 420 150 456 140', C.amber, '2.4s') + travel('M508 140C548 150 560 200 566 230', C.amber, '2.4s', '1.2s'),
  qras: sweepBar(482, 120, 206, 96, C.cyan, '2.2s') + ring(530, 250, 16, 34, C.green, '2s'),
  eais: travel('M352 200l26-22 20 10 28-30', C.cyan, '2.2s'),
  abis: travel('M375 190L425 150 475 168 525 108 575 126', C.amber, '3s'),
  approval: sweepBar(404, 168, 276, 122, C.cyan, '2.6s') + ring(532, 150, 16, 40, C.green, '2.4s'),
  capstone3: ring(616, 128, 12, 30, C.red, '1.8s'),
  capstone2: blink(`<rect x="392" y="274" width="9" height="16" fill="${C.green}"/>`, '1s'),
  fruit: ring(428, 158, 18, 40, C.red, '2.2s'),
  cctv: blink(`<circle cx="226" cy="116" r="5" fill="${C.red}"/>`, '1.1s') + `<path d="M332 116L580 52V236Z" fill="${C.cyan}" fill-opacity=".06">${loop('fill-opacity', '.03;.14;.03', '3s')}</path>`,
  access: blink(`<path d="M440 150a28 28 0 0 1 0 40M452 140a44 44 0 0 1 0 60" stroke="${C.cyan}" fill="none"/>`, '1.4s'),
  water: `<circle cx="330" r="5" fill="${C.sky}">${loop('cy', '150;282', '1.6s')}${loop('opacity', '1;1;0', '1.6s')}</circle>` + ring(455, 254, 12, 50, C.amber, '2s'),
  lighting: `<circle cx="320" cy="104" r="56" fill="${C.amber}" fill-opacity=".08">${loop('fill-opacity', '.04;.22;.04', '2.4s')}</circle>`,
  pp: `<circle r="7" fill="${C.amber}">${loop('cx', '266;376;266', '2.4s')}${loop('cy', '114;158;114', '2.4s')}</circle>`,
  burglar: blink(`<path d="M218 193H282M346 193H402" stroke="${C.red}" stroke-dasharray="6 5"/>`, '0.8s') + ring(500, 120, 20, 70, C.amber, '1.6s'),
  calculator: blink(`<rect x="256" y="92" width="8" height="22" fill="${C.green}"/>`, '1s'),
  pasystem: ring(470, 170, 30, 110, C.cyan, '2.2s'),
  dc: travel('M90 180c15-50 30-50 45 0s30 50 45 0 30-50 45 0', C.cyan, '2s', '0s', 4),
};

fs.mkdirSync(OUT, { recursive: true });
for (const [name, base] of Object.entries(ART)) {
  const accent = (base.match(/<rect x="0" y="356" width="640" height="4" fill="(#[0-9a-fA-F]+)"/) || [])[1] || C.cyan;
  const scanDef = `<linearGradient id="scanG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${accent}" stop-opacity="0"/><stop offset="1" stop-color="${accent}" stop-opacity="0.13"/></linearGradient>`;
  const scan = `<rect x="0" y="-80" width="640" height="80" fill="url(#scanG)">${loop('y', '-80;360', '6s')}</rect>`;
  const svg = base
    .replace('</defs>', `${scanDef}</defs>`)
    .replace('<rect x="0" y="356"', `<g filter="url(#neon)" fill="none" stroke-width="2.5" stroke-linecap="round">${ANIMS[name] || ''}</g>${scan}\n<rect x="0" y="356"`);
  fs.writeFileSync(path.join(OUT, `${name}.svg`), svg);
}
console.log(`wrote ${Object.keys(ART).length} illustrations to ${OUT}`);
