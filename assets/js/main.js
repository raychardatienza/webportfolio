// Portfolio behaviour: data, rendering, charts, effects and interactions.
// Edit content in the CONFIG, PROJECTS, TIMELINE, TRAINING and TESTIMONIALS sections.
/* =====================================================================
   CONFIG: edit these values
   ===================================================================== */
// Get a free access key at https://web3forms.com (enter raychardatienza@gmail.com).
// Until a key is set, the form falls back to opening the visitor's email app.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const CONTACT_EMAIL = 'raychardatienza@gmail.com';
const GITLAB = 'https://gitlab.com/b279-atienza';
// Optional: a scheduling link (e.g. https://cal.com/your-name). When set, a "Book a call" button appears in Contact.
const BOOKING_URL = '';
const ROLES = ['Full-Stack Developer', 'Laravel Developer', 'Information System Analyst', 'Certified Project Management Specialist', 'Certified Agile Scrum Master'];

/* =====================================================================
   ICONS (Lucide-style strokes + brand marks)
   ===================================================================== */
const STROKE = {
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  sparkle: '<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
};
const FILLED = {
  github: '<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>',
  linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>',
  gitlab: '<path d="m23.6 9.59-.03-.09L20.3.98a.85.85 0 0 0-1.62.06l-2.2 6.75H7.53L5.32 1.04A.85.85 0 0 0 3.7.98L.43 9.5l-.03.09a6.07 6.07 0 0 0 2.01 7.01l.01.01.03.02 4.98 3.73 2.47 1.87 1.5 1.13a1.01 1.01 0 0 0 1.22 0l1.5-1.13 2.47-1.87 5.01-3.75.01-.01a6.08 6.08 0 0 0 2-7.01Z"/>',
};
function icon(name, cls = 'h-4 w-4') {
  if (FILLED[name]) return `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${FILLED[name]}</svg>`;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${STROKE[name] || ''}</svg>`;
}
function hydrateIcons(root = document) {
  root.querySelectorAll('i[data-icon]').forEach((el) => {
    const tpl = document.createElement('template');
    tpl.innerHTML = icon(el.dataset.icon, el.className);
    const svg = tpl.content.firstElementChild;
    if (el.dataset.when) svg.dataset.when = el.dataset.when;
    el.replaceWith(svg);
  });
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* =====================================================================
   PROJECTS: categories: gov | web | eng ; featured: true shows on default tab
   links: [{ label, href, icon }]; leave empty for internal systems
   ===================================================================== */
const PROJECTS = [
  // ---------- Public sector (2026) ----------
  {
    cat: 'gov', featured: true, acronym: 'DRIP', image: './assets/images/projects/drip.svg', accent: 'from-cyan-600 via-sky-700 to-indigo-800',
    title: 'Data Repository on Indigenous Peoples',
    org: 'Public sector', year: '2026', role: 'Co-creator',
    description: 'A centralized repository that consolidates Indigenous Peoples data gathered across regional and field offices into one structured, searchable system.',
    impact: 'Gives the agency a single, reliable source of data for planning, reporting and policy decisions.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    cat: 'gov', featured: true, acronym: 'PDMIS', image: './assets/images/projects/pdmis.svg', accent: 'from-[#FF2D20] via-rose-700 to-fuchsia-900',
    title: 'Project Development & Management Information System',
    org: 'Public sector', year: '2026', role: 'Co-creator',
    description: 'Plans, tracks and monitors agency projects end-to-end, including proposals, Work & Financial Plans (WFP) and PPMP, with dashboards, calendars and Excel/PDF reports.',
    impact: 'Moves spreadsheet-driven planning into one workflow, with digital document signing through the agency\'s e-signature service.',
    tech: ['Laravel 12', 'Inertia.js', 'React.js', 'Tailwind CSS', 'MySQL', 'Sanctum', 'Chart.js', 'Pest'],
    links: [{ label: 'Read case study', href: './case-studies/pdmis.html', icon: 'book', internal: true }],
  },
  {
    cat: 'gov', featured: true, acronym: 'SSO', image: './assets/images/projects/sso.svg', accent: 'from-teal-500 via-cyan-700 to-slate-900',
    title: 'IPSGSIS Single Sign-On Website',
    org: 'Public sector', year: '2026', role: 'Co-creator',
    description: 'A Single Sign-On (SSO) website for the IPSGSIS. Users authenticate once and move securely between the agency\'s systems.',
    impact: 'Fewer passwords to manage, centralized access control, and one consistent login experience across every platform.',
    tech: ['Laravel', 'Single Sign-On', 'MySQL'],
  },
  {
    cat: 'gov', featured: true, acronym: 'COC', image: './assets/images/projects/coc.svg', accent: 'from-emerald-500 via-teal-700 to-cyan-900',
    title: 'Certificate of Confirmation (COC) System',
    org: 'Public sector', year: '2026', role: 'Co-creator',
    description: 'Digitizes the processing and issuance of Certificates of Confirmation, with QR-based verification built on the earlier QRAS authenticator.',
    impact: 'Faster certificate processing, and partner agencies can confirm a COC\'s authenticity in seconds.',
    tech: ['Laravel', 'PHP', 'MySQL', 'QR Code Verification'],
  },
  {
    cat: 'gov', featured: true, acronym: 'IPS · IPO', image: './assets/images/projects/ips.svg', accent: 'from-violet-500 via-purple-700 to-indigo-900',
    title: 'IPS & IPO Information System',
    org: 'Public sector', year: '2026', role: 'Co-creator',
    description: 'Manages records of Indigenous Political Structures (IPS) and Indigenous Peoples Organizations (IPO), covering registration, profiles and status in one place.',
    impact: 'Consistent IPS/IPO data that field and central offices can retrieve and report on quickly.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Responsive Web App'],
  },
  // ---------- Public sector (2024–2025) ----------
  {
    cat: 'gov', acronym: 'DTS v2', image: './assets/images/projects/dts.svg', accent: 'from-slate-600 via-slate-800 to-cyan-900',
    title: 'Document Tracking System v2',
    org: 'Public sector', year: '2024–2025', role: 'Co-developer & trainer',
    description: 'Second version of an agency-wide document tracking platform for routing and monitoring official documents across offices.',
    impact: 'I conducted the end-user training for employees, which drove agency-wide adoption.',
    tech: ['Laravel', 'MySQL', 'JavaScript'],
  },
  {
    cat: 'gov', acronym: 'QRAS', image: './assets/images/projects/qras.svg', accent: 'from-lime-500 via-emerald-700 to-teal-900',
    title: 'Quick Response Authenticator System',
    org: 'Public sector', year: '2024', role: 'Co-developer',
    description: 'A QR-code authenticator used to confirm the validity of issued Certificates of Confirmation.',
    impact: 'Cut manual verification requests and laid the groundwork for the 2026 COC System.',
    tech: ['Laravel', 'MySQL', 'QR Code'],
  },
  {
    cat: 'gov', acronym: 'EAIS v3', image: './assets/images/projects/eais.svg', accent: 'from-amber-500 via-orange-700 to-rose-900',
    title: 'Educational Assistance Information System v3',
    org: 'Public sector', year: '2024', role: 'Co-developer',
    description: 'Enhancements to the system that manages an educational assistance program for Indigenous Peoples students.',
    impact: 'Smoother scholarship processing and better data handling for grantees and program staff.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    cat: 'gov', acronym: 'ABIS', image: './assets/images/projects/abis.svg', accent: 'from-blue-500 via-indigo-700 to-slate-900',
    title: 'Accounting & Budget Information System',
    org: 'Public sector', year: '2024–Present', role: 'Focal person',
    description: 'Documented requirements, evaluated vendors and technologies, and steered procurement of an agency-wide accounting and budget system through to deployment.',
    impact: 'Now the ABIS focal person, coordinating support, issues and user concerns.',
    tech: ['Requirements Analysis', 'Procurement', 'UAT', 'Deployment'],
  },

  // ---------- Web development ----------
  {
    cat: 'web', featured: true, image: './assets/images/projects/capstone3.svg',
    title: 'E-commerce Website (Full-stack Capstone)',
    org: 'Zuitt Coding Bootcamp', year: '2023',
    description: 'A full-stack online store with product catalog, user accounts, checkout and an admin dashboard for managing products.',
    impact: 'End-to-end MERN build: REST API, token-based auth and a responsive React front-end.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap'],
    links: [{ label: 'Code', href: GITLAB, icon: 'gitlab' }],
  },
  {
    cat: 'web', image: './assets/images/projects/capstone2.svg',
    title: 'E-commerce API (Back-end Capstone)',
    org: 'Zuitt Coding Bootcamp', year: '2023',
    description: 'RESTful back-end API for an online store covering users, products and orders, with authentication and admin-only routes.',
    impact: 'Clean, Postman-tested endpoints that became the back end of the full-stack capstone.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Postman'],
    links: [{ label: 'Code', href: GITLAB, icon: 'gitlab' }],
  },
  {
    cat: 'web', image: './assets/images/projects/dianne.svg',
    title: 'Architect Personal Portfolio',
    org: 'Byte Brew Solutions · Freelance', year: '',
    description: 'Portfolio website for an Italy-based architectural designer, with a clean, image-led layout that puts the work first.',
    impact: 'Gave the client a professional online presence to share with international clients.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Design'],
  },
  {
    cat: 'web', image: './assets/images/projects/capstone1.svg',
    title: 'Personal Portfolio (Front-end Capstone)',
    org: 'Zuitt Coding Bootcamp', year: '2023',
    description: 'My first responsive portfolio, hand-built with semantic HTML, custom CSS and the Bootstrap grid.',
    impact: 'Foundation for the front-end skills behind this site.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web App'],
    links: [{ label: 'Live site', href: 'https://raychardatienza.github.io/webportfolio/', icon: 'external' }],
  },

  // ---------- Engineering, security & IoT ----------
  {
    cat: 'eng', image: './assets/images/projects/fruit.svg',
    title: 'Thesis: Automated Fruit Picking Machine',
    org: 'De La Salle Lipa', year: '2016',
    description: 'A machine that identifies ripe fruit and picks it while leaving unripe fruit on the plant.',
    impact: 'Explored automation for agriculture, cutting manual sorting effort.',
    tech: ['Embedded Systems', 'Sensors', 'Automation'],
  },
  {
    cat: 'eng', image: './assets/images/projects/cctv.svg',
    title: 'CCTV & Video Surveillance',
    org: 'Calvelo Engineered Systems', year: '2016–2018',
    description: 'End-to-end analog and IP network video surveillance installation, configuration and support for clients across industries.',
    impact: '100% project completion under my supervision, with satisfied customers.',
    tech: ['IP CCTV', 'NVR / DVR', 'Networking'],
  },
  {
    cat: 'eng', image: './assets/images/projects/access.svg',
    title: 'Access Control Systems',
    org: 'Calvelo Engineered Systems', year: '2016–2018',
    description: 'Standalone and PC-based access control (cards, readers, keypads, biometrics and locks) integrated with management software.',
    impact: 'Secured client facilities with centrally managed entry.',
    tech: ['Biometrics', 'Access Control Software', 'Hardware Integration'],
  },
  {
    cat: 'eng', image: './assets/images/projects/water.svg',
    title: 'Water Leak Detection',
    org: 'Calvelo Engineered Systems', year: '2016–2018',
    description: 'Installation and configuration of leak-detection sensors and alarms for client facilities.',
    impact: 'Early warning against water damage to critical rooms and equipment.',
    tech: ['Sensors', 'Alarm Systems', 'Security Systems'],
  },
  {
    cat: 'eng', image: './assets/images/projects/advise.svg',
    title: 'Automated Advising System',
    org: 'De La Salle Lipa', year: '',
    description: 'Manages Computer Engineering student data and turns it into usable advising information.',
    impact: 'Faster, more consistent academic advising for students and faculty.',
    tech: ['Database', 'Software Development'],
  },
  {
    cat: 'eng', image: './assets/images/projects/lighting.svg',
    title: 'Room Lighting System',
    org: 'De La Salle Lipa', year: '',
    description: 'Adjusts room lighting automatically based on current light levels using servo-driven controls.',
    impact: 'Demonstrated energy-aware automation with a desktop control GUI.',
    tech: ['Arduino Uno', 'Servo Motors', 'MATLAB GUIDE'],
  },
  {
    cat: 'eng', image: './assets/images/projects/pp.svg',
    title: 'Ping Pong on Arduino',
    org: 'De La Salle Lipa', year: '',
    description: 'A playable Pong game on an Arduino Uno driving an 8×8 monochrome LED matrix.',
    impact: 'Real-time input handling and display multiplexing on constrained hardware.',
    tech: ['Arduino Uno', 'C/C++', 'LED Matrix'],
  },
  {
    cat: 'eng', image: './assets/images/projects/burglar.svg',
    title: 'Burglar Alarm Prototype',
    org: 'De La Salle Lipa', year: '',
    description: 'An infrared proximity alarm that sounds when the sensor beam is interrupted.',
    impact: 'Early hands-on work in the security systems I later deployed professionally.',
    tech: ['Infrared Sensors', 'Electronics'],
  },
  {
    cat: 'eng', image: './assets/images/projects/calculator.svg',
    title: 'Assembly Language Calculator',
    org: 'De La Salle Lipa', year: '',
    description: 'A calculator supporting basic arithmetic, written in low-level assembly.',
    impact: 'Deep understanding of registers, memory and instruction flow.',
    tech: ['Assembly Language'],
  },
  {
    cat: 'eng', image: './assets/images/projects/pasystem.svg',
    title: 'Public Address System',
    org: 'De La Salle Lipa', year: '',
    description: 'Amplifies sound by converting it to electrical signals and back to audio.',
    impact: 'Applied analog circuit design and signal amplification.',
    tech: ['Analog Electronics', 'Amplifiers'],
  },
  {
    cat: 'eng', image: './assets/images/projects/dc.svg',
    title: 'DC Power Supply',
    org: 'De La Salle Lipa', year: '',
    description: 'Converts 220V AC into selectable 3V, 6V, 9V and 12V DC through rectification, regulation and voltage division.',
    impact: 'Fundamentals of power electronics and circuit safety.',
    tech: ['Power Electronics', 'Voltage Regulation'],
  },
];

/* =====================================================================
   LIVE DEMO (Desktop/approval-workflow-demo). Set either link after deploying
   or pushing to GitHub, and the project appears first in Selected work.
   ===================================================================== */
const DEMO_LINKS = { live: '', repo: '' };
if (DEMO_LINKS.live || DEMO_LINKS.repo) {
  PROJECTS.unshift({
    cat: 'web', featured: true, image: './assets/images/projects/approval.svg',
    title: 'approval.flow: Live Approval Workflow',
    org: 'Open source · live demo', year: '2026', role: 'Builder',
    description: 'Pick a role and move a document from draft through review, return-for-revision and approval to a digitally signed certificate with a QR verification page.',
    impact: 'The workflow pattern from my public-sector work, rebuilt with demo data so anyone can try it and read the code.',
    tech: ['Laravel 12', 'PHP 8.4', 'Tailwind CSS', 'SQLite', 'Pest', 'QR Code'],
    links: [
      DEMO_LINKS.live && { label: 'Try it live', href: DEMO_LINKS.live, icon: 'external' },
      DEMO_LINKS.repo && { label: 'Code', href: DEMO_LINKS.repo, icon: 'github' },
    ].filter(Boolean),
  });
}

/* =====================================================================
   EXPERIENCE TIMELINE: type: role | milestone
   ===================================================================== */
const TIMELINE = [
  {
    type: 'milestone', date: '2026', icon: 'sparkle',
    title: 'Co-created a new wave of public-sector platforms',
    org: 'In-house government development team',
    bullets: [
      'Co-created and launched DRIP, the COC System, PDMIS, and the IPS & IPO Information System.',
      'Built the Single Sign-On (SSO) website for the IPSGSIS, giving users one login across the agency\'s systems.',
    ],
    tags: ['Laravel', 'React.js', 'MySQL', 'SSO'],
  },
  {
    type: 'milestone', date: 'Aug 2026', icon: 'award',
    title: 'Earned three project management certifications',
    org: 'NievGen · Makati City',
    bullets: [
      'Certified Project Management Specialist (CPMS), Certified Agile Scrum Master (CASM) and Certified Project Scheduling and Controls Analyst (CPSCA): 108 hours of leadership and management training.',
    ],
    tags: ['Project Management', 'Agile Scrum', 'Scheduling & Controls'],
  },
  {
    type: 'role', date: 'Jun 2025 – Present', current: true,
    title: 'Information System Analyst II',
    org: 'National Commission on Indigenous Peoples · ICT Division',
    location: 'Quezon City, Metro Manila', status: 'Regular · Permanent',
    bullets: [
      'Co-develop the Data Repository on Indigenous Peoples (DRIP) and the Project Development and Management Information System (PDMIS).',
      'Co-created the COC System, IPS & IPO Information System and the IPSGSIS SSO website (2026).',
      'Focal person for the Accounting and Budget Information System (ABIS).',
      'Conducted user training for employees on the Document Tracking System v2.',
      'Develop, enhance and maintain other in-house information systems.',
    ],
    tags: ['Laravel', 'Inertia.js', 'React.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    type: 'milestone', date: 'Aug 2024', icon: 'award',
    title: 'Passed the Career Service Professional Examination',
    org: 'Civil Service Commission',
  },
  {
    type: 'role', date: 'Jan 2024 – Jun 2025',
    title: 'Project Development Officer II',
    org: 'National Commission on Indigenous Peoples · ICT Division',
    location: 'Quezon City, Metro Manila', status: 'Contract of Service',
    bullets: [
      'Co-developed the Document Tracking System v2 and the Quick Response Authenticator System (QRAS) for COC confirmation.',
      'Enhanced the Educational Assistance Information System (EAIS) to version 3.',
      'Took ABIS from requirements and vendor evaluation through procurement to deployment.',
      'Planned and ran user orientations, technical trainings and workshops; provided end-user technical support.',
      'Ran testing & QA on in-house systems; maintained documentation of configurations, procedures and troubleshooting.',
    ],
    tags: ['System Analysis', 'QA & UAT', 'User Training', 'Documentation'],
  },
  {
    type: 'milestone', date: '2023', icon: 'cap',
    title: 'Full-stack web development training',
    org: 'Zuitt Coding Bootcamp · Udemy',
    bullets: ['540+ hours across front-end, back-end and full-stack (MERN) development, JavaScript OOP, unit testing, C# and ASP.NET.'],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Postman'],
  },
  {
    type: 'role', date: 'May 2018 – Dec 2022',
    title: 'Hardware & System Maintenance',
    org: 'Freelance · on-call',
    bullets: [
      'Provided on-call hardware troubleshooting, repair and preventive maintenance for client computers and peripherals.',
      'Installed, configured and maintained operating systems, software and small networks, on site and remotely.',
      'Kept clients running with fast diagnosis and clear explanations of fixes and next steps.',
    ],
    tags: ['Hardware Troubleshooting', 'System Maintenance', 'Networking'],
  },
  {
    type: 'role', date: 'May 2018 – Dec 2022',
    title: 'Crypto Trader',
    org: 'Self-employed',
    bullets: [
      'Self-directed cryptocurrency trading and market analysis, alongside beta testing a trading platform and reporting usability issues.',
    ],
    tags: ['Market Analysis', 'QA Testing'],
  },
  {
    type: 'role', date: 'Dec 2016 – Apr 2018',
    title: 'Systems Engineer',
    org: 'Calvelo Engineered Systems Corp. · Security Systems Division',
    location: 'Makati City, Metro Manila', status: 'Regular',
    bullets: [
      'Achieved 100% project completion under my supervision, resulting in customer satisfaction.',
      'Trained and mentored technicians on company projects.',
      'Delivered end-to-end analog & IP network video surveillance solutions for various industries.',
      'Deployed standalone and PC-based access control (cards, readers, keypads, biometrics, locks) integrated with management software.',
    ],
    tags: ['CCTV', 'Access Control', 'Networking', 'Security Software'],
  },
  {
    type: 'milestone', date: '2016', icon: 'cap',
    title: 'BS Computer Engineering',
    org: 'De La Salle Lipa',
    bullets: ['Thesis: Automated Fruit Picking Machine. Merit for Student Leadership and Merit of Volunteerism.'],
  },
  {
    type: 'role', date: 'Jan 2015 – Jan 2016',
    title: 'Project Support Engineer (OJT)',
    org: 'MG Exeo Network Inc.',
    bullets: [
      'Copper and fiber installation for PLDT home services.',
      'Telephone cabinet troubleshooting following strict safety protocols.',
    ],
    tags: ['Fiber Optics', 'Troubleshooting'],
  },
];

const TRAINING = [
  ['Business Intelligence Workshop using Microsoft Power BI', 'In-house · 2025'],
  ['Training of Trainers on the DICT PNPKI Digital Signature', 'In-house · 2025'],
  ['HRIS User Acceptance Testing & Training', 'In-house · 2024'],
  ['ICT Capacity Building: "Unleashing the Power of Data"', 'In-house · 2024'],
  ['Data Privacy Training', 'In-house · 2024'],
  ['Sophos Next-Gen Firewall & Ruijie Managed Switches', 'In-house · 2024'],
  ['Full-Stack Web Development (88 hrs)', 'Zuitt Coding Bootcamp · 2023'],
  ['Back-End Web Development (144 hrs)', 'Zuitt Coding Bootcamp · 2023'],
  ['Front-End Web Development (104 hrs)', 'Zuitt Coding Bootcamp · 2023'],
  ['Intro & Advanced JavaScript OOP', 'Zuitt Coding Bootcamp · 2023'],
  ['Unit Testing · MySQL for MongoDB Developers', 'Zuitt Coding Bootcamp · 2023'],
  ['Introduction to C# · Introduction to ASP.NET', 'Zuitt Coding Bootcamp · 2023'],
  ['Web Development Bootcamp (85 hrs)', 'Udemy · Dr. Angela Yu · 2023'],
];

/* =====================================================================
   INFOGRAPHIC DATA (from the PDS L&D record and certificates)
   ===================================================================== */
const CAREER = [
  { label: 'Project Support Engineer (OJT)', org: 'MG Exeo Network Inc.', start: '2015-01', end: '2016-01', kind: 'past' },
  { label: 'Systems Engineer', org: 'Calvelo Engineered Systems', start: '2016-12', end: '2018-04', kind: 'past' },
  { label: 'Crypto Trader', org: 'Self-employed', start: '2018-05', end: '2022-12', kind: 'past' },
  { label: 'Hardware & System Maintenance', org: 'Freelance · on-call', start: '2018-05', end: '2022-12', kind: 'past' },
  { label: 'Full-stack bootcamp', org: 'Zuitt Coding Bootcamp · Udemy', start: '2023-01', end: '2023-10', kind: 'training' },
  { label: 'Project Development Officer II', org: 'NCIP · ICT Division', start: '2024-01', end: '2025-06', kind: 'past' },
  { label: 'Information System Analyst II', org: 'NCIP · ICT Division', start: '2025-06', end: null, kind: 'current' },
];
const CAREER_MILESTONES = [
  { date: '2016-06', label: 'BS Computer Engineering', org: 'De La Salle Lipa' },
  { date: '2024-08', label: 'Career Service Professional eligibility', org: 'Civil Service Commission' },
  { date: '2026-08', label: 'CPMS · CASM · CPSCA certified', org: 'NievGen, Makati City' },
];
const TRAINING_HOURS = [
  { year: '2023', hours: 541, items: [['Zuitt Coding Bootcamp (10 courses)', 456], ['Udemy Web Development Bootcamp', 85]] },
  { year: '2024', hours: 88, items: [['HRIS UAT & Training', 40], ['ICT Capacity Building', 24], ['Data Privacy Training', 16], ['Sophos & Ruijie', 8]] },
  { year: '2025', hours: 52, items: [['New Employees Orientation', 16], ['Paralegal Training', 16], ['Power BI Workshop', 12], ['PNPKI Trainer Training', 4], ['DAP Productivity', 4]] },
  { year: '2026', hours: 108, items: [['CPMS', 60], ['CASM', 24], ['CPSCA', 24]] },
];
const DISCIPLINES = [
  { key: 'gov', label: 'Government systems', color: 'var(--c-gov)' },
  { key: 'web', label: 'Web development', color: 'var(--c-web)' },
  { key: 'eng', label: 'Engineering & IoT', color: 'var(--c-eng)' },
];
const SYSTEM_ERAS = [
  { era: '2024 – 2025', role: 'as Project Development Officer II', systems: ['DTS v2', 'QRAS', 'EAIS v3', 'ABIS'] },
  { era: '2026', role: 'as Information System Analyst II', systems: ['DRIP', 'PDMIS', 'IPSGSIS SSO', 'COC System', 'IPS & IPO System'] },
];

/* =====================================================================
   RENDERING: projects, timeline, training
   ===================================================================== */
const chip = (t) => `<span class="chip chip-sm">${t}</span>`;

function projectCard(p) {
  const media = p.image
    ? `<div class="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-void-800">
         <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
         <div class="absolute inset-0 bg-gradient-to-t from-void-950/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
       </div>`
    : `<div class="pattern-circuit relative flex aspect-[16/9] items-end overflow-hidden bg-gradient-to-br ${p.accent} p-5">
         <span class="absolute right-4 top-4 inline-flex items-center gap-1 rounded-md border border-white/25 bg-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">${icon('building', 'h-3 w-3')} gov</span>
         <span class="font-display text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] transition duration-500 group-hover:-translate-y-1 sm:text-5xl">${p.acronym}</span>
       </div>`;

  const actions = [
    ...(p.links || []).map((l) => `<a href="${l.href}" ${l.internal ? '' : 'target="_blank" rel="noopener"'} class="btn-ghost btn-sm">${icon(l.icon || 'external', 'h-3.5 w-3.5')} ${l.label}</a>`),
    p.cat === 'gov' ? `<span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500">${icon('lock', 'h-3.5 w-3.5')} internal government system</span>` : '',
  ].join('');

  const meta = [p.org, p.year].filter(Boolean).join(' · ');
  return `
    <article class="group reveal card card-hover spot tilt flex flex-col overflow-hidden" data-cat="${p.cat}">
      ${media}
      <div class="flex flex-1 flex-col p-6">
        <div class="flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span class="text-cyan-700 dark:text-cyan-300">${meta}</span>
          ${p.role ? `<span class="rounded border border-slate-300/70 px-1.5 py-0.5 text-slate-600 dark:border-slate-700 dark:text-slate-300">${p.role}</span>` : ''}
        </div>
        <h3 class="mt-2 text-lg font-bold leading-snug">${p.title}</h3>
        <p class="mt-2 text-sm leading-relaxed">${p.description}</p>
        ${p.impact ? `<p class="mt-4 flex gap-2 rounded-xl border border-cyan-600/15 bg-cyan-50/70 p-3 text-sm leading-relaxed text-slate-700 dark:border-cyan-300/10 dark:bg-cyan-300/[0.04] dark:text-slate-300">
            <span class="mt-0.5 flex-none text-cyan-700 dark:text-cyan-300">${icon('target', 'h-4 w-4')}</span><span><span class="font-semibold text-slate-900 dark:text-ink">Impact: </span>${p.impact}</span></p>` : ''}
        <div class="mt-4 flex flex-wrap gap-1.5">${p.tech.map(chip).join('')}</div>
        ${actions ? `<div class="mt-auto flex flex-wrap items-center gap-2 pt-6">${actions}</div>` : ''}
      </div>
    </article>`;
}

