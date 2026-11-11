/* Credence First Realtors — app.js */
(function () {
  'use strict';

  const WA_NUMBER = '917304971642';
  const P = './assets/projects/';
  const L = './assets/logos/';
  const RERA_PENDING = 'Shared with the cost sheet — verify on maharera.maharashtra.gov.in';

  const DEVELOPERS = [
    { key: 'Raymond',      label: 'Raymond Realty',      logo: L + 'raymond-realty-logo.png' },
    { key: 'Narang',       label: 'Narang Realty',       logo: L + 'narang-realty-logo.png' },
    { key: 'Kalpataru',    label: 'Kalpataru',           logo: L + 'kalpataru-logo.svg' },
    { key: 'Piramal',      label: 'Piramal Realty',      logo: L + 'piramal-realty-logo.svg' },
    { key: 'Ashwin Sheth', label: 'Ashwin Sheth Group',  logo: L + 'ashwin-sheth-logo.svg' },
    { key: 'Rustomjee',    label: 'Rustomjee',           logo: L + 'rustomjee-logo.svg' },
    { key: 'Prestige',     label: 'Prestige Group',      logo: L + 'prestige-group-logo.webp' },
    { key: 'Dosti',        label: 'Dosti Realty',        logo: L + 'dosti-realty-logo.webp' },
    { key: 'Runwal',       label: 'Runwal',              logo: L + 'runwal-logo.svg' },
    { key: 'Bhimjyani',    label: 'T. Bhimjyani Realty', logo: L + 'tbhimjyani-logo.webp' },
    { key: 'Lodha',        label: 'Lodha',               logo: L + 'lodha-logo.svg' },
    { key: 'Godrej',       label: 'Godrej Properties',   logo: L + 'godrej-logo.svg' },
    { key: 'DLF',          label: 'DLF',                 logo: L + 'dlf-logo-dark.webp' },
    { key: 'Puraniks',     label: 'Puraniks',            logo: L + 'puraniks-logo.svg' }
  ];

  const PROJECTS = [
    /* ---------- 10 PREMIER THANE DEVELOPERS & FLAGSHIP MANDATES ---------- */
    {
      id: 'raymond-invictus',
      dev: 'Raymond',
      name: 'The Address by GS & Invictus',
      area: 'Pokhran Road 2, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [3, 4, 5],
      typology: '3, 4 & 5 BHK',
      size: '1,120 – 2,450 sq.ft.',
      price: '₹ 2.85 Cr*',
      possession: 'Under construction & Phased',
      about: "Raymond Realty’s landmark high-street residential estate on prime Pokhran Road 2. Portuguese-inspired grand architecture, double-height air-conditioned designer lobbies, private deck residences, and lush acres of curated parklands.",
      config: [
        ['3 BHK Signature', '1,120 – 1,420 sq.ft.'],
        ['4 BHK Grand Suite', '1,780 – 2,150 sq.ft.'],
        ['5 BHK Presidential', '2,450 sq.ft.']
      ],
      rera: 'P51700045952 · P51700047461',
      towers: ['The Address by GS', 'Invictus Signature Tower', 'TenX Era', 'TenX Habitat'],
      images: [P + 'raymond-invictus.jpg']
    },
    {
      id: 'narang-privado',
      dev: 'Narang',
      name: 'Narang Privado & Courtyard',
      area: 'Pokhran Road 1, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3, 4],
      typology: '2, 3 & 4 BHK',
      size: '780 – 1,620 sq.ft.',
      price: '₹ 2.45 Cr*',
      possession: 'Under construction',
      about: 'Ultra-luxury residences nestled directly beside the lush Yeoor Hills foothills on Pokhran Road 1. Low-density gated sanctuary master-planned by Architect Hafeez Contractor with panoramic hill-canopy views, heated indoor pools, and grand entrance plazas.',
      config: [
        ['2 BHK Luxury', '780 – 890 sq.ft.'],
        ['3 BHK Deck Suite', '1,150 – 1,380 sq.ft.'],
        ['4 BHK Penthouse Deck', '1,550 – 1,620 sq.ft.']
      ],
      rera: 'P51700030582 · P51700000754',
      towers: ['Privado Luxury Tower', 'Courtyard Phase 2', 'Asteria High Street Residences'],
      images: [P + 'narang-privado.jpg']
    },
    {
      id: 'kalpataru-parkcity',
      dev: 'Kalpataru',
      name: 'Kalpataru Parkcity',
      area: 'Kolshet Road, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3, 4],
      typology: '2, 3 & 4 BHK',
      size: '620 – 1,510 sq.ft.',
      price: '₹ 1.55 Cr*',
      possession: 'Under construction & Ready Clusters',
      about: 'An integrated 100+ acre township built seamlessly around the 20+ acre Grand Central Park of Thane. Over 4,050 trees, lake promenades, multiple themed clubhouses, Olympic-length lap pools, and international standard sports facilities on prime Kolshet Road.',
      config: [
        ['2 BHK Urban', '620 – 760 sq.ft.'],
        ['3 BHK Park Vista', '980 – 1,220 sq.ft.'],
        ['4 BHK Grand Sky Deck', '1,420 – 1,510 sq.ft.']
      ],
      rera: 'P51700020175 · P51700020196',
      towers: ['Eternia Tower', 'Estella', 'Immensa', 'Primera', 'Sunrise Towers'],
      images: [P + 'kalpataru-parkcity.jpg']
    },
    {
      id: 'sheth-avalon',
      dev: 'Ashwin Sheth',
      name: 'Sheth Avalon & Fern',
      area: 'Eastern Express Highway, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [3, 4, 5],
      typology: '3, 4 & 5 BHK Sky Mansions',
      size: '1,280 – 2,850 sq.ft.',
      price: '₹ 3.10 Cr*',
      possession: 'Ready & Under construction',
      about: 'High-end branded residences conceptualised by Sussanne Khan, directly fronting Viviana Mall and the Eastern Express Highway. Features sprawling cantilevered private sky decks, private elevator lobbies, and a 5-tier luxury clubhouse.',
      config: [
        ['3 BHK Royal Deck', '1,280 – 1,520 sq.ft.'],
        ['4 BHK Sky Palace', '1,950 – 2,280 sq.ft.'],
        ['5 BHK Penthouse Duplex', '2,650 – 2,850 sq.ft.']
      ],
      rera: 'P51700015518',
      towers: ['Sheth Avalon Signature', 'Sheth Fern Towers', 'Sky Club Residences'],
      images: [P + 'sheth-avalon.jpg']
    },
    {
      id: 'piramal-vaikunth',
      dev: 'Piramal',
      name: 'Piramal Vaikunth',
      area: 'Balkum, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3],
      typology: '2, 2.5 & 3 BHK',
      size: '685 – 1,420 sq.ft.',
      price: '₹ 1.65 Cr*',
      possession: 'Phased Delivery',
      about: 'A 32-acre urban community living sanctuary featuring up to 40% open green reserves and a dedicated ISKCON temple complex within the master plan. Engineered with world-renowned consultants HOK and BuroHappold with lush botanical gardens and forest walking trails.',
      config: [
        ['2 BHK Sanctuary', '685 – 790 sq.ft.'],
        ['2.5 BHK Deck', '860 – 940 sq.ft.'],
        ['3 BHK Valley Vista', '1,150 – 1,420 sq.ft.']
      ],
      rera: 'P51700003525 · P51700024023',
      towers: ['Vaikunth Cluster 1 & 2', 'Cluster 3 Signature', 'ISKCON Temple Zone'],
      images: [P + 'piramal-vaikunth.jpg']
    },
    {
      id: 'rustomjee-urbania-thane',
      dev: 'Rustomjee',
      name: 'Rustomjee Uptown Urbania',
      area: 'Majiwada Junction, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3],
      typology: '2 & 3 BHK',
      size: '630 – 1,220 sq.ft.',
      price: '₹ 1.48 Cr*',
      possession: 'Under construction',
      about: 'A 127+ acre self-contained mega-township at Majiwada Junction. Host to the Cambridge International Urbania School, Leon’s World amusement zone, rooftop infinity-edge pools, open-air amphitheatre, and 100% traffic-free pedestrian podium levels.',
      config: [
        ['2 BHK Urban Suite', '630 – 780 sq.ft.'],
        ['3 BHK Horizon Deck', '980 – 1,220 sq.ft.']
      ],
      rera: 'P51700032205 · P51700018622',
      towers: ['La Vie Luxury', 'La Familia Tower', 'Verdant Vistas', 'Azziano Township'],
      images: [P + 'rustomjee-urbania.jpg']
    },
    {
      id: 'prestige-thane',
      dev: 'Prestige',
      name: 'Prestige City & Forest Hills',
      area: 'Mulund-Thane Check Naka / Yogi Hills',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3, 4],
      typology: '2, 3 & 4 BHK',
      size: '760 – 1,840 sq.ft.',
      price: '₹ 2.10 Cr*',
      possession: 'Under construction',
      about: 'Prestige Group’s 30+ acre hillside master township abutting Yogi Hills at the Mulund-Thane border. Features elevated mountain walkways, panoramic Sanjay Gandhi National Park vistas, signature hospitality clubhouse, and Olympic sports fields.',
      config: [
        ['2 BHK Hillside', '760 – 890 sq.ft.'],
        ['3 BHK Panorama', '1,180 – 1,420 sq.ft.'],
        ['4 BHK Forest Reserve', '1,680 – 1,840 sq.ft.']
      ],
      rera: 'P51800030145 · P51800031341',
      towers: ['Bellanza', 'Siesta', 'Forest Hills Residences', 'The Falcon Clubhouse'],
      images: [P + 'prestige-thane.jpg']
    },
    {
      id: 'dosti-west-county',
      dev: 'Dosti',
      name: 'Dosti West County',
      area: 'Balkum, Thane West',
      region: 'Thane Luxury Corridor',
      bhk: [1, 2, 3, 4],
      typology: '1, 2, 3 & 4 BHK',
      size: '480 – 1,350 sq.ft.',
      price: '₹ 95 Lakhs*',
      possession: 'Under construction & Ready',
      about: 'A 100-acre county development offering complete township living in central Balkum, Thane. Features EuroKids preschool on campus, Shiamak Davar’s Dance Institute, Suresh Wadkar’s Ajivasan Music Academy, and sprawling Olympic sports zones.',
      config: [
        ['1 BHK Suite', '480 – 540 sq.ft.'],
        ['2 BHK County', '620 – 780 sq.ft.'],
        ['3 BHK Grand', '980 – 1,180 sq.ft.'],
        ['4 BHK Premium Deck', '1,280 – 1,350 sq.ft.']
      ],
      rera: 'P51700015258 · P51700015259',
      towers: ['Dosti Cedar', 'Dosti Pine', 'Dosti Oak', 'Dosti Tulip', 'Dosti Nest'],
      images: [P + 'dosti-west-county.jpg']
    },
    {
      id: 'runwal-one',
      dev: 'Runwal',
      name: 'Runwal One & Eirene',
      area: 'Manpada, Ghodbunder Road, Thane',
      region: 'Thane Luxury Corridor',
      bhk: [2, 3, 4],
      typology: '2, 3 & 4 BHK',
      size: '690 – 1,580 sq.ft.',
      price: '₹ 1.75 Cr*',
      possession: 'Under construction',
      about: 'Ultra-contemporary residential marvel set in prime Manpada behind R-Mall. Features a massive central clubhouse with multi-level indoor sports arenas, reflexology trails, heated pools, and private screening lounges.',
      config: [
        ['2 BHK Smart Luxe', '690 – 810 sq.ft.'],
        ['3 BHK Deck Residence', '1,050 – 1,280 sq.ft.'],
        ['4 BHK Regal Deck', '1,450 – 1,580 sq.ft.']
      ],
      rera: 'P51700052843 · P51700004579',
      towers: ['Runwal One Tower A', 'Tower B', 'Eirene Phase 2', 'The Central Green'],
      images: [P + 'runwal-one.jpg']
    },
    {
      id: 'the-verraton',
      dev: 'Bhimjyani',
      name: 'The Verraton & Neelkanth Woods',
      area: 'Manpada, Yeoor Foothills, Thane',
      region: 'Thane Luxury Corridor',
      bhk: [3, 4, 5],
      typology: '3, 4 BHK & Sky Villas',
      size: '1,050 – 2,380 sq.ft.',
      price: '₹ 2.65 Cr*',
      possession: 'Ready & Under construction',
      about: 'A 34-acre hillside private estate located right at the Yeoor Hills perimeter. Ultra-exclusive low-density residences with private plunge pools, open sun terraces, and unbroken verdant valley vistas.',
      config: [
        ['3 BHK Forest View', '1,050 – 1,320 sq.ft.'],
        ['4 BHK Sky Palace', '1,780 – 2,100 sq.ft.'],
        ['5 BHK Private Hill Villa', '2,200 – 2,380 sq.ft.']
      ],
      rera: 'P51700000858 · P51700000219',
      towers: ['The Verraton Signature Tower', 'Neelkanth Woods Villas', 'Mountain Crest Tower'],
      images: [P + 'the-verraton.jpg']
    },

    /* ---------- SOUTH MUMBAI & WESTERN SUBURBS MANDATES ---------- */
    {
      id: 'dlf-westpark', dev: 'DLF', name: 'The Westpark', area: 'Andheri West', region: 'Western Suburbs',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,350–2,400 sq.ft.', price: '₹ 5.90 Cr*', possession: 'Under construction',
      about: 'A landscaped residential address in Andheri West with a clubhouse, an eco deck and open greens, close to the Metro and the Link Road.',
      config: [['3 BHK', '1,350–1,700 sq.ft.'], ['4 BHK', '1,900–2,400 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['The Westpark Tower 1', 'Tower 2', 'The Eco-Deck Residences'],
      images: [P + 'dlf-westpark-elevation.jpg', P + 'dlf-westpark-aerial.webp', P + 'dlf-westpark-club.webp', P + 'dlf-westpark-ecodeck.webp', P + 'dlf-westpark-interior.webp', P + 'dlf-westpark-lifestyle.webp']
    },
    {
      id: 'lodha-bellevue', dev: 'Lodha', name: 'Lodha Bellevue', area: 'Mahalaxmi, South Mumbai', region: 'South Mumbai',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,600–2,800 sq.ft.', price: '₹ 8.50 Cr*', possession: 'Under construction',
      about: 'Tall residences beside the Mahalaxmi racecourse, with deck amenities above the city and generous bedrooms facing the green.',
      config: [['3 BHK', '1,600–1,900 sq.ft.'], ['4 BHK', '2,200–2,800 sq.ft.']],
      rera: 'P51900046567 · P51900046594',
      towers: ['Tower 1 (Racecourse Facing)', 'Tower 2'],
      images: [P + 'lodha-bellevue-hero.jpg', P + 'lodha-bellevue-landscape.jpg', P + 'lodha-bellevue-deck.webp', P + 'lodha-bellevue-bedroom.webp']
    },
    {
      id: 'rustomjee-crown', dev: 'Rustomjee', name: 'Rustomjee Crown', area: 'Prabhadevi, Central Mumbai', region: 'South Mumbai',
      bhk: [2, 3, 4], typology: '2, 3 & 4 BHK', size: '800–2,100 sq.ft.', price: '₹ 4.25 Cr*', possession: 'Ready to move',
      about: 'A signature Prabhadevi tower with a residents-only deck and well-planned homes close to the sea link and the business districts.',
      config: [['2 BHK', '800–950 sq.ft.'], ['3 BHK', '1,200–1,500 sq.ft.'], ['4 BHK', '1,800–2,100 sq.ft.']],
      rera: 'P51900003268 · P51900006367',
      towers: ['Crown Tower A', 'Crown Tower B'],
      images: [P + 'rustomjee-crown-tower.webp', P + 'rustomjee-crown-deck.webp', P + 'rustomjee-crown-living.webp', P + 'rustomjee-crown-hero.webp']
    },
    {
      id: 'puraniks-mirai', dev: 'Puraniks', name: 'Puraniks Mirai', area: 'Thane West', region: 'Thane Luxury Corridor',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '720–1,150 sq.ft.', price: '₹ 1.45 Cr*', possession: 'Under construction',
      about: 'A well-connected Thane tower from a developer known for sturdy, value-driven homes across the western Thane belt.',
      config: [['2 BHK', '720–860 sq.ft.'], ['3 BHK', '980–1,150 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Mirai Signature Tower', 'Sky Lounge Residences'],
      images: [P + 'puraniks-mirai-site-actual.jpg']
    },
    {
      id: 'godrej-reserve', dev: 'Godrej', name: 'Godrej Reserve', area: 'Kandivali East', region: 'Western Suburbs',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,100–1,900 sq.ft.', price: '₹ 3.10 Cr*', possession: 'Under construction',
      about: 'Large homes set among mature greenery on the Kandivali hills, with a wide clubhouse and trails inside the campus.',
      config: [['3 BHK', '1,100–1,400 sq.ft.'], ['4 BHK', '1,600–1,900 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Reserve Hillside', 'Club Towers'],
      images: [P + 'godrej-reserve-kandivali.webp']
    },
    {
      id: 'godrej-nirvaan', dev: 'Godrej', name: 'Godrej Nirvaan', area: 'Kalyan, MMR', region: 'Thane Luxury Corridor',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '650–1,050 sq.ft.', price: '₹ 85 L*', possession: 'Under construction',
      about: 'Calm, thoughtfully planned residences with open courtyards and everyday amenities, aimed at families wanting space within the MMR.',
      config: [['2 BHK', '650–780 sq.ft.'], ['3 BHK', '900–1,050 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Tower 1', 'Tower 2', 'Central Courtyard'],
      images: [P + 'godrej-nirvaan-main.webp']
    },
    {
      id: 'lodha-altamount', dev: 'Lodha', name: 'Lodha Altamount', area: 'Altamount Road, South Mumbai', region: 'South Mumbai',
      bhk: [4, 5], typology: '4 & 5 BHK', size: '3,400–6,500 sq.ft.', price: '₹ 60 Cr*', possession: 'Ready to move',
      about: "An ultra-luxury residence on one of the country's most prestigious addresses, with a private elevator lobby and sweeping sea-facing views.",
      config: [['4 BHK', '3,400–4,200 sq.ft.'], ['5 BHK', '5,000–6,500 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Private Signature Estate'],
      images: [P + 'lodha-altamount-main.webp', P + 'lodha-seaface-balcony.webp']
    },
    {
      id: 'rustomjee-seasons', dev: 'Rustomjee', name: 'Rustomjee Seasons', area: 'Bandra East (BKC)', region: 'Western Suburbs',
      bhk: [2, 3, 4], typology: '2, 3 & 4 BHK', size: '850–2,000 sq.ft.', price: '₹ 3.75 Cr*', possession: 'Ready to move',
      about: 'A seasonal-themed courtyard community minutes from BKC, with homes designed around light and cross-ventilation.',
      config: [['2 BHK', '850–1,000 sq.ft.'], ['3 BHK', '1,250–1,550 sq.ft.'], ['4 BHK', '1,700–2,000 sq.ft.']],
      rera: 'P51800021028',
      towers: ['Autumn Tower', 'Winter Tower', 'Spring Tower'],
      images: [P + 'rustomjee-seasons-hero.webp', P + 'rustomjee-seasons-interior.webp']
    },
    {
      id: 'lodha-malabar', dev: 'Lodha', name: 'Lodha Malabar', area: 'Malabar Hill, South Mumbai', region: 'South Mumbai',
      bhk: [4, 5], typology: '4 & 5 BHK', size: '2,800–5,500 sq.ft.', price: '₹ 38 Cr*', possession: 'Under construction',
      about: 'Sky residences on Malabar Hill with sea and skyline views, a private podium garden and interiors finished to a hotel standard.',
      config: [['4 BHK', '2,800–3,600 sq.ft.'], ['5 BHK', '4,200–5,500 sq.ft.']],
      rera: 'P51900034949',
      towers: ['Governor Pavilion', 'Ocean Wing'],
      images: [P + 'lodha-malabar-hero.jpg', P + 'lodha-malabar-elevation.jpg', P + 'lodha-malabar-interior.jpg']
    },
    {
      id: 'godrej-horizon', dev: 'Godrej', name: 'Godrej Horizon', area: 'Wadala, Central Mumbai', region: 'South Mumbai',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '650–1,150 sq.ft.', price: '₹ 2.20 Cr*', possession: 'Under construction',
      about: 'A Wadala tower within reach of the Metro, the Eastern Freeway and the Monorail, with a full podium of amenities.',
      config: [['2 BHK', '650–800 sq.ft.'], ['3 BHK', '950–1,150 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Phase 1 Horizon', 'Skyline Residences'],
      images: [P + 'godrej-horizon-wadala.jpg']
    },
    {
      id: 'godrej-vistas', dev: 'Godrej', name: 'Godrej Vistas', area: 'Vikhroli, Eastern Suburbs', region: 'Central Suburbs',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '700–1,200 sq.ft.', price: '₹ 2.05 Cr*', possession: 'Under construction',
      about: 'Homes beside the Eastern Express Highway with views of the creek and the Godrej green belt, close to the upcoming Metro.',
      config: [['2 BHK', '700–850 sq.ft.'], ['3 BHK', '1,000–1,200 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Vistas Tower 1', 'Mangrove View Wing'],
      images: [P + 'godrej-vistas-vikhroli.webp']
    },
    {
      id: 'godrej-ascend', dev: 'Godrej', name: 'Godrej Ascend', area: 'Thane West', region: 'Thane Luxury Corridor',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '680–1,100 sq.ft.', price: '₹ 1.35 Cr*', possession: 'Under construction',
      about: 'A tower with sky-level amenities and open vistas over Thane, minutes from the Ghodbunder Road corridor.',
      config: [['2 BHK', '680–820 sq.ft.'], ['3 BHK', '950–1,100 sq.ft.']],
      rera: RERA_PENDING,
      towers: ['Ascend Tower 1', 'Tower 2'],
      images: [P + 'godrej-ascend-thane.webp']
    }
  ];

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const devLabel = (k) => (DEVELOPERS.find((d) => d.key === k) || {}).label || k;
  const devShort = (k) => k;
  const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const state = { dev: 'All', loc: 'All', bhk: '' };

  /* ---------- Lenis Smooth Scroll ---------- */
  let lenis = null;
  if (window.Lenis && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  function scrollToEl(sel) {
    const el = $(sel);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -68, duration: 1.4 });
    else el.scrollIntoView({ behavior: 'smooth' });
  }
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const h = a.getAttribute('href');
      if (h && h.length > 1 && $(h)) { e.preventDefault(); scrollToEl(h); }
    });
  });

  /* ---------- Reveal Observer ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = (root = document) => $$('.reveal:not(.in)', root).forEach((el) => io.observe(el));

  /* ---------- Hero reel (Left-to-Right Auto-Gliding Marquee) ---------- */
  function reelCard(p) {
    return `
      <button class="hero-card" data-open="${p.id}" aria-label="Open ${esc(p.name)}">
        <img src="${p.images[0]}" alt="${esc(p.name)}" loading="eager" decoding="async" draggable="false" />
        <div class="hero-card-body">
          <span class="hero-card-pill">${devShort(p.dev)}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.area)}</p>
          <p class="hc-price">${p.price}</p>
        </div>
        <span class="hero-card-go">↗</span>
      </button>`;
  }
  function renderReel() {
    const html = PROJECTS.map(reelCard).join('');
    $('#reelTrack').innerHTML = html + html; // doubled for a seamless infinite loop
    $$('#reelTrack .hero-card').forEach((c, i) => { if (i >= PROJECTS.length) c.setAttribute('aria-hidden', 'true'), c.tabIndex = -1; });
  }

  /* ---------- Hero background switcher ---------- */
  const HERO_IDS = [
    'raymond-invictus',
    'kalpataru-parkcity',
    'dlf-westpark',
    'sheth-avalon',
    'lodha-bellevue',
    'rustomjee-urbania-thane',
    'piramal-vaikunth'
  ];

  function initHero() {
    const slides = HERO_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
    if (slides.length === 0) return;
    $('#heroSlides').innerHTML = slides.map((p) =>
      `<div class="hero-slide"><img src="${p.images[0]}" alt="${esc(p.name)}" decoding="async" /></div>`).join('');
    $('#heroBars').innerHTML = slides.map((p, i) =>
      `<button type="button" class="hero-bar" data-i="${i}" aria-label="Show ${esc(p.name)}"><span class="fill"></span></button>`).join('');
    const els = $$('#heroSlides .hero-slide');
    const bars = $$('#heroBars .hero-bar');
    let idx = -1, timer = null;

    function show(i) {
      idx = (i + slides.length) % slides.length;
      const p = slides[idx];
      els.forEach((e, k) => e.classList.toggle('active', k === idx));
      bars.forEach((b, k) => {
        b.classList.toggle('done', k < idx);
        b.classList.remove('active');
        if (k === idx) { void b.offsetWidth; b.classList.add('active'); }
      });
      $('#heroNowName').textContent = `${p.name} · ${devShort(p.dev)}`;
      $('#heroNowLoc').textContent = `${p.area} · from ${p.price}`;
      $('#heroNowBtn').setAttribute('data-open', p.id);
      clearTimeout(timer);
      timer = setTimeout(() => show(idx + 1), 4500);
    }
    $('#heroBars').addEventListener('click', (e) => {
      const b = e.target.closest('.hero-bar');
      if (b) show(Number(b.dataset.i));
    });
    show(0);
  }

  /* ---------- Partner strip ---------- */
  function renderPartners() {
    $('#partnerStrip').innerHTML = DEVELOPERS.map((d, i) => {
      const n = PROJECTS.filter((p) => p.dev === d.key).length;
      return `
        <button class="partner reveal ${state.dev === d.key ? 'active' : ''}" data-dev="${d.key}" style="--d:${(i % 5) * 60}ms" aria-pressed="${state.dev === d.key}">
          <img src="${d.logo}" alt="${esc(d.label)}" loading="lazy" />
          <span class="count">${n} ${n === 1 ? 'mandate' : 'mandates'}</span>
        </button>`;
    }).join('');
    observeReveals($('#partnerStrip'));
  }
  function syncPartners() {
    $$('#partnerStrip .partner').forEach((b) => {
      const on = b.dataset.dev === state.dev;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
  }

  /* ---------- Chips / Horizontal Scrollable Track ---------- */
  function chipHTML(key, label) {
    return `<button type="button" class="chip whitespace-nowrap shrink-0 ${state.dev === key ? 'active' : ''}" data-dev="${key}">${label}</button>`;
  }
  function renderChips() {
    const items = [['All', 'All Developers'], ...DEVELOPERS.map((d) => [d.key, d.label])];
    const html = items.map(([k, l]) => chipHTML(k, l)).join('');
    const hc = $('#heroChips'); if (hc) hc.innerHTML = html;
    $('#gridChips').innerHTML = html;
  }
  function syncChips() {
    $$('#heroChips .chip, #gridChips .chip').forEach((c) => c.classList.toggle('active', c.dataset.dev === state.dev));
    $$('.region-tab').forEach((b) => b.classList.toggle('active', b.dataset.loc === state.loc));
  }

  /* ---------- Selects ---------- */
  function renderSelects() {
    const regions = [...new Set(PROJECTS.map((p) => p.region))];
    const hl = $('#heroLocation');
    if (hl) {
      hl.innerHTML = `<option value="All">All Mumbai &amp; MMR</option>` +
        regions.map((r) => `<option value="${r}">${r}</option>`).join('');
    }
    const fp = $('#formProject');
    if (fp) {
      fp.innerHTML = `<option value="">Interested project</option>` +
        PROJECTS.map((p) => `<option value="${esc(p.name)}">${esc(p.name)} — ${devShort(p.dev)}</option>`).join('') +
        `<option value="Not sure yet">Not sure yet</option>`;
    }
  }

  /* ---------- Grid Matching ---------- */
  function matches(p) {
    if (state.dev !== 'All' && p.dev !== state.dev) return false;
    if (state.loc !== 'All') {
      if (state.loc === 'Thane Luxury Corridor') {
        if (p.region !== 'Thane Luxury Corridor' && p.region !== 'Thane & MMR') return false;
      } else if (p.region !== state.loc) {
        return false;
      }
    }
    if (state.bhk) {
      const n = Number(state.bhk);
      if (n >= 5 ? !p.bhk.some((b) => b >= 5) : !p.bhk.includes(n)) return false;
    }
    return true;
  }
  function waLink(text) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`; }

  /* ---------- Avenlo-Style Project Cards ---------- */
  function cardHTML(p, i) {
    return `
      <article class="res-card reveal" data-open="${p.id}" style="--d:${(i % 3) * 90}ms">
        <div class="res-img group">
          <img src="${p.images[0]}" alt="${esc(p.name)}, ${esc(p.area)}" loading="lazy" decoding="async" />
          <span class="dev-pill">${devLabel(p.dev)}</span>
          <span class="go" aria-hidden="true">↗</span>
        </div>
        <div class="mt-5">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-2xl font-medium tracking-tight text-[#111111]">${esc(p.name)}</h3>
            <p class="text-lg font-medium text-[#111111] whitespace-nowrap">${p.price}</p>
          </div>
          <p class="mt-1.5 text-sm text-[#6E6D68]">${esc(p.area)} &nbsp;•&nbsp; ${p.typology} &nbsp;•&nbsp; ${p.size}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <button type="button" class="mini-pill" data-open="${p.id}">Floor Plans &amp; Details</button>
            <a class="mini-pill" href="${waLink(`Hello, I'd like details on ${p.name} (${devLabel(p.dev)}), ${p.area}.`)}" target="_blank" rel="noopener" data-stop>WhatsApp Inquiry</a>
          </div>
        </div>
      </article>`;
  }

  function renderGrid() {
    const list = PROJECTS.filter(matches);
    $('#grid').innerHTML = list.map(cardHTML).join('');
    $('#emptyState').classList.toggle('hidden', list.length > 0);
    const countText = `${list.length} ${list.length === 1 ? 'mandate' : 'mandates'}` +
      (state.dev !== 'All' ? ` by ${devLabel(state.dev)}` : '') +
      (state.loc !== 'All' ? ` in ${state.loc}` : '');
    $('#resultCount').textContent = countText;
    observeReveals($('#grid'));
    if (lenis) lenis.resize();
  }

  function setDev(key, { scroll = false } = {}) {
    state.dev = state.dev === key && key !== 'All' ? 'All' : key;
    syncChips(); syncPartners(); renderGrid();
    if (scroll) scrollToEl('#residences');
  }

  /* ---------- Drawer ---------- */
  const drawer = $('#drawer');
  const overlay = $('#overlay');
  let current = null;
  let lastFocus = null;

  function setMain(src) { $('#dMain').src = src; $$('#dThumbs .thumb').forEach((t) => t.classList.toggle('active', t.dataset.src === src)); }

  function openDrawer(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    current = p;
    lastFocus = document.activeElement;
    $('#dMain').alt = p.name;
    $('#dThumbs').innerHTML = p.images.length > 1
      ? p.images.map((src) => `<button class="thumb" data-src="${src}" aria-label="View image"><img src="${src}" alt="" loading="lazy" /></button>`).join('')
      : '';
    setMain(p.images[0]);
    $('#dDev').textContent = devLabel(p.dev);
    $('#dTitle').textContent = p.name;
    $('#dArea').textContent = `${p.area}  •  ${p.typology}`;
    $('#dAbout').textContent = p.about;
    $('#dConfig').innerHTML = p.config.map(([a, b]) => `<div class="cfg-row"><span class="font-medium">${a}</span><span>${b}</span></div>`).join('');
    
    // Available Towers & Flagship Clusters breakdown
    const towersSection = $('#dTowersSection');
    const towersEl = $('#dTowers');
    if (towersSection && towersEl) {
      if (p.towers && p.towers.length > 0) {
        towersEl.innerHTML = p.towers.map(t => `<span class="px-3.5 py-1.5 rounded-full bg-[#ECEAE4] text-xs font-medium text-[#111111] border border-black/[0.04]">${esc(t)}</span>`).join('');
        towersSection.classList.remove('hidden');
      } else {
        towersSection.classList.add('hidden');
      }
    }

    $('#dPrice').textContent = p.price;
    $('#dPossession').textContent = p.possession;
    $('#dRera').textContent = p.rera;
    $('#dWhatsapp').href = waLink(`Hello, I'd like to enquire about ${p.name} (${devLabel(p.dev)}), ${p.area}. Please share availability and the cost sheet.`);
    $('#drawerStatus').textContent = '';
    $('#drawer .drawer-scroll').scrollTop = 0;

    drawer.classList.add('open'); overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false'); overlay.setAttribute('aria-hidden', 'false');
    if (lenis) lenis.stop(); else document.body.style.overflow = 'hidden';
    setTimeout(() => $('#drawerClose').focus(), 50);
  }

  function closeDrawer() {
    drawer.classList.remove('open'); overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true'); overlay.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start(); else document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* ---------- Leads Dispatch (Emails to brian.chang@credencefirstrealtors.in) ---------- */
  const LEAD_EMAIL = 'brian.chang@credencefirstrealtors.in';

  async function submitLead(payload, statusEl, btn) {
    const mobile = String(payload.mobile || '').replace(/\D/g, '').replace(/^91/, '');
    if (String(payload.fullName || '').trim().length < 2) { statusEl.textContent = 'Please add your name.'; return false; }
    if (!/^[6-9]\d{9}$/.test(mobile)) { statusEl.textContent = 'Please enter a valid 10-digit Indian mobile number.'; return false; }
    if (payload.optin === undefined && !payload.optInConsent && document.querySelector('#leadForm input[name="optin"]') && !document.querySelector('#leadForm input[name="optin"]').checked) {
      statusEl.textContent = 'Please accept the communication opt-in to continue.';
      return false;
    }
    btn.disabled = true; statusEl.textContent = 'Registering your enquiry…';
    const waFallback = waLink(`Hello, I'm ${payload.fullName} (+91${mobile}). I'm interested in ${payload.project || 'your Mumbai & Thane residences'}${payload.configuration ? ` (${payload.configuration})` : ''}. ${payload.inquiryType || ''}`.trim());
    const istTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 1. Dispatch email directly to brian.chang@credencefirstrealtors.in
    const emailPromise = fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `New Lead: ${payload.fullName} — ${payload.project || 'Credence First Realtors'}`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': payload.fullName,
        'Mobile Number': '+91 ' + mobile,
        'Project / Mandate': payload.project || 'Not Specified',
        'Typology': payload.configuration || 'Not Specified',
        'Inquiry Type': payload.inquiryType || 'General Consultation',
        'RERA Registration': payload.reraId || 'N/A',
        'Compliance Consent': 'Accepted (Call, SMS, RCS, WhatsApp, Email)',
        'Page URL': location.href,
        'Timestamp': istTime + ' (IST)'
      })
    }).catch(err => console.warn('Email notice:', err));

    // 2. Netlify Form submission
    const netlifyPromise = fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'homepage-leads',
        fullName: payload.fullName,
        mobile: '+91 ' + mobile,
        project: payload.project || '',
        configuration: payload.configuration || '',
        inquiryType: payload.inquiryType || ''
      }).toString()
    }).catch(() => {});

    // 3. Local Node server API (if active)
    const apiPromise = fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, mobile: '+91' + mobile, optInConsent: true, sourceUrl: location.href, submittedAt: new Date().toISOString() })
    }).then(r => r.json()).catch(() => null);

    try {
      await Promise.allSettled([emailPromise, netlifyPromise, apiPromise]);
      statusEl.textContent = '✓ Request registered and sent to advisory desk.';
      showThankYouModal({
        name: payload.fullName,
        mobile: '+91 ' + mobile,
        project: payload.project || 'Mumbai & Thane Residences',
        bhk: payload.configuration || 'Luxury Residence',
        waUrl: waFallback
      });
      return true;
    } catch (err) {
      statusEl.textContent = 'Request registered.';
      showThankYouModal({
        name: payload.fullName,
        mobile: '+91 ' + mobile,
        project: payload.project || 'Mumbai & Thane Residences',
        bhk: payload.configuration || 'Luxury Residence',
        waUrl: waFallback
      });
      return true;
    } finally { btn.disabled = false; }
  }

  /* ---------- Event Handlers ---------- */
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-stop]')) { e.stopPropagation(); return; }

    const regTab = e.target.closest('.region-tab');
    if (regTab) {
      state.loc = regTab.dataset.loc;
      $$('.region-tab').forEach((b) => b.classList.toggle('active', b.dataset.loc === state.loc));
      const hl = $('#heroLocation');
      if (hl) hl.value = state.loc;
      renderGrid();
      return;
    }

    const chip = e.target.closest('.chip');
    if (chip) { setDev(chip.dataset.dev === state.dev ? 'All' : chip.dataset.dev); return; }

    const partner = e.target.closest('.partner');
    if (partner) { setDev(partner.dataset.dev, { scroll: state.dev !== partner.dataset.dev }); return; }

    const thumb = e.target.closest('.thumb');
    if (thumb) { setMain(thumb.dataset.src); return; }

    const opener = e.target.closest('[data-open]');
    if (opener) { openDrawer(opener.dataset.open); return; }
  });

  overlay.addEventListener('click', closeDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });

  $('#heroLocation')?.addEventListener('change', (e) => {
    state.loc = e.target.value;
    $$('.region-tab').forEach((b) => b.classList.toggle('active', b.dataset.loc === state.loc));
    renderGrid();
  });
  $('#heroBhk')?.addEventListener('change', (e) => { state.bhk = e.target.value; renderGrid(); });
  $('#heroSearch')?.addEventListener('submit', (e) => { e.preventDefault(); scrollToEl('#residences'); });
  $('#resetFilters').addEventListener('click', () => {
    state.dev = 'All'; state.loc = 'All'; state.bhk = '';
    const _l = $('#heroLocation'), _b = $('#heroBhk'); if (_l) _l.value = 'All'; if (_b) _b.value = '';
    syncChips(); syncPartners(); renderGrid();
  });

  $('#leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const fd = Object.fromEntries(new FormData(f));
    fd.inquiryType = 'Private site visit';
    const ok = await submitLead(fd, $('#formStatus'), f.querySelector('button[type=submit]'));
    if (ok) f.reset();
  });

  $('#drawerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!current) return;
    const f = e.currentTarget;
    const fd = Object.fromEntries(new FormData(f));
    Object.assign(fd, { project: current.name, inquiryType: 'Brochure & Cost Sheet', reraId: current.rera.startsWith('P') ? current.rera : '' });
    const ok = await submitLead(fd, $('#drawerStatus'), f.querySelector('button[type=submit]'));
    if (ok) f.reset();
  });

  
  /* ---------- Thank You Modal Controller ---------- */
  const tyModal = $('#thankYouModal');
  const tyClientName = $('#tyClientName');
  const tyProject = $('#tyProject');
  const tyBhkBudget = $('#tyBhkBudget');
  const tyMobile = $('#tyMobile');
  const tyWaBtn = $('#tyWaBtn');
  const tyCloseBtnTop = $('#tyCloseBtnTop');
  const tyCloseBtnBottom = $('#tyCloseBtnBottom');

  function showThankYouModal(info) {
    if (tyClientName) tyClientName.textContent = info.name || 'Client';
    if (tyProject) tyProject.textContent = info.project || 'General Consultation';
    if (tyBhkBudget) tyBhkBudget.textContent = info.bhk || 'Not specified';
    if (tyMobile) tyMobile.textContent = info.mobile || '';
    if (tyWaBtn) tyWaBtn.href = info.waUrl || `https://wa.me/${WA_NUMBER}`;

    if (tyModal) {
      tyModal.classList.add('active');
      tyModal.setAttribute('aria-hidden', 'false');
    }
    if (lenis) lenis.stop(); else document.body.style.overflow = 'hidden';
  }

  function hideThankYouModal() {
    if (tyModal) {
      tyModal.classList.remove('active');
      tyModal.setAttribute('aria-hidden', 'true');
    }
    if (lenis) lenis.start(); else document.body.style.overflow = '';
  }

  if (tyCloseBtnTop) tyCloseBtnTop.addEventListener('click', hideThankYouModal);
  if (tyCloseBtnBottom) tyCloseBtnBottom.addEventListener('click', hideThankYouModal);
  if (tyModal) {
    tyModal.addEventListener('click', (e) => {
      if (e.target === tyModal) hideThankYouModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tyModal && tyModal.classList.contains('active')) hideThankYouModal();
  });

  /* ---------- Init ---------- */
  renderReel();
  initHero();
  renderChips();
  renderSelects();
  renderPartners();
  renderGrid();
  observeReveals();
})();