function renderProjects(filter) {
  const grid = document.getElementById('project-grid');
  const list = PROJECTS.filter((p) => p.cat !== 'eng' && (filter === 'all' || (filter === 'featured' ? p.featured : p.cat === filter)));
  grid.innerHTML = list.map(projectCard).join('');
  observeReveals(grid);
}

function renderArchive() {
  const items = PROJECTS.filter((p) => p.cat === 'eng');
  document.getElementById('archive-count').textContent = items.length;
  document.getElementById('archive-grid').innerHTML = items.map((p) => `
    <article class="flex gap-4 rounded-xl border border-slate-200/70 bg-white/50 p-3 transition hover:border-cyan-500/40 dark:border-cyan-300/10 dark:bg-white/[0.02] dark:hover:border-cyan-300/30">
      <img src="${p.image}" alt="" loading="lazy" decoding="async" class="h-16 w-24 flex-none rounded-lg object-cover" />
      <div class="min-w-0">
        <p class="font-mono text-[10.5px] text-cyan-700 dark:text-cyan-300">${[p.org, p.year].filter(Boolean).join(' · ')}</p>
        <h4 class="text-sm font-bold leading-snug">${p.title}</h4>
        <p class="mt-0.5 line-clamp-2 text-xs leading-relaxed">${p.description}</p>
      </div>
    </article>`).join('');
}

function timelineItem(t) {
  const isRole = t.type === 'role';
  const dot = isRole
    ? `<span class="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-xl border border-slate-300/80 bg-white text-cyan-700 shadow-sm dark:border-cyan-300/20 dark:bg-void-900 dark:text-cyan-300 sm:h-12 sm:w-12">${icon('briefcase', 'h-5 w-5')}</span>`
    : `<span class="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-[0_0_24px_-4px_rgba(34,211,238,0.7)] sm:h-12 sm:w-12">${icon(t.icon || 'star', 'h-5 w-5')}</span>`;

  const bullets = t.bullets && t.bullets.length
    ? `<ul class="mt-4 space-y-2 text-sm leading-relaxed">${t.bullets.map((b) => `<li class="flex gap-2.5"><span class="mt-1 flex-none text-cyan-600 dark:text-cyan-300">${icon('check', 'h-3.5 w-3.5')}</span><span>${b}</span></li>`).join('')}</ul>`
    : '';
  const tags = t.tags ? `<div class="mt-4 flex flex-wrap gap-1.5">${t.tags.map(chip).join('')}</div>` : '';
  const sub = [t.location, t.status].filter(Boolean).join(' · ');

  return `
    <li class="reveal relative flex gap-4 sm:gap-6">
      ${dot}
      <div class="${isRole ? 'card card-hover spot p-5 sm:p-6' : 'rounded-2xl border border-dashed border-cyan-600/40 bg-cyan-50/50 p-5 dark:border-cyan-300/25 dark:bg-cyan-300/[0.03] sm:p-6'} flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-mono text-[11px] font-medium uppercase tracking-wider text-cyan-700 dark:text-cyan-300">${t.date}</span>
          ${t.current ? '<span class="rounded border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-emerald-700 dark:text-emerald-300">current</span>' : ''}
          ${!isRole ? '<span class="rounded border border-violet-500/40 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-violet-700 dark:text-violet-300">milestone</span>' : ''}
        </div>
        <h3 class="mt-2 text-lg font-bold sm:text-xl">${t.title}</h3>
        <p class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">${t.org}</p>
        ${sub ? `<p class="mt-0.5 text-xs">${sub}</p>` : ''}
        ${bullets}
        ${tags}
      </div>
    </li>`;
}

function renderTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = TIMELINE.map(timelineItem).join('');
  observeReveals(el);

  document.getElementById('training-list').innerHTML = TRAINING.map(([title, by]) => `
    <li class="flex gap-3">
      <span class="mt-0.5 flex-none text-cyan-600 dark:text-cyan-300">${icon('check', 'h-4 w-4')}</span>
      <span><span class="block text-sm font-semibold leading-snug text-slate-900 dark:text-ink">${title}</span><span class="font-mono text-[11px]">${by}</span></span>
    </li>`).join('');
}

/* =====================================================================
   RENDERING: infographics
   ===================================================================== */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parseYM = (s) => { const [y, m] = s.split('-').map(Number); return { y, m }; };
const nowYM = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; };
const fmtYM = (s) => { const { y, m } = parseYM(s); return `${MONTHS[m - 1]} ${y}`; };
const monthsBetween = (a, b) => { const A = parseYM(a), B = parseYM(b); return (B.y - A.y) * 12 + (B.m - A.m); };
const fmtDuration = (mo) => {
  const y = Math.floor(mo / 12), m = mo % 12;
  return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo${m > 1 ? 's' : ''}` : ''].filter(Boolean).join(' ') || '< 1 mo';
};
const tipAttrs = (title, body) => `tabindex="0" data-tip-title="${esc(title)}" data-tip-body="${esc(body)}" aria-label="${esc(title + '. ' + body)}"`;
const dataTable = (caption, head, rows) => `
  <details class="mt-6 border-t border-slate-200/70 pt-4 dark:border-cyan-300/10">
    <summary class="cursor-pointer select-none font-mono text-[11px] uppercase tracking-wider text-slate-500 hover:text-cyan-700 dark:hover:text-cyan-300">view data table</summary>
    <div class="mt-3 overflow-x-auto">
      <table class="w-full text-left text-xs">
        <caption class="sr-only">${caption}</caption>
        <thead><tr>${head.map((h, i) => `<th scope="col" class="py-1.5 pr-4 font-mono font-medium uppercase tracking-wider text-slate-500 ${i ? 'text-right' : ''}">${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map((r) => `<tr class="border-t border-slate-200/60 dark:border-white/5">${r.map((c, i) => `<td class="py-1.5 pr-4 ${i ? 'text-right font-mono' : 'text-slate-800 dark:text-slate-200'}" style="font-variant-numeric: tabular-nums">${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </details>`;

// 1) Career timeline (Gantt) — emphasis form: current role highlighted, past roles as context
function renderCareer() {
  const startY = 2015;
  const endY = Math.max(2027, new Date().getFullYear() + 1);
  const span = (endY - startY) * 12;
  const pos = (s) => { const { y, m } = parseYM(s); return (((y - startY) * 12 + (m - 1)) / span) * 100; };
  const now = nowYM();
  const color = { past: 'var(--c-context)', current: 'var(--c-seq)', training: 'var(--c-web)' };

  const years = [];
  for (let y = startY; y <= endY; y++) years.push(y);
  const gridLines = years.map((y) => `<span class="absolute inset-y-0 w-px" style="left:${pos(`${y}-01`)}%; background:var(--grid)"></span>`).join('');
  const axis = years.map((y, i) => `<span class="axis absolute -translate-x-1/2 ${i % 2 ? 'max-sm:hidden' : ''}" style="left:${pos(`${y}-01`)}%">${y}</span>`).join('');

  const rows = CAREER.map((r, i) => {
    const end = r.end || now;
    const left = pos(r.start), width = Math.max(pos(end) - left, 0.8);
    const dur = fmtDuration(monthsBetween(r.start, end));
    const body = `${r.org} · ${fmtYM(r.start)} – ${r.end ? fmtYM(r.end) : 'Present'} · ${dur}`;
    const glow = r.kind === 'current' ? 'box-shadow: 0 0 18px -2px rgb(34 211 238 / .7);' : '';
    return `
      <div class="grid items-center gap-x-4 gap-y-1.5 sm:grid-cols-[210px_1fr]">
        <div class="min-w-0 leading-tight">
          <span class="block truncate text-[13px] font-semibold text-slate-900 dark:text-ink">${r.label}</span>
          <span class="block truncate font-mono text-[10.5px] text-slate-500">${r.org}</span>
        </div>
        <div class="relative h-6">
          <span class="hit mark-hover grow-x absolute inset-y-1 rounded-[4px]" style="left:${left}%; width:${width}%; background:${color[r.kind]}; --d:${i * 140}ms; ${glow}" ${tipAttrs(r.label, body)}></span>
        </div>
      </div>`;
  }).join('');

  const ms = CAREER_MILESTONES.map((m, i) => `
    <span class="hit mark-hover fade absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style="left:${pos(m.date)}%; --d:${700 + i * 160}ms" ${tipAttrs(m.label, `${m.org} · ${fmtYM(m.date)}`)}>
      <span class="block h-3 w-3 rotate-45 rounded-[2px] bg-slate-900 dark:bg-ink" style="box-shadow: 0 0 0 2px var(--surface)"></span>
    </span>`).join('');

  document.getElementById('career-chart').innerHTML = `
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 right-0 sm:left-[226px]" aria-hidden="true">
        ${gridLines}
        <span class="absolute inset-y-0 w-px bg-cyan-500 dark:bg-cyan-300" style="left:${pos(now)}%; box-shadow: 0 0 10px rgb(34 211 238 / .9)"></span>
        <span class="absolute -top-5 -translate-x-1/2 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300" style="left:${pos(now)}%">now</span>
      </div>
      <div class="relative space-y-3">
        ${rows}
        <div class="grid items-center gap-x-4 gap-y-1.5 border-t border-dashed pt-3 sm:grid-cols-[210px_1fr]" style="border-color:var(--baseline)">
          <span class="font-mono text-[10.5px] uppercase tracking-wider text-slate-500">milestones</span>
          <div class="relative h-6">${ms}</div>
        </div>
      </div>
      <div class="relative mt-3 h-4 sm:ml-[226px]">${axis}</div>
    </div>`;

  document.getElementById('career-table').innerHTML = dataTable('Career timeline',
    ['Role / milestone', 'Start', 'End', 'Duration'],
    [
      ...CAREER.map((r) => [`${r.label} — ${r.org}`, fmtYM(r.start), r.end ? fmtYM(r.end) : 'Present', fmtDuration(monthsBetween(r.start, r.end || now))]),
      ...CAREER_MILESTONES.map((m) => [`◆ ${m.label} — ${m.org}`, fmtYM(m.date), '', '']),
    ]);
}

// 2) Training hours by year — single-hue columns, one axis, value labels on top
function renderHours() {
  const max = 600, ticks = [0, 200, 400, 600];
  const total = TRAINING_HOURS.reduce((s, d) => s + d.hours, 0);
  document.getElementById('hours-total').textContent = total;

  const grid = ticks.map((t) => `
    <div class="absolute inset-x-0 flex items-center" style="bottom:${(t / max) * 100}%">
      <span class="axis w-9 -translate-y-1/2 pr-2 text-right" style="font-variant-numeric: tabular-nums">${t}</span>
      <span class="h-px flex-1 -translate-y-1/2" style="background:${t === 0 ? 'var(--baseline)' : 'var(--grid)'}"></span>
    </div>`).join('');

  const cols = TRAINING_HOURS.map((d, i) => {
    const h = (d.hours / max) * 100;
    const body = d.items.map(([n, v]) => `${n}: ${v} hrs`).join(' · ');
    return `
      <div class="mark-hover group relative flex h-full flex-1 items-end justify-center" ${tipAttrs(`${d.year}: ${d.hours} hours`, body)}>
        <span class="fade absolute font-mono text-xs font-semibold text-slate-900 dark:text-ink" style="bottom:calc(${h}% + 6px); --d:${500 + i * 120}ms; font-variant-numeric: tabular-nums">${d.hours}</span>
        <span class="grow-y block w-full max-w-[64px] rounded-t-[4px]" style="height:${h}%; background:linear-gradient(to top, var(--c-seq), color-mix(in srgb, var(--c-seq) 70%, #fff)); --d:${i * 120}ms; box-shadow: 0 0 22px -6px var(--c-seq)"></span>
      </div>`;
  }).join('');

  document.getElementById('hours-chart').innerHTML = `
    <div class="relative h-56">
      ${grid}
      <div class="absolute bottom-0 left-9 right-0 top-0 flex items-end gap-4 px-2 sm:gap-6 sm:px-4">${cols}</div>
    </div>
    <div class="ml-9 mt-2 flex gap-4 px-2 sm:gap-6 sm:px-4">${TRAINING_HOURS.map((d) => `<span class="axis flex-1 text-center">${d.year}</span>`).join('')}</div>`;

  document.getElementById('hours-table').innerHTML = dataTable('Training hours by year', ['Year', 'Hours', 'Breakdown'],
    TRAINING_HOURS.map((d) => [d.year, d.hours, d.items.map(([n, v]) => `${n} ${v}`).join('; ')]));
}

// 3) Most-used technologies — ranked horizontal bars, Laravel emphasized, rest as context
function renderTech() {
  const normalize = (t) => t.replace(/\s+\d+(\.\d+)?$/, '').replace(/^Socialite.*/, 'Socialite').trim();
  const SKIP = new Set(['Requirements Analysis', 'Procurement', 'UAT', 'Deployment', 'Responsive Web App', 'Web Design']);
  const counts = new Map();
  PROJECTS.forEach((p) => new Set(p.tech.map(normalize)).forEach((t) => { if (!SKIP.has(t)) counts.set(t, (counts.get(t) || 0) + 1); }));
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = top[0][1];

  document.getElementById('tech-chart').innerHTML = top.map(([name, n], i) => {
    const emph = name === 'Laravel';
    return `
      <div class="grid grid-cols-[92px_1fr_24px] items-center gap-3">
        <span class="truncate text-right font-mono text-[11.5px] ${emph ? 'font-semibold text-slate-900 dark:text-ink' : ''}">${name}</span>
        <div class="relative h-4">
          <span class="hit mark-hover grow-x absolute inset-y-0 left-0 rounded-r-[4px]" style="width:${(n / max) * 100}%; background:${emph ? 'var(--c-emph)' : 'var(--c-context)'}; --d:${i * 90}ms; ${emph ? 'box-shadow: 0 0 18px -3px var(--c-emph);' : ''}" ${tipAttrs(name, `Used in ${n} of ${PROJECTS.length} projects`)}></span>
        </div>
        <span class="fade font-mono text-xs font-semibold text-slate-900 dark:text-ink" style="--d:${400 + i * 90}ms; font-variant-numeric: tabular-nums">${n}</span>
      </div>`;
  }).join('');

  document.getElementById('tech-table').innerHTML = dataTable('Most-used technologies', ['Technology', 'Projects'], top.map(([n, c]) => [n, c]));
}

// 4) Portfolio by discipline — tall segmented bar (one whole, three parts) + legend
function renderMix() {
  const parts = DISCIPLINES.map((d) => ({ ...d, n: PROJECTS.filter((p) => p.cat === d.key).length }));
  const total = parts.reduce((s, p) => s + p.n, 0);
  document.getElementById('mix-total').textContent = total;

  const segs = parts.map((p, i) => `
    <span class="hit mark-hover grow-x relative flex items-center justify-center rounded-[4px] font-display text-lg font-bold text-white" style="flex:${p.n} 1 0%; background:${p.color}; --d:${i * 160}ms; box-shadow: 0 0 22px -8px ${p.color}" ${tipAttrs(p.label, `${p.n} of ${total} projects · ${Math.round((p.n / total) * 100)}%`)}>${p.n}</span>`).join('');

  document.getElementById('mix-chart').innerHTML = `
    <div class="flex h-16 gap-[2px]">${segs}</div>
    <ul class="mt-5 space-y-2.5" aria-label="Legend">
      ${parts.map((p) => `
        <li class="flex items-center gap-3 text-sm">
          <span class="h-3 w-3 flex-none rounded-[3px]" style="background:${p.color}"></span>
          <span class="flex-1 text-slate-800 dark:text-slate-200">${p.label}</span>
          <span class="font-mono text-xs text-slate-500" style="font-variant-numeric: tabular-nums">${p.n} · ${Math.round((p.n / total) * 100)}%</span>
        </li>`).join('')}
    </ul>`;

  document.getElementById('mix-table').innerHTML = dataTable('Portfolio by discipline', ['Discipline', 'Projects', 'Share'],
    parts.map((p) => [p.label, p.n, `${Math.round((p.n / total) * 100)}%`]));
}

// 5) Systems delivered — circuit "bus" per era, nodes light up in sequence
function renderSystems() {
  let k = 0;
  document.getElementById('systems-chart').innerHTML = SYSTEM_ERAS.map((e, ei) => `
    <div>
      <div class="flex items-baseline gap-3">
        <span class="font-display text-5xl font-bold text-slate-900 dark:text-ink" data-count="${e.systems.length}">${e.systems.length}</span>
        <span class="leading-tight">
          <span class="block font-mono text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">${e.era}</span>
          <span class="block text-xs">${e.role}</span>
        </span>
      </div>
      <div class="relative mt-5 pl-6">
        <span class="bus absolute bottom-3 left-[7px] top-3 w-[2px] rounded-full" style="background:var(--baseline)" aria-hidden="true"></span>
        <ul class="space-y-2.5">
          ${e.systems.map((s) => `
            <li class="fade relative" style="--d:${(k++) * 110}ms">
              <span class="absolute -left-[22px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${ei === SYSTEM_ERAS.length - 1 ? 'bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.9)] dark:bg-cyan-300' : 'bg-slate-400 dark:bg-slate-500'}"></span>
              <span class="block rounded-lg border border-slate-200/80 bg-white/70 px-3 py-2 font-mono text-xs font-medium text-slate-800 transition hover:border-cyan-500/50 dark:border-cyan-300/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-cyan-300/40">${s}</span>
            </li>`).join('')}
        </ul>
      </div>
    </div>`).join('');
}

/* =====================================================================
   INTERACTIONS
   ===================================================================== */
const hasIO = 'IntersectionObserver' in window;

const revealObserver = hasIO
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { finishReveal(e.target); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  : null;
// Stagger siblings, then drop the reveal class so hover transitions run at normal speed
function finishReveal(el) {
  const delay = parseInt(el.style.getPropertyValue('--rd') || '0', 10);
  el.classList.add('is-visible');
  setTimeout(() => { el.classList.remove('reveal', 'is-visible'); el.style.removeProperty('--rd'); }, delay + 950);
}
function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--rd', `${(Math.max(sibs.indexOf(el), 0) % 6) * 90}ms`);
    revealObserver ? revealObserver.observe(el) : finishReveal(el);
  });
}

// Charts animate in once, and their counters count up
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const t0 = performance.now(), dur = 1400;
  const step = (t) => {
    const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function setupInView() {
  const targets = [...document.querySelectorAll('.viz, [data-count]')];
  if (!hasIO) { targets.forEach((el) => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.dataset.count) animateCount(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });
  targets.forEach((el) => io.observe(el));
}

// Shared tooltip for every chart mark (hover + keyboard focus)
function setupTooltips() {
  const tip = document.getElementById('viz-tip');
  let active = null;
  const place = (x, y) => {
    const r = tip.getBoundingClientRect();
    let left = x + 14, top = y + 16;
    if (left + r.width > innerWidth - 8) left = x - r.width - 14;
    if (top + r.height > innerHeight - 8) top = y - r.height - 14;
    tip.style.transform = `translate(${Math.max(8, left)}px, ${Math.max(8, top)}px)`;
  };
  const show = (el, x, y) => {
    active = el;
    tip.innerHTML = `<p class="font-semibold text-slate-900 dark:text-ink">${esc(el.dataset.tipTitle)}</p><p class="mt-0.5 text-slate-600 dark:text-slate-300">${esc(el.dataset.tipBody || '')}</p>`;
    tip.hidden = false;
    place(x, y);
  };
  const hide = () => { active = null; tip.hidden = true; };
  document.addEventListener('pointerover', (e) => { const el = e.target.closest('[data-tip-title]'); if (el) show(el, e.clientX, e.clientY); });
  document.addEventListener('pointermove', (e) => { if (active) place(e.clientX, e.clientY); });
  document.addEventListener('pointerout', (e) => { const el = e.target.closest('[data-tip-title]'); if (el && !el.contains(e.relatedTarget)) hide(); });
  document.addEventListener('focusin', (e) => { const el = e.target.closest('[data-tip-title]'); if (el) { const r = el.getBoundingClientRect(); show(el, r.left + r.width / 2, r.bottom); } });
  document.addEventListener('focusout', hide);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', () => { if (active && document.activeElement !== active) hide(); }, { passive: true });
}

// Pointer spotlight on .spot cards
function setupSpotlight() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest && e.target.closest('.spot');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

// Signature hero: the Philippine archipelago drawn as a live data network.
// Island outlines are simplified [lon, lat] polygons; points are sampled inside them,
// linked to their neighbours, and data pulses travel from Quezon City to other cities.
// Simplified from Natural Earth 1:50m (public domain): 47 islands, 727 points.
const ISLANDS = [[[121.1,18.62],[121.25,18.56],[121.59,18.38],[121.85,18.3],[121.95,18.29],[122.04,18.33],[122.15,18.49],[122.22,18.5],[122.27,18.46],[122.32,18.32],[122.29,18.23],[122.18,18.06],[122.15,17.66],[122.24,17.43],[122.39,17.31],[122.41,17.18],[122.52,17.12],[122.43,16.82],[122.23,16.44],[122.14,16.18],[121.97,16.16],[121.79,16.08],[121.6,15.93],[121.56,15.83],[121.61,15.67],[121.39,15.32],[121.4,15.27],[121.7,14.74],[121.63,14.68],[121.63,14.58],[121.77,14.17],[121.91,14.02],[122.08,13.95],[122.21,13.93],[122.23,13.98],[122.29,14],[122.2,14.15],[122.49,14.32],[122.63,14.32],[122.86,14.25],[122.93,14.19],[123.07,13.96],[123.06,13.79],[123.1,13.75],[123.23,13.75],[123.3,13.84],[123.31,13.94],[123.26,13.98],[123.32,14.06],[123.43,13.97],[123.82,13.84],[123.86,13.8],[123.81,13.72],[123.61,13.7],[123.55,13.65],[123.61,13.53],[123.82,13.27],[123.79,13.11],[123.87,13.12],[124.07,13.03],[124.14,13.04],[124.14,12.79],[124.06,12.57],[123.96,12.59],[123.88,12.69],[123.89,12.8],[123.95,12.92],[123.92,12.94],[123.74,12.9],[123.63,12.91],[123.4,13.03],[123.31,13.04],[123.3,13.22],[123.16,13.44],[122.86,13.62],[122.78,13.74],[122.6,13.91],[122.49,13.93],[122.47,13.89],[122.51,13.66],[122.6,13.56],[122.67,13.4],[122.68,13.25],[122.6,13.19],[122.52,13.26],[122.5,13.36],[122.38,13.52],[122.07,13.79],[121.78,13.94],[121.69,13.93],[121.5,13.84],[121.45,13.79],[121.45,13.71],[121.34,13.65],[121.2,13.64],[121.1,13.68],[121.01,13.76],[120.93,13.76],[120.84,13.88],[120.73,13.9],[120.64,13.8],[120.62,14.19],[120.69,14.29],[120.92,14.49],[120.95,14.56],[120.94,14.65],[120.89,14.72],[120.71,14.78],[120.58,14.88],[120.55,14.77],[120.59,14.48],[120.56,14.44],[120.44,14.45],[120.4,14.49],[120.37,14.61],[120.28,14.68],[120.25,14.79],[120.14,14.8],[120.08,14.85],[120.04,15.11],[119.93,15.43],[119.89,15.84],[119.77,16.01],[119.77,16.26],[119.83,16.33],[120.03,16.18],[120.16,16.05],[120.34,16.07],[120.37,16.11],[120.39,16.22],[120.33,16.4],[120.3,16.65],[120.32,16.76],[120.41,16.96],[120.43,17.38],[120.36,17.64],[120.58,18.37],[120.6,18.51],[120.81,18.6],[120.92,18.59],[121.05,18.61]],[[126.01,9.32],[126.09,9.26],[126.19,9.28],[126.19,9.12],[126.3,8.95],[126.32,8.84],[126.14,8.6],[126.37,8.48],[126.38,8.33],[126.46,8.2],[126.44,7.83],[126.57,7.68],[126.59,7.55],[126.58,7.25],[126.44,7.01],[126.29,6.88],[126.22,6.89],[126.19,6.85],[126.24,6.73],[126.19,6.31],[126.11,6.49],[126.04,6.84],[125.9,7.12],[125.82,7.33],[125.69,7.26],[125.64,7.11],[125.54,7.02],[125.4,6.8],[125.38,6.69],[125.59,6.47],[125.67,6.22],[125.67,5.98],[125.46,5.66],[125.35,5.6],[125.29,5.63],[125.24,5.76],[125.27,6.03],[125.23,6.07],[125.17,6.05],[125.04,5.87],[124.93,5.88],[124.64,6],[124.21,6.23],[124.08,6.4],[123.99,6.99],[124.05,7.11],[124.19,7.27],[124.21,7.4],[123.97,7.66],[123.76,7.74],[123.67,7.82],[123.55,7.83],[123.49,7.81],[123.48,7.67],[123.39,7.41],[123.18,7.53],[123.1,7.7],[122.99,7.55],[122.84,7.53],[122.79,7.72],[122.71,7.77],[122.62,7.76],[122.47,7.64],[122.14,6.95],[122.1,6.91],[122.03,6.93],[121.96,6.97],[121.9,7.08],[121.92,7.2],[122.05,7.36],[122.13,7.81],[122.24,7.95],[122.39,8.05],[122.67,8.13],[122.91,8.16],[123,8.22],[123,8.36],[123.05,8.43],[123.15,8.52],[123.34,8.57],[123.43,8.7],[123.68,8.62],[123.78,8.55],[123.85,8.43],[123.88,8.19],[123.75,8.06],[123.8,8.05],[124,8.16],[124.2,8.23],[124.33,8.51],[124.4,8.6],[124.45,8.61],[124.62,8.52],[124.73,8.56],[124.79,8.87],[124.87,8.97],[125.14,8.87],[125.21,9.03],[125.38,8.99],[125.5,9.01],[125.53,9.14],[125.41,9.67],[125.47,9.76],[125.52,9.76],[125.88,9.51],[125.95,9.43]],[[123.13,9.06],[122.99,9.06],[122.95,9.11],[122.87,9.32],[122.56,9.48],[122.41,9.69],[122.4,9.82],[122.47,9.96],[122.71,9.99],[122.86,10.09],[122.87,10.28],[122.82,10.5],[122.96,10.7],[122.98,10.89],[123.22,10.99],[123.51,10.92],[123.57,10.78],[123.49,10.58],[123.34,10.33],[123.3,10.12],[123.16,9.86],[123.15,9.61],[123.32,9.32],[123.29,9.22],[123.19,9.09]],[[125.24,12.53],[125.31,12.45],[125.32,12.32],[125.48,12.25],[125.54,12.19],[125.5,12.14],[125.51,12.05],[125.46,11.95],[125.49,11.59],[125.61,11.32],[125.57,11.24],[125.63,11.23],[125.7,11.16],[125.75,11.07],[125.74,11.05],[125.67,11.12],[125.63,11.13],[125.43,11.11],[125.23,11.15],[125.16,11.27],[125.09,11.29],[125.03,11.34],[124.95,11.48],[124.92,11.56],[124.98,11.64],[125,11.76],[124.88,11.78],[124.68,12.02],[124.53,12.08],[124.45,12.15],[124.33,12.4],[124.29,12.57],[124.57,12.53],[125.15,12.57]],[[122.5,11.62],[122.61,11.56],[122.73,11.61],[122.84,11.6],[122.93,11.53],[122.89,11.44],[123.1,11.54],[123.16,11.54],[123.12,11.29],[123.02,11.12],[122.8,10.99],[122.77,10.82],[122.67,10.8],[122.52,10.69],[122.2,10.62],[121.95,10.44],[121.93,10.49],[121.98,10.64],[121.95,10.76],[121.96,10.87],[122.05,11.1],[122.1,11.64],[122.07,11.72],[121.89,11.79],[121.96,11.9],[122.03,11.9],[122.4,11.7]],[[117.31,8.44],[117.22,8.37],[117.23,8.46],[117.35,8.71],[117.88,9.24],[118.02,9.27],[118.11,9.35],[119.02,10.35],[119.22,10.48],[119.29,10.57],[119.31,10.69],[119.26,10.85],[119.5,11.35],[119.55,11.31],[119.56,11.27],[119.53,11.1],[119.56,11.05],[119.53,10.95],[119.69,10.5],[119.6,10.41],[119.37,10.33],[119.28,10.25],[119.19,10.06],[118.78,9.92],[118.75,9.86],[118.77,9.77],[118.57,9.42],[118.43,9.26],[118.13,9.1],[117.99,8.88],[117.78,8.73],[117.57,8.64],[117.52,8.54],[117.41,8.5]],[[120.7,13.48],[120.98,13.49],[121.02,13.43],[121.12,13.38],[121.2,13.43],[121.52,13.13],[121.54,13.09],[121.49,13.02],[121.47,12.93],[121.54,12.64],[121.41,12.42],[121.39,12.3],[121.32,12.3],[121.24,12.22],[121.16,12.24],[120.96,12.45],[120.92,12.51],[120.9,12.65],[120.8,12.75],[120.76,12.97],[120.68,13.13],[120.51,13.26],[120.46,13.39],[120.34,13.41],[120.35,13.47],[120.4,13.52],[120.65,13.5]],[[124.57,11.34],[124.64,11.31],[124.72,11.32],[124.82,11.4],[124.93,11.37],[125.04,11.14],[125.01,10.79],[125.16,10.64],[125.2,10.46],[125.27,10.31],[125.25,10.26],[125.15,10.27],[125.14,10.19],[124.99,10.37],[125.03,10.03],[124.78,10.17],[124.79,10.33],[124.74,10.44],[124.8,10.68],[124.79,10.78],[124.66,10.96],[124.5,10.9],[124.45,10.92],[124.37,11.37],[124.31,11.49],[124.33,11.54],[124.55,11.4]],[[123.37,9.45],[123.33,9.42],[123.32,9.49],[123.4,9.89],[123.39,9.97],[123.71,10.47],[123.73,10.56],[123.93,10.96],[123.97,11.19],[124.04,11.27],[124.05,10.93],[124.03,10.77],[124.05,10.59],[124,10.4],[123.95,10.32],[123.79,10.22],[123.7,10.13],[123.49,9.59]],[[124.59,9.79],[124.58,9.75],[124.48,9.75],[124.36,9.63],[124.12,9.6],[123.94,9.62],[123.87,9.68],[123.83,9.76],[123.82,9.82],[123.86,9.88],[124.06,10],[124.17,10.14],[124.34,10.16],[124.58,10.03],[124.56,9.88],[124.58,9.83]],[[123.72,12.29],[123.91,12.17],[124.04,11.97],[124.05,11.75],[123.85,11.91],[123.73,11.95],[123.74,12],[123.61,12.09],[123.53,12.2],[123.47,12.22],[123.42,12.19],[123.29,12.04],[123.16,11.93],[123.27,12.4],[123.24,12.58],[123.46,12.5],[123.56,12.44],[123.57,12.41]],[[124.35,13.63],[124.33,13.57],[124.25,13.59],[124.18,13.53],[124.06,13.61],[124.04,13.66],[124.12,13.79],[124.12,13.98],[124.19,14.06],[124.22,14.08],[124.31,13.95],[124.42,13.87],[124.4,13.68]],[[122.09,6.43],[121.96,6.42],[121.87,6.56],[121.81,6.61],[121.83,6.66],[122.06,6.74],[122.29,6.64],[122.32,6.6],[122.25,6.58],[122.2,6.48]],[[120.1,12.17],[120.19,12.17],[120.23,12.22],[120.26,12.14],[120.34,12.08],[120.31,12.01],[120.17,12.02],[120.1,11.99],[120.01,12.01],[119.96,12.07],[119.87,12.2],[119.9,12.31],[120.08,12.2]],[[121.91,13.54],[122,13.55],[122.11,13.46],[122.12,13.37],[122,13.2],[121.83,13.33],[121.82,13.42],[121.87,13.57]],[[121.16,6.08],[121.21,6],[121.28,6.02],[121.39,6],[121.41,5.94],[121.29,5.87],[121.22,5.94],[121.08,5.89],[121.02,5.92],[120.93,5.9],[120.88,5.95],[120.9,6.01],[121.04,6.1]],[[125.69,9.91],[125.67,9.89],[125.49,10.12],[125.52,10.31],[125.67,10.44],[125.68,10.39],[125.65,10.25],[125.7,10.07],[125.69,9.94]],[[122.09,12.35],[122.01,12.11],[121.96,12.19],[121.98,12.25],[121.92,12.33],[121.99,12.44],[122,12.6],[122.15,12.65],[122.13,12.54]],[[122.03,15.01],[122.05,14.97],[122.02,14.97],[121.97,14.89],[122.02,14.76],[121.99,14.66],[121.91,14.67],[121.92,14.8],[121.82,14.96],[121.84,15.04],[121.97,15.05]],[[120.25,5.26],[120.19,5.17],[120.12,5.22],[120.1,5.17],[120.01,5.15],[119.96,5.08],[119.82,5.07],[119.83,5.13],[120.17,5.33],[120.21,5.34],[120.23,5.28]],[[120.04,11.7],[119.96,11.67],[119.94,11.69],[119.86,11.95],[119.92,11.98],[120.04,11.92],[120.07,11.86],[120.07,11.78]],[[122.65,10.47],[122.54,10.42],[122.52,10.49],[122.54,10.61],[122.65,10.72],[122.7,10.74],[122.74,10.65],[122.68,10.5]],[[124.61,11.49],[124.48,11.49],[124.43,11.53],[124.36,11.67],[124.44,11.7],[124.51,11.69],[124.62,11.55]],[[123.28,12.85],[123.37,12.7],[123.05,12.99],[122.95,13.06],[122.96,13.11],[123.04,13.11],[123.21,12.91]],[[126.06,9.77],[125.99,9.84],[126,9.93],[126.07,10.06],[126.13,9.94],[126.12,9.87],[126.17,9.8],[126.14,9.77]],[[122.65,12.31],[122.6,12.29],[122.42,12.46],[122.47,12.49],[122.6,12.49],[122.68,12.38]],[[123.7,9.24],[123.71,9.13],[123.61,9.1],[123.54,9.13],[123.49,9.22],[123.65,9.28]],[[119.92,10.49],[119.79,10.46],[119.76,10.55],[119.85,10.64],[120.01,10.57],[119.98,10.54]],[[123.78,12.45],[123.78,12.37],[123.74,12.4],[123.59,12.63],[123.62,12.67],[123.71,12.61]],[[117.08,7.88],[117.03,7.81],[116.97,7.89],[116.99,8.05],[117.08,8.07]],[[124.81,9.14],[124.78,9.08],[124.67,9.13],[124.64,9.18],[124.65,9.23],[124.71,9.24],[124.79,9.19]],[[125.78,6.96],[125.77,6.91],[125.68,7.07],[125.71,7.19],[125.78,7.13]],[[120.27,13.75],[120.27,13.68],[120.1,13.78],[120.12,13.86],[120.21,13.82]],[[119.86,11.53],[119.88,11.47],[119.83,11.38],[119.73,11.43],[119.73,11.47],[119.83,11.52]],[[125.28,9.98],[125.29,9.93],[125.16,10.06],[125.13,10.16],[125.23,10.12]],[[121.92,18.89],[121.86,18.82],[121.83,18.84],[121.89,18.99],[121.94,19.01],[121.99,18.96]],[[121.52,19.36],[121.53,19.27],[121.47,19.27],[121.38,19.33],[121.39,19.4]],[[122.18,14.05],[122.17,14.01],[121.96,14.16],[121.96,14.23]],[[122.94,7.41],[122.94,7.36],[122.8,7.32],[122.8,7.39],[122.82,7.43],[122.87,7.4],[122.91,7.43]],[[123.76,11.28],[123.82,11.15],[123.74,11.15],[123.71,11.25],[123.74,11.28]],[[117.36,8.21],[117.29,8.19],[117.27,8.25],[117.28,8.31],[117.35,8.29]],[[125.97,9.59],[125.95,9.57],[125.92,9.62],[125.95,9.74],[125.97,9.76],[125.99,9.68]],[[124.85,11.59],[124.84,11.54],[124.78,11.58],[124.73,11.72],[124.82,11.63]],[[121.25,19.08],[121.25,19.02],[121.2,19.05],[121.18,19.1],[121.21,19.18],[121.24,19.14]],[[121.96,20.37],[121.91,20.36],[121.94,20.45],[122.03,20.47]],[[124.32,10.61],[124.29,10.6],[124.33,10.71],[124.38,10.68],[124.38,10.63]],[[121.88,20.78],[121.83,20.7],[121.79,20.7],[121.87,20.84]]];
const HOME = { name: 'Quezon City', lon: 121.04, lat: 14.68 };
const HUBS = [
  { name: 'Laoag', lon: 120.59, lat: 18.2 }, { name: 'Tuguegarao', lon: 121.73, lat: 17.61 }, { name: 'Baguio', lon: 120.6, lat: 16.4 },
  { name: 'Legazpi', lon: 123.74, lat: 13.14 }, { name: 'Puerto Princesa', lon: 118.74, lat: 9.74 }, { name: 'Iloilo', lon: 122.56, lat: 10.72 },
  { name: 'Cebu', lon: 123.89, lat: 10.32 }, { name: 'Tacloban', lon: 125.0, lat: 11.24 }, { name: 'Cagayan de Oro', lon: 124.65, lat: 8.48 },
  { name: 'Davao', lon: 125.61, lat: 7.07 }, { name: 'Zamboanga', lon: 122.08, lat: 6.92 },
];

function setupArchipelago() {
  const wrap = document.getElementById('map-wrap');
  const canvas = document.getElementById('archipelago');
  const pinEl = document.getElementById('map-pin');
  const ctx = canvas.getContext('2d');
  const base = document.createElement('canvas');
  const bctx = base.getContext('2d');
  const LON0 = 116.8, LON1 = 126.8, LAT0 = 4.9, LAT1 = 21.0;
  let w = 0, h = 0, dpr = 1, scale = 1, ox = 0, oy = 0, pts = [], hubs = [], home = null, pulses = [], running = false, raf = 0, t0 = performance.now();
  const mouse = { x: -9999, y: -9999 };
  const project = (lon, lat) => [ox + (lon - LON0) * scale * Math.cos(13 * Math.PI / 180), oy + (LAT1 - lat) * scale];
  const inside = (x, y, poly) => {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  };
  const palette = () => document.documentElement.classList.contains('dark')
    ? { dot: '34,211,238', link: '34,211,238', hub: '#e6f1ff', pulse: '#22d3ee', home: '#ff5a4e', a: 1 }
    : { dot: '8,145,178', link: '71,85,105', hub: '#0f172a', pulse: '#0891b2', home: '#e5352b', a: 0.8 };

  function layout() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = wrap.clientWidth; h = wrap.clientHeight;
    for (const c of [canvas, base]) { c.width = w * dpr; c.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cosk = Math.cos(13 * Math.PI / 180), spanX = (LON1 - LON0) * cosk, spanY = LAT1 - LAT0;
    scale = Math.min((w * 0.92) / spanX, (h * 0.92) / spanY);
    ox = (w - spanX * scale) / 2; oy = (h - spanY * scale) / 2;

    // Sample points inside each island on a jittered grid
    const step = Math.max(5, Math.min(w, h) / 84);
    const polys = ISLANDS.map((poly) => poly.map(([lon, lat]) => project(lon, lat)));
    pts = [];
    let seed = 3;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    polys.forEach((poly) => {
      const xs = poly.map((p) => p[0]), ys = poly.map((p) => p[1]);
      let added = 0;
      for (let y = Math.min(...ys); y <= Math.max(...ys); y += step) {
        for (let x = Math.min(...xs); x <= Math.max(...xs); x += step) {
          const jx = x + (rnd() - 0.5) * step * 0.6, jy = y + (rnd() - 0.5) * step * 0.6;
          if (inside(jx, jy, poly)) { pts.push({ x: jx, y: jy, tw: rnd() * Math.PI * 2 }); added++; }
        }
      }
      if (!added) { // tiny islands still get a dot
        pts.push({ x: xs.reduce((a, b) => a + b) / xs.length, y: ys.reduce((a, b) => a + b) / ys.length, tw: rnd() * 6 });
      }
    });

    // Pre-render links and dots once
    const pal = palette(), R = step * 1.55;
    bctx.clearRect(0, 0, w, h);
    bctx.lineWidth = 0.7;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
        if (d < R) {
          bctx.strokeStyle = `rgba(${pal.link},${(1 - d / R) * 0.32 * pal.a})`;
          bctx.beginPath(); bctx.moveTo(pts[i].x, pts[i].y); bctx.lineTo(pts[j].x, pts[j].y); bctx.stroke();
        }
      }
    }
    bctx.fillStyle = `rgba(${pal.dot},${0.55 * pal.a})`;
    for (const p of pts) { bctx.beginPath(); bctx.arc(p.x, p.y, 1.25, 0, Math.PI * 2); bctx.fill(); }

    home = project(HOME.lon, HOME.lat);
    hubs = HUBS.map((c) => ({ ...c, xy: project(c.lon, c.lat) }));
    pinEl.style.left = `${home[0]}px`; pinEl.style.top = `${home[1]}px`; pinEl.classList.remove('opacity-0');
  }

  function spawnPulse(now) {
    const hub = hubs[(Math.random() * hubs.length) | 0];
    const outbound = Math.random() > 0.35;
    const [a, b] = outbound ? [home, hub.xy] : [hub.xy, home];
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const ctrl = [mx + (b[1] - a[1]) * 0.18, my - (b[0] - a[0]) * 0.18 - len * 0.12];
    pulses.push({ a, b, ctrl, start: now, dur: 1400 + len * 6, hub });
  }
  const bez = (p, t) => {
    const u = 1 - t;
    return [u * u * p.a[0] + 2 * u * t * p.ctrl[0] + t * t * p.b[0], u * u * p.a[1] + 2 * u * t * p.ctrl[1] + t * t * p.b[1]];
  };

  function frame(now) {
    const pal = palette(), t = (now - t0) / 1000;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(base, 0, 0, w, h);

    // Scan band sweeping north to south + cursor glow
    const scanY = ((t * 0.12) % 1.2 - 0.1) * h;
    for (const p of pts) {
      const ds = Math.abs(p.y - scanY), dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const glow = Math.max(0, 1 - ds / 26) * 0.9 + Math.max(0, 1 - dm / 90) * 1.0 + (Math.sin(t * 2 + p.tw) > 0.985 ? 0.8 : 0);
      if (glow > 0.05) {
        ctx.fillStyle = `rgba(${pal.dot},${Math.min(1, glow) * pal.a})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3 + glow * 1.3, 0, Math.PI * 2); ctx.fill();
      }
    }

    // Pulses
    if (pulses.length < 4 && Math.random() < 0.035) spawnPulse(now);
    pulses = pulses.filter((p) => now - p.start < p.dur + 500);
    for (const p of pulses) {
      const k = Math.min(1, (now - p.start) / p.dur);
      ctx.strokeStyle = pal.pulse; ctx.lineWidth = 1.6; ctx.globalAlpha = 0.85;
      ctx.beginPath();
      for (let s = Math.max(0, k - 0.28); s <= k; s += 0.02) { const [x, y] = bez(p, s); s === Math.max(0, k - 0.28) ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      ctx.stroke();
      const [hx, hy] = bez(p, k);
      ctx.globalAlpha = 1; ctx.fillStyle = pal.pulse; ctx.shadowColor = pal.pulse; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(hx, hy, 2.6, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      if (k >= 1) { const fade = 1 - (now - p.start - p.dur) / 500; ctx.globalAlpha = Math.max(0, fade); ctx.strokeStyle = pal.pulse; ctx.beginPath(); ctx.arc(p.b[0], p.b[1], 4 + (1 - fade) * 14, 0, Math.PI * 2); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }

    // Hubs and home
    for (const c of hubs) { ctx.fillStyle = pal.hub; ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.arc(c.xy[0], c.xy[1], 2.2, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    const pr = 5 + (Math.sin(t * 3) + 1) * 3;
    ctx.strokeStyle = pal.home; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.arc(home[0], home[1], pr + 6, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1; ctx.fillStyle = pal.home; ctx.shadowColor = pal.home; ctx.shadowBlur = 16;
    ctx.beginPath(); ctx.arc(home[0], home[1], 4, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  }

  function loop(now) { frame(now); if (running) raf = requestAnimationFrame(loop); }
  function start() { if (!running && !document.hidden) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; cancelAnimationFrame(raf); }

  layout(); frame(performance.now());
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 150); });
  wrap.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  wrap.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  document.getElementById('theme-toggle').addEventListener('click', () => { layout(); if (!running) frame(performance.now()); });
  if (hasIO) new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(wrap);
  else start();
}

// Hero headline: wrap each word (and the gradient phrase as one unit) for a staggered entrance
function splitHeadline() {
  const h1 = document.querySelector('.hero-title');
  let i = 0;
  const wrap = (node) => { const s = document.createElement('span'); s.className = 'word'; s.style.setProperty('--wd', `${250 + i++ * 85}ms`); node.replaceWith(s); s.appendChild(node); };
  [...h1.childNodes].forEach((n) => {
    if (n.nodeType === Node.ELEMENT_NODE) return wrap(n);
    if (n.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(' '));
      const s = document.createElement('span');
      s.className = 'word'; s.textContent = part; s.style.setProperty('--wd', `${250 + i++ * 85}ms`);
      frag.appendChild(s);
    });
    n.replaceWith(frag);
  });
  // Without the boot intro, play right away; otherwise runBoot() starts it when the intro ends
  if (!document.documentElement.classList.contains('is-booting')) h1.classList.add('play');
}

// Two-row infinite tech marquee (content duplicated for a seamless loop)
const MARQUEE = [
  ['Laravel', 'PHP', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Inertia.js', 'C# / ASP.NET'],
  ['Full-stack', 'Front-end', 'Back-end', 'Back-end API', 'Responsive Web App', 'Web Design', 'Git', 'GitHub', 'GitLab', 'Postman', 'Vercel', 'Heroku', 'Agile Scrum', 'Project Management'],
];
function renderMarquee() {
  MARQUEE.forEach((row, r) => {
    const items = row.map((t) => {
      const hot = t === 'Laravel';
      return `<span class="mr-3 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border px-4 py-2 font-mono text-sm ${hot
        ? 'border-laravel/50 bg-laravel/10 font-semibold text-laravel shadow-[0_0_20px_-6px_rgba(255,45,32,0.7)]'
        : 'border-slate-200/80 bg-white/60 text-slate-700 dark:border-cyan-300/10 dark:bg-white/[0.03] dark:text-slate-300'}">
        <span class="${hot ? 'text-laravel' : 'text-cyan-600 dark:text-cyan-300'}" aria-hidden="true">◆</span>${t}</span>`;
    }).join('');
    document.getElementById(`mq-${r + 1}`).innerHTML = `<div class="flex">${items}</div><div class="flex" aria-hidden="true">${items}</div>`;
  });
}

// Section labels decode in like a terminal
function setupScramble() {
  if (!hasIO) return;
  const glyphs = '!<>-_\\/[]{}=+*^?#01';
  const run = (el) => {
    const final = el.dataset.text, t0 = performance.now(), dur = 900;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1), n = Math.floor(p * final.length);
      el.textContent = final.slice(0, n) + [...final.slice(n)].map((c) => (c === ' ' ? ' ' : glyphs[(Math.random() * glyphs.length) | 0])).join('');
      if (p < 1) requestAnimationFrame(step); else el.textContent = final;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } }), { threshold: 0.6 });
  document.querySelectorAll('.eyebrow').forEach((el) => { el.dataset.text = el.textContent; io.observe(el); });
}

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// 3D tilt toward the pointer on .tilt cards
function setupTilt() {
  if (!finePointer) return;
  let cur = null;
  const reset = () => { if (cur) { cur.style.transform = ''; cur = null; } };
  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest ? e.target.closest('.tilt') : null;
    if (cur && cur !== el) reset();
    if (!el) return;
    cur = el;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-4px)`;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', reset);
}

// Buttons lean toward the cursor
function setupMagnetic() {
  if (!finePointer) return;
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

// Soft glow that trails the cursor across the page
function setupCursorGlow() {
  if (!finePointer) return;
  const glow = document.getElementById('cursor-glow');
  glow.classList.remove('hidden');
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
  const loop = () => {
    x += (tx - x) * 0.12; y += (ty - y) * 0.12;
    glow.style.transform = `translate(${x - 280}px, ${y - 280}px)`;
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : 0;
  };
  document.addEventListener('pointermove', (e) => {
    tx = e.clientX; ty = e.clientY;
    glow.classList.remove('opacity-0');
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => glow.classList.add('opacity-0'));
}

/* =====================================================================
   TESTIMONIALS: add real quotes (with permission) and the section appears.
   { quote: '…', name: 'Full Name', role: 'Position, Organization' }
   ===================================================================== */
const TESTIMONIALS = [];

/* =====================================================================
   NOTES: short technical write-ups in /notes
   ===================================================================== */
const NOTES = [
  {
    title: 'Building a multi-step form wizard with Laravel, Inertia and React',
    summary: 'One record, validation per step, no skipping ahead, and drafts that survive a closed tab, with Pest tests for the rules that matter.',
    href: './notes/multi-step-wizard-laravel-inertia.html', date: 'Oct 2026', read: '6 min', tags: ['Laravel', 'Inertia.js', 'React.js', 'Pest'],
  },
  {
    title: 'Public document links without exposing database IDs',
    summary: 'Hashids, random tokens and signed URLs compared, for verification links and QR codes on printed documents.',
    href: './notes/public-document-links-hashids.html', date: 'Oct 2026', read: '5 min', tags: ['Laravel', 'Security', 'QR Code'],
  },
];

function renderNotes() {
  document.getElementById('notes-grid').innerHTML = NOTES.map((n) => `
    <a href="${n.href}" class="group reveal card card-hover spot flex flex-col p-6 sm:p-8">
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">${n.date} · ${n.read} read</p>
      <h3 class="mt-3 text-xl font-bold leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-300">${n.title}</h3>
      <p class="mt-3 flex-1 text-sm leading-relaxed sm:text-base">${n.summary}</p>
      <div class="mt-5 flex flex-wrap items-center gap-1.5">${n.tags.map(chip).join('')}
        <span class="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300">Read ${icon('arrowRight', 'h-4 w-4 transition group-hover:translate-x-1')}</span>
      </div>
    </a>`).join('');
}

function renderTestimonials() {
  if (!TESTIMONIALS.length) return;
  document.getElementById('testimonials').classList.remove('hidden');
  document.getElementById('testimonial-grid').innerHTML = TESTIMONIALS.map((t) => `
    <figure class="reveal card card-hover spot flex flex-col p-6 sm:p-8">
      <span class="font-display text-5xl leading-none text-cyan-600 dark:text-cyan-300" aria-hidden="true">“</span>
      <blockquote class="mt-2 flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">${esc(t.quote)}</blockquote>
      <figcaption class="mt-6 border-t border-slate-200/70 pt-4 dark:border-cyan-300/10">
        <span class="block font-semibold text-slate-900 dark:text-ink">${esc(t.name)}</span>
        <span class="font-mono text-[11px]">${esc(t.role)}</span>
      </figcaption>
    </figure>`).join('');
}

// Selected work: large cards in a horizontal scroll-snap gallery
function renderWork() {
  const items = PROJECTS.filter((p) => p.featured);
  document.getElementById('work-count').textContent = items.length;
  const track = document.getElementById('work-track');
  track.innerHTML = items.map((p, i) => {
    const link = (p.links || [])[0];
    return `
    <article class="group card spot relative w-[86vw] max-w-[620px] flex-none snap-start overflow-hidden sm:w-[70vw] lg:w-[46vw]">
      <div class="relative aspect-[16/9] overflow-hidden">
        <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
        <span class="absolute bottom-3 right-4 font-mono text-[11px] text-white/70">${String(i + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}</span>
      </div>
      <div class="p-6 sm:p-7">
        <p class="font-mono text-[11px] text-cyan-700 dark:text-cyan-300">${[p.org, p.year, p.role].filter(Boolean).join(' · ')}</p>
        <h3 class="mt-2 text-xl font-bold leading-snug sm:text-2xl">${p.title}</h3>
        <p class="mt-3 text-sm leading-relaxed sm:text-base">${p.impact || p.description}</p>
        <div class="mt-5 flex flex-wrap items-center gap-3">
          <div class="flex flex-wrap gap-1.5">${p.tech.slice(0, 5).map(chip).join('')}</div>
          ${link ? `<a href="${link.href}" ${link.internal ? '' : 'target="_blank" rel="noopener"'} class="btn-ghost btn-sm ml-auto">${icon(link.icon || 'external', 'h-3.5 w-3.5')} ${link.label}</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-scroll-work]').forEach((b) => b.addEventListener('click', () => {
    const card = track.querySelector('article');
    track.scrollBy({ left: (card ? card.offsetWidth + 24 : 400) * Number(b.dataset.scrollWork), behavior: 'smooth' });
  }));
}

// Boot intro: once per session, ~1.4s, skippable
function runBoot() {
  const root = document.documentElement;
  if (!root.classList.contains('is-booting')) return;
  const boot = document.getElementById('boot'), log = document.getElementById('boot-log'), bar = document.getElementById('boot-bar');
  const lines = [
    '> booting raychard.os v2026.10',
    '> loading modules ........ laravel react mysql node',
    '> mounting /projects ..... 13 found, 11 archived',
    '> verifying credentials .. cpms casm cpsca  ok',
    '> establishing network ... 7,641 islands  ok',
    '> ready. welcome.',
  ];
  let i = 0, done = false;
  const finish = () => {
    if (done) return; done = true;
    try { sessionStorage.setItem('booted', '1'); } catch (e) {}
    boot.style.opacity = '0';
    root.classList.remove('is-booting');
    document.querySelector('.hero-title').classList.add('play');
    setTimeout(() => boot.remove(), 520);
    ['keydown', 'pointerdown', 'wheel', 'touchstart'].forEach((ev) => removeEventListener(ev, finish));
  };
  ['keydown', 'pointerdown', 'wheel', 'touchstart'].forEach((ev) => addEventListener(ev, finish, { once: true, passive: true }));
  const tick = () => {
    if (done) return;
    if (i < lines.length) {
      log.textContent += (i ? '\n' : '') + lines[i++];
      bar.style.width = `${(i / lines.length) * 100}%`;
      setTimeout(tick, 190);
    } else setTimeout(finish, 280);
  };
  tick();
}

// Terminal: an alternative, keyboard-first way to explore the site
function setupTerminal() {
  const term = document.getElementById('terminal'), out = document.getElementById('term-out');
  const form = document.getElementById('term-form'), input = document.getElementById('term-input');
  const history = []; let hIdx = 0, lastFocus = null;
  const print = (html, cls = '') => { out.insertAdjacentHTML('beforeend', `<div class="${cls}">${html}</div>`); out.scrollTop = out.scrollHeight; };
  const c = (s) => `<span class="text-cyan-300">${s}</span>`;
  const go = (id) => { close(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const featured = PROJECTS.filter((p) => p.cat !== 'eng');
  const COMMANDS = {
    help: () => print([
      `${c('whoami')}        who I am`, `${c('about')}         short bio`, `${c('skills')}        tech stack`,
      `${c('projects')}      list projects`, `${c('open')} &lt;n|name&gt;   open a project (try: open pdmis)`,
      `${c('experience')}    roles and dates`, `${c('certs')}         certifications`, `${c('resume')}        download my resume`,
      `${c('ask')} &lt;question&gt;  ask me anything (try: ask why public sector)`, `${c('notes')}         technical write-ups`, `${c('contact')}       ways to reach me`, `${c('socials')}       github, linkedin, gitlab`, `${c('goto')} &lt;section&gt;  about · insights · stack · projects · experience · notes · contact`,
      `${c('theme')} [dark|light]`, `${c('clear')}         clear the screen`, `${c('exit')}          close the terminal`,
    ].join('<br>')),
    whoami: () => print('Raychard E. Atienza, CPMS · CASM · CPSCA<br>Full-stack developer · Laravel × React · Quezon City, PH'),
    about: () => print('Computer Engineer. Field systems engineer turned full-stack developer. I build data platforms, approval workflows, SSO and APIs, then train the people who use them.'),
    skills: () => print(['back-end   Laravel · PHP · Node.js · Express.js · REST APIs · Sanctum', 'front-end  React.js · Inertia.js · Tailwind · Bootstrap · HTML5 · CSS3 · JavaScript', 'data       MySQL · MongoDB', 'tools      Git · GitHub · GitLab · Postman · Vercel · Vite · Pest'].join('<br>')),
    projects: () => print(featured.map((p, i) => `${c(String(i + 1).padStart(2, ' '))}  ${p.title} <span class="text-slate-500">· ${p.year || p.org}</span>`).join('<br>') + `<br><span class="text-slate-500">type</span> ${c('open &lt;n&gt;')}`),
    open: (arg) => {
      const q = (arg || '').toLowerCase();
      const p = featured[Number(q) - 1] || featured.find((x) => (x.acronym || '').toLowerCase().replace(/[^a-z0-9]/g, '').startsWith(q.replace(/[^a-z0-9]/g, '')) || x.title.toLowerCase().includes(q));
      if (!q || !p) return print(`project not found: ${esc(arg || '')}. try ${c('projects')}`, 'text-rose-300');
      const link = (p.links || [])[0];
      print(`<b class="text-ink">${p.title}</b><br>${p.description}<br><span class="text-slate-500">${p.tech.join(' · ')}</span>`);
      if (link) { print(`opening ${link.label.toLowerCase()}…`); setTimeout(() => (link.internal ? (location.href = link.href) : window.open(link.href, '_blank', 'noopener')), 500); }
    },
    experience: () => print(TIMELINE.filter((t) => t.type === 'role').map((t) => `${c(t.date.padEnd(20, ' ').replace(/ /g, '&nbsp;'))}${t.title}`).join('<br>')),
    certs: () => print('CPMS  Certified Project Management Specialist · 2026<br>CASM  Certified Agile Scrum Master · 2026<br>CPSCA Certified Project Scheduling and Controls Analyst · 2026<br>CSE   Career Service Professional eligibility · 2024'),
    resume: () => { print('downloading resume…'); const a = document.createElement('a'); a.href = './assets/resume/Raychard-Atienza-Resume.pdf'; a.download = ''; a.click(); },
    contact: () => print(`email   <a class="underline" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a><br>or type ${c('goto contact')} for the form`),
    socials: () => print('<a class="underline" target="_blank" rel="noopener" href="https://github.com/raychardatienza">github.com/raychardatienza</a><br><a class="underline" target="_blank" rel="noopener" href="https://www.linkedin.com/in/raychardatienza/">linkedin.com/in/raychardatienza</a><br><a class="underline" target="_blank" rel="noopener" href="https://gitlab.com/b279-atienza">gitlab.com/b279-atienza</a>'),
    goto: (arg) => (document.getElementById(arg) ? go(arg) : print(`unknown section: ${esc(arg || '')}`, 'text-rose-300')),
    theme: (arg) => {
      const root = document.documentElement, want = arg === 'light' ? false : arg === 'dark' ? true : !root.classList.contains('dark');
      if (root.classList.contains('dark') !== want) document.getElementById('theme-toggle').click();
      print(`theme: ${want ? 'dark' : 'light'}`);
    },
    ask: (arg) => {
      const a = answer(arg);
      if (a === null) return print(`try: ${c("ask what is your strongest stack")} · ${c("ask where are you based")} · ${c("ask why public sector")}`);
      print(a || `I don't have a prepared answer for that yet. Email me: ${CONTACT_EMAIL}`);
    },
    notes: () => print(NOTES.map((n, i) => `${c(String(i + 1))}  <a class="underline" href="${n.href}">${n.title}</a> <span class="text-slate-500">· ${n.read}</span>`).join('<br>')),
    clear: () => { out.innerHTML = ''; },
    exit: () => close(),
    sudo: (arg) => (/hire/.test(arg || '') ? (print('permission granted. opening the contact form…', 'text-emerald-300'), setTimeout(() => go('contact'), 600)) : print('nice try.', 'text-rose-300')),
  };
  const run = (line) => {
    const [cmd, ...rest] = line.trim().split(/\s+/);
    if (!cmd) return;
    print(`<span class="text-cyan-300">raychard@portfolio:~$</span> ${esc(line)}`, 'mt-2 text-ink');
    (COMMANDS[cmd.toLowerCase()] || (() => print(`command not found: ${esc(cmd)}. type ${c('help')}`, 'text-rose-300')))(rest.join(' '));
  };
  // While open, everything behind the dialog is inert, so Tab can't leave the terminal
  const background = ['site-header', 'main'].map((id) => document.getElementById(id)).concat([document.querySelector('footer'), document.getElementById('to-top')]);
  const setInert = (on) => background.forEach((el) => el && (el.inert = on));
  function open() {
    lastFocus = document.activeElement;
    setInert(true);
    term.classList.remove('hidden'); term.classList.add('flex');
    if (!out.childElementCount) print(`Welcome. Type ${c('help')} to see what I can do, or try ${c('open pdmis')}.`, 'text-slate-400');
    setTimeout(() => input.focus(), 30);
  }
  function close() {
    setInert(false);
    term.classList.add('hidden'); term.classList.remove('flex');
    lastFocus && lastFocus.focus && lastFocus.focus();
  }
  // Keep Tab cycling between the input and the close button
  term.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || document.activeElement === input) return;
    e.preventDefault(); input.focus();
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); const v = input.value; if (v.trim()) { history.push(v); hIdx = history.length; } input.value = ''; run(v); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && history.length) { hIdx = Math.max(0, hIdx - 1); input.value = history[hIdx]; e.preventDefault(); }
    else if (e.key === 'ArrowDown' && history.length) { hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || ''; e.preventDefault(); }
    else if (e.key === 'Tab') { const m = Object.keys(COMMANDS).find((k) => k.startsWith(input.value.trim())); if (m) input.value = m + ' '; e.preventDefault(); }
  });
  document.querySelectorAll('[data-open-terminal]').forEach((b) => b.addEventListener('click', open));
  document.getElementById('term-close').addEventListener('click', close);
  term.addEventListener('pointerdown', (e) => { if (e.target === term) close(); });
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === 'Escape' && !term.classList.contains('hidden')) close();
    else if ((e.key === '/' || e.key === '`') && !typing && term.classList.contains('hidden')) { e.preventDefault(); open(); }
  });
}

// Typewriter role line
function setupTyper() {
  const el = document.getElementById('typer');
  let r = 0, i = ROLES[0].length, deleting = true;
  const tick = () => {
    const word = ROLES[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 35 : 70;
    if (!deleting && i === word.length) { deleting = true; delay = 2200; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % ROLES.length; delay = 300; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2600);
}

// Theme toggle (dark by default, persisted)
function setupTheme() {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const sync = () => btn.setAttribute('aria-pressed', String(root.classList.contains('dark')));
  sync();
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    try { localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
    sync();
  });
}

// Mobile menu
function setupMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.querySelector('[data-when="closed"]').classList.toggle('hidden', open);
    btn.querySelector('[data-when="open"]').classList.toggle('hidden', !open);
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
  });
  window.matchMedia('(min-width: 768px)').addEventListener?.('change', (e) => { if (e.matches) setOpen(false); });
}

// Scroll progress, parallax, timeline fill, back-to-top
const progress = document.getElementById('progress');
const toTop = document.getElementById('to-top');
const portrait = document.getElementById('portrait');
const blobA = document.getElementById('blob-a');
const blobB = document.getElementById('blob-b');
const tlWrap = document.getElementById('tl-wrap');
const tlFill = document.getElementById('tl-fill');
const tlMeter = document.getElementById('tl-meter');
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;

  if (scrollY < innerHeight * 1.5) portrait.style.translate = `0 ${(scrollY * 0.09).toFixed(1)}px`;
  blobA.style.translate = `0 ${(scrollY * -0.12).toFixed(1)}px`;
  blobB.style.translate = `0 ${(scrollY * -0.06).toFixed(1)}px`;
  const r = tlWrap.getBoundingClientRect();
  const p = Math.min(Math.max((innerHeight * 0.65 - r.top) / r.height, 0), 1);
  tlFill.style.transform = `scaleY(${p.toFixed(3)})`;
  tlMeter.style.width = `${(p * 100).toFixed(1)}%`;

  const showTop = scrollY > 700;
  toTop.classList.toggle('opacity-0', !showTop);
  toTop.classList.toggle('translate-y-4', !showTop);
  toTop.classList.toggle('pointer-events-none', !showTop);
}

// Scrollspy for nav links
function setupScrollSpy() {
  const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
  if (!hasIO) return;
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = '#' + e.target.id;
      links.forEach((l) => {
        const active = l.getAttribute('href') === id;
        l.classList.toggle('is-active', active);
        active ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['home', 'about', 'insights', 'stack', 'projects', 'experience', 'notes', 'contact'].forEach((id) => spy.observe(document.getElementById(id)));
}

// Project filters
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const counts = {
    gov: PROJECTS.filter((p) => p.cat === 'gov').length,
    web: PROJECTS.filter((p) => p.cat === 'web').length,
    all: PROJECTS.filter((p) => p.cat !== 'eng').length,
  };
  buttons.forEach((b) => {
    b.insertAdjacentHTML('beforeend', ` <span class="opacity-60">${String(counts[b.dataset.filter]).padStart(2, '0')}</span>`);
    b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderProjects(b.dataset.filter);
    });
  });
  renderProjects('all');
}

// Contact form (Web3Forms, with mailto fallback)
// Small confirmation toast
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('opacity-0', 'translate-y-4');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('opacity-0', 'translate-y-4'), 2200);
}

// Copy email (with a fallback for browsers without the async clipboard API) and optional booking link
function setupContactExtras() {
  document.getElementById('copy-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = CONTACT_EMAIL; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    toast(`✓ copied ${CONTACT_EMAIL}`);
  });
  if (BOOKING_URL) {
    const book = document.getElementById('book-call');
    book.href = BOOKING_URL;
    book.classList.remove('hidden'); book.classList.add('inline-flex');
  }
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submit = document.getElementById('cf-submit');
  const label = submit.querySelector('span');

  const show = (msg, kind) => {
    const styles = {
      success: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300',
      error: 'border border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-300',
      info: 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-200',
    };
    status.className = `rounded-xl px-4 py-3 text-sm ${styles[kind]}`;
    status.innerHTML = msg;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // bot filled the honeypot

    const subject = data.subject || `Portfolio inquiry from ${data.name}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('YOUR_')) {
      window.location.href = mailto;
      show('Opening your email app to send this message…', 'info');
      return;
    }

    submit.disabled = true;
    submit.classList.add('opacity-70', 'cursor-wait');
    label.textContent = 'Sending…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Portfolio] ${subject}`,
          from_name: 'Raychard Atienza Portfolio',
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'Request failed');
      form.reset();
      show('Thanks! Your message was sent. I\'ll reply as soon as I can.', 'success');
    } catch (err) {
      show(`Sorry, the message couldn't be sent. Please <a class="font-semibold underline" href="${mailto}">email me directly</a>.`, 'error');
    } finally {
      submit.disabled = false;
      submit.classList.remove('opacity-70', 'cursor-wait');
      label.textContent = label.dataset.orig || 'Send message';
    }
  });
}

/* =====================================================================
   IMPACT: real numbers from your work. The section appears once this has entries.
   { value: 120, suffix: '+', label: 'employees trained', note: 'Document Tracking System v2' }
   ===================================================================== */
const IMPACT = [];

function renderImpact() {
  if (!IMPACT.length) return;
  document.getElementById('impact').classList.remove('hidden');
  document.getElementById('impact-grid').innerHTML = IMPACT.map((m) => `
    <div class="glass relative p-5 sm:p-6">
      <dt class="font-mono text-[10.5px] uppercase tracking-[0.18em]">${esc(m.label)}</dt>
      <dd class="mt-2 font-display text-4xl font-bold text-slate-900 dark:text-ink"><span data-count="${Number(m.value)}" data-suffix="${esc(m.suffix || '')}">${Number(m.value)}${esc(m.suffix || '')}</span></dd>
      ${m.note ? `<dd class="mt-1 text-xs">${esc(m.note)}</dd>` : ''}
    </div>`).join('');
}

/* =====================================================================
   PERSONALIZED LINKS
   …/portfolio/?for=Acme             greets "Acme" and pre-fills the contact subject
   …/portfolio/?for=Acme&focus=react  also puts matching projects first
   ===================================================================== */
function setupPersonalization() {
  const q = new URLSearchParams(location.search);
  const who = (q.get('for') || '').replace(/[^\p{L}\p{N} .&'-]/gu, '').trim().slice(0, 40);
  const focus = (q.get('focus') || '').toLowerCase().replace(/[^a-z0-9.+# -]/g, '').trim().slice(0, 30);
  if (focus) {
    const score = (p) => (p.cat === focus ? 2 : 0) + (p.tech.some((t) => t.toLowerCase().includes(focus)) ? 3 : 0) + (p.title.toLowerCase().includes(focus) ? 1 : 0);
    PROJECTS.sort((a, b) => score(b) - score(a)); // stable: ties keep their original order
    PROJECTS.forEach((p) => { if (score(p) >= 3 && p.cat !== 'eng') p.featured = true; });
  }
  if (!who) return;
  const badge = document.getElementById('hero-badge');
  badge.removeAttribute('data-i18n');
  badge.textContent = `hi, ${who} team 👋 · thanks for stopping by`;
  document.title = `Raychard Atienza — for ${who}`;
  const subject = document.getElementById('cf-subject');
  if (subject && !subject.value) subject.value = `Opportunity at ${who}`;
}

/* =====================================================================
   ENGLISH / FILIPINO
   English text is read from the page; Filipino lives here. Keys match data-i18n attributes.
   ===================================================================== */
const I18N_FIL = {
  badge: 'online · laravel × react · lungsod quezon',
  h1: 'Bumubuo ng mga sistemang <span class="text-neon">maaasahan</span>, gamit ang Laravel at React.',
  bio: 'Ako si <strong class="font-semibold text-slate-900 dark:text-ink">Raychard Atienza</strong>, isang Computer Engineer at full-stack developer. Gumagawa ako ng mga data platform, approval workflow, single sign-on at mga API sa likod ng mga ito, at tinuturuan ko ang mga taong gumagamit nito araw-araw.',
  'cta-resume': 'I-download ang Resume',
  'cta-work': 'Tingnan ang mga Gawa',
  about: 'Gumagawa ako ng software na <span class="text-neon">inaasahan ng mga tao araw-araw</span>, at hindi ako umaalis hangga\'t hindi nila ito natututunang gamitin.',
  why: 'Tahimik ang mahusay na software sa gobyerno. Napapatunayan ang isang sertipiko sa loob ng ilang segundo sa halip na ilang araw, naaaprubahan ang isang plano nang walang patong-patong na papel, at naipoproseso sa tamang oras ang tulong para sa isang estudyante. Iyan ang epektong gusto kong maibigay ng aking code.',
  'contact-title': 'Bumuo tayo ng <span class="text-neon">isang bagay na makabuluhan</span>.',
  'contact-lead': 'May proyekto, trabaho, o information system na kailangang ayusin? Magpadala ng mensahe at babalikan kita.',
  send: 'Ipadala ang mensahe',
};
const I18N_EN = {};

function setupLanguage() {
  const btn = document.getElementById('lang-toggle');
  document.querySelectorAll('[data-i18n]').forEach((el) => { I18N_EN[el.dataset.i18n] = el.innerHTML; });
  let lang = 'en';
  try { lang = localStorage.getItem('lang') === 'fil' ? 'fil' : 'en'; } catch (e) {}
  const apply = (l, resplit) => {
    const dict = l === 'fil' ? I18N_FIL : I18N_EN;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v != null) { el.innerHTML = v; el.dataset.orig = el.textContent; }
    });
    document.documentElement.lang = l === 'fil' ? 'fil' : 'en';
    btn.textContent = l === 'fil' ? 'EN' : 'FIL';
    btn.setAttribute('aria-label', l === 'fil' ? 'Switch language to English' : 'Lumipat sa Filipino');
    if (resplit) { splitHeadline(); document.querySelector('.hero-title').classList.add('play'); }
  };
  if (lang === 'fil') apply('fil', false);
  btn.addEventListener('click', () => {
    lang = lang === 'fil' ? 'en' : 'fil';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply(lang, true);
  });
}

/* =====================================================================
   TERMINAL "ask": prepared answers, matched by keywords
   ===================================================================== */
const ANSWERS = [
  { k: ['stack', 'tech', 'strongest', 'framework', 'laravel', 'language', 'skills', 'tools'], a: 'Laravel is my daily driver: Laravel 12 + Inertia.js + React + Tailwind CSS on MySQL. I also build Node.js / Express APIs with MongoDB, and I test with Pest.' },
  { k: ['where', 'based', 'location', 'remote', 'hybrid', 'onsite', 'relocate'], a: 'I\'m based in Quezon City, Philippines. Happy to talk about remote, hybrid or on-site setups.' },
  { k: ['experience', 'years', 'background', 'career', 'history'], a: 'In tech since 2015: systems engineering (CCTV, access control, networks), on-call hardware and system maintenance, then full-stack development. I\'ve built public-sector platforms since 2024.' },
  { k: ['project', 'proud', 'pdmis', 'built', 'case study'], a: 'PDMIS: proposals, activity designs, work and financial plans, and procurement plans in one review → approval → digital-signing workflow. Read the case study: <a class="underline" href="./case-studies/pdmis.html">case-studies/pdmis</a>' },
  { k: ['why', 'public', 'government', 'motivat', 'mission'], a: 'Good public-sector software is quiet: certificates verified in seconds, plans approved without paper stacks, assistance processed on time. That\'s the impact I want my code to have.' },
  { k: ['cert', 'pm', 'project management', 'scrum', 'agile', 'qualif'], a: 'CPMS (Certified Project Management Specialist), CASM (Certified Agile Scrum Master) and CPSCA (Certified Project Scheduling and Controls Analyst), all 2026, plus Career Service Professional eligibility.' },
  { k: ['school', 'education', 'degree', 'college', 'study', 'studied'], a: 'BS Computer Engineering, De La Salle Lipa (2016), plus 540+ hours of full-stack training at Zuitt Coding Bootcamp and Udemy in 2023.' },
  { k: ['team', 'lead', 'manage', 'train', 'mentor', 'collaborat'], a: 'I work across the whole delivery: requirements with end users, development, QA and UAT, and training. I mentored technicians as a systems engineer and train employees on every system we launch.' },
  { k: ['salary', 'rate', 'pay', 'compensation', 'price'], a: 'Happy to discuss once we\'ve talked about the role. Email me at ' + 'raychardatienza@gmail.com' + '.' },
  { k: ['hire', 'available', 'availability', 'open to', 'freelance', 'contact', 'reach'], a: 'The fastest way is email (raychardatienza@gmail.com) or the contact form. Try <span class="text-cyan-300">sudo hire raychard</span>.' },
];

function answer(question) {
  const q = (question || '').toLowerCase();
  if (!q.trim()) return null;
  const best = ANSWERS.map((x) => ({ x, s: x.k.filter((k) => q.includes(k)).length })).sort((a, b) => b.s - a.s)[0];
  return best && best.s ? best.x.a : '';
}

/* =====================================================================
   INIT
   ===================================================================== */
runBoot();
hydrateIcons();
setupLanguage();
splitHeadline();
renderMarquee();
setupTheme();
setupMenu();
setupPersonalization();
renderWork();
setupFilters();
renderArchive();
renderTestimonials();
renderImpact();
renderNotes();
renderTimeline();
renderCareer();
renderHours();
renderTech();
renderMix();
renderSystems();
setupInView();
setupTooltips();
setupSpotlight();
setupArchipelago();
setupTerminal();
setupTyper();
setupScramble();
setupTilt();
setupMagnetic();
setupCursorGlow();
setupScrollSpy();
setupContactForm();
setupContactExtras();
observeReveals();
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();
