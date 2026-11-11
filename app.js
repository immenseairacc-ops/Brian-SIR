/* Credence First Realtors — app.js */
(function () {
  'use strict';

  const WA_NUMBER = '917304971642';
  const P = './assets/projects/';
  const L = './assets/logos/';
  const RERA_PENDING = 'Shared with the cost sheet — verify on maharera.maharashtra.gov.in';

  const DEVELOPERS = [
    { key: 'Lodha',     label: 'Lodha',            logo: L + 'lodha-logo.svg' },
    { key: 'Godrej',    label: 'Godrej Properties', logo: L + 'godrej-logo.svg' },
    { key: 'Rustomjee', label: 'Rustomjee',        logo: L + 'rustomjee-logo.svg' },
    { key: 'DLF',       label: 'DLF',              logo: L + 'dlf-logo-dark.webp' },
    { key: 'Puraniks',  label: 'Puraniks',         logo: L + 'puraniks-logo.svg' }
  ];

  const PROJECTS = [
    {
      id: 'dlf-westpark', dev: 'DLF', name: 'The Westpark', area: 'Andheri West', region: 'Western Suburbs',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,350–2,400 sq.ft.', price: '₹ 5.90 Cr*', possession: 'Under construction',
      about: 'A landscaped residential address in Andheri West with a clubhouse, an eco deck and open greens, close to the Metro and the Link Road.',
      config: [['3 BHK', '1,350–1,700 sq.ft.'], ['4 BHK', '1,900–2,400 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'dlf-westpark-elevation.jpg', P + 'dlf-westpark-aerial.webp', P + 'dlf-westpark-club.webp', P + 'dlf-westpark-ecodeck.webp', P + 'dlf-westpark-interior.webp', P + 'dlf-westpark-lifestyle.webp']
    },
    {
      id: 'lodha-bellevue', dev: 'Lodha', name: 'Lodha Bellevue', area: 'Mahalaxmi, South Mumbai', region: 'South Mumbai',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,600–2,800 sq.ft.', price: '₹ 8.50 Cr*', possession: 'Under construction',
      about: 'Tall residences beside the Mahalaxmi racecourse, with deck amenities above the city and generous bedrooms facing the green.',
      config: [['3 BHK', '1,600–1,900 sq.ft.'], ['4 BHK', '2,200–2,800 sq.ft.']],
      rera: 'P51900046567 · P51900046594',
      images: [P + 'lodha-bellevue-hero.jpg', P + 'lodha-bellevue-landscape.jpg', P + 'lodha-bellevue-deck.webp', P + 'lodha-bellevue-bedroom.webp']
    },
    {
      id: 'rustomjee-crown', dev: 'Rustomjee', name: 'Rustomjee Crown', area: 'Prabhadevi, Central Mumbai', region: 'South Mumbai',
      bhk: [2, 3, 4], typology: '2, 3 & 4 BHK', size: '800–2,100 sq.ft.', price: '₹ 4.25 Cr*', possession: 'Ready to move',
      about: 'A signature Prabhadevi tower with a residents-only deck and well-planned homes close to the sea link and the business districts.',
      config: [['2 BHK', '800–950 sq.ft.'], ['3 BHK', '1,200–1,500 sq.ft.'], ['4 BHK', '1,800–2,100 sq.ft.']],
      rera: 'P51900003268 · P51900006367',
      images: [P + 'rustomjee-crown-tower.webp', P + 'rustomjee-crown-deck.webp', P + 'rustomjee-crown-living.webp', P + 'rustomjee-crown-hero.webp']
    },
    {
      id: 'puraniks-mirai', dev: 'Puraniks', name: 'Puraniks Mirai', area: 'Thane West', region: 'Thane & MMR',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '720–1,150 sq.ft.', price: '₹ 1.45 Cr*', possession: 'Under construction',
      about: 'A well-connected Thane tower from a developer known for sturdy, value-driven homes across the western Thane belt.',
      config: [['2 BHK', '720–860 sq.ft.'], ['3 BHK', '980–1,150 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'puraniks-mirai-site-actual.jpg']
    },
    {
      id: 'godrej-reserve', dev: 'Godrej', name: 'Godrej Reserve', area: 'Kandivali East', region: 'Western Suburbs',
      bhk: [3, 4], typology: '3 & 4 BHK', size: '1,100–1,900 sq.ft.', price: '₹ 3.10 Cr*', possession: 'Under construction',
      about: 'Large homes set among mature greenery on the Kandivali hills, with a wide clubhouse and trails inside the campus.',
      config: [['3 BHK', '1,100–1,400 sq.ft.'], ['4 BHK', '1,600–1,900 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'godrej-reserve-kandivali.webp']
    },
    {
      id: 'godrej-nirvaan', dev: 'Godrej', name: 'Godrej Nirvaan', area: 'Kalyan, MMR', region: 'Thane & MMR',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '650–1,050 sq.ft.', price: '₹ 85 L*', possession: 'Under construction',
      about: 'Calm, thoughtfully planned residences with open courtyards and everyday amenities, aimed at families wanting space within the MMR.',
      config: [['2 BHK', '650–780 sq.ft.'], ['3 BHK', '900–1,050 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'godrej-nirvaan-main.webp']
    },
    {
      id: 'lodha-altamount', dev: 'Lodha', name: 'Lodha Altamount', area: 'Altamount Road, South Mumbai', region: 'South Mumbai',
      bhk: [4, 5], typology: '4 & 5 BHK', size: '3,400–6,500 sq.ft.', price: '₹ 60 Cr*', possession: 'Ready to move',
      about: "An ultra-luxury residence on one of the country's most prestigious addresses, with a private elevator lobby and sweeping sea-facing views.",
      config: [['4 BHK', '3,400–4,200 sq.ft.'], ['5 BHK', '5,000–6,500 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'lodha-altamount-main.webp', P + 'lodha-seaface-balcony.webp']
    },
    {
      id: 'rustomjee-seasons', dev: 'Rustomjee', name: 'Rustomjee Seasons', area: 'Bandra East (BKC)', region: 'Western Suburbs',
      bhk: [2, 3, 4], typology: '2, 3 & 4 BHK', size: '850–2,000 sq.ft.', price: '₹ 3.75 Cr*', possession: 'Ready to move',
      about: 'A seasonal-themed courtyard community minutes from BKC, with homes designed around light and cross-ventilation.',
      config: [['2 BHK', '850–1,000 sq.ft.'], ['3 BHK', '1,250–1,550 sq.ft.'], ['4 BHK', '1,700–2,000 sq.ft.']],
      rera: 'P51800021028',
      images: [P + 'rustomjee-seasons-hero.webp', P + 'rustomjee-seasons-interior.webp']
    },
    {
      id: 'lodha-malabar', dev: 'Lodha', name: 'Lodha Malabar', area: 'Malabar Hill, South Mumbai', region: 'South Mumbai',
      bhk: [4, 5], typology: '4 & 5 BHK', size: '2,800–5,500 sq.ft.', price: '₹ 38 Cr*', possession: 'Under construction',
      about: 'Sky residences on Malabar Hill with sea and skyline views, a private podium garden and interiors finished to a hotel standard.',
      config: [['4 BHK', '2,800–3,600 sq.ft.'], ['5 BHK', '4,200–5,500 sq.ft.']],
      rera: 'P51900034949',
      images: [P + 'lodha-malabar-hero.jpg', P + 'lodha-malabar-elevation.jpg', P + 'lodha-malabar-interior.jpg']
    },
    {
      id: 'godrej-horizon', dev: 'Godrej', name: 'Godrej Horizon', area: 'Wadala, Central Mumbai', region: 'South Mumbai',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '650–1,150 sq.ft.', price: '₹ 2.20 Cr*', possession: 'Under construction',
      about: 'A Wadala tower within reach of the Metro, the Eastern Freeway and the Monorail, with a full podium of amenities.',
      config: [['2 BHK', '650–800 sq.ft.'], ['3 BHK', '950–1,150 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'godrej-horizon-wadala.jpg']
    },
    {
      id: 'rustomjee-urbania', dev: 'Rustomjee', name: 'Rustomjee Urbania', area: 'Majiwada, Thane', region: 'Thane & MMR',
      bhk: [1, 2, 3], typology: '1, 2 & 3 BHK', size: '450–1,100 sq.ft.', price: '₹ 1.10 Cr*', possession: 'Phased',
      about: 'A large Thane township with schools, retail and open spaces inside the master plan, on the doorstep of the Eastern Express Highway.',
      config: [['1 BHK', '450–520 sq.ft.'], ['2 BHK', '650–800 sq.ft.'], ['3 BHK', '900–1,100 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'rustomjee-urbania-thane.webp', P + 'rustomjee-lavie-thane.webp']
    },
    {
      id: 'godrej-vistas', dev: 'Godrej', name: 'Godrej Vistas', area: 'Vikhroli, Eastern Suburbs', region: 'Central Suburbs',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '700–1,200 sq.ft.', price: '₹ 2.05 Cr*', possession: 'Under construction',
      about: 'Homes beside the Eastern Express Highway with views of the creek and the Godrej green belt, close to the upcoming Metro.',
      config: [['2 BHK', '700–850 sq.ft.'], ['3 BHK', '1,000–1,200 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'godrej-vistas-vikhroli.webp']
    },
    {
      id: 'godrej-ascend', dev: 'Godrej', name: 'Godrej Ascend', area: 'Thane West', region: 'Thane & MMR',
      bhk: [2, 3], typology: '2 & 3 BHK', size: '680–1,100 sq.ft.', price: '₹ 1.35 Cr*', possession: 'Under construction',
      about: 'A tower with sky-level amenities and open vistas over Thane, minutes from the Ghodbunder Road corridor.',
      config: [['2 BHK', '680–820 sq.ft.'], ['3 BHK', '950–1,100 sq.ft.']],
      rera: RERA_PENDING,
      images: [P + 'godrej-ascend-thane.webp']
    }
  ];

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const devLabel = (k) => (DEVELOPERS.find((d) => d.key === k) || {}).label || k;
  const devShort = (k) => k; // pill text: Lodha / DLF / Rustomjee / Godrej / Puraniks
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const state = { dev: 'All', loc: 'All', bhk: '' };

  /* ---------- Lenis ---------- */
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
      if (h.length > 1 && $(h)) { e.preventDefault(); scrollToEl(h); }
    });
  });

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = (root = document) => $$('.reveal:not(.in)', root).forEach((el) => io.observe(el));

  /* ---------- Hero reel ---------- */
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
    $('#reelTrack').innerHTML = html + html; // doubled for a seamless -50% → 0 loop
    $$('#reelTrack .hero-card').forEach((c, i) => { if (i >= PROJECTS.length) c.setAttribute('aria-hidden', 'true'), c.tabIndex = -1; });
  }

  /* ---------- Hero background switcher ---------- */
  const HERO_IDS = ['dlf-westpark', 'lodha-bellevue', 'rustomjee-crown', 'puraniks-mirai', 'godrej-reserve'];
  function initHero() {
    const slides = HERO_IDS.map((id) => PROJECTS.find((p) => p.id === id));
    $('#heroSlides').innerHTML = slides.map((p) =>
      `<div class="hero-slide"><img src="${p.images[0]}" alt="" decoding="async" /></div>`).join('');
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
        <button class="partner reveal ${state.dev === d.key ? 'active' : ''}" data-dev="${d.key}" style="--d:${i * 70}ms" aria-pressed="${state.dev === d.key}">
          <img src="${d.logo}" alt="${esc(d.label)}" />
          <span class="count">${n} ${n === 1 ? 'project' : 'projects'}</span>
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

  /* ---------- Chips ---------- */
  function chipHTML(key, label) {
    return `<button type="button" class="chip ${state.dev === key ? 'active' : ''}" data-dev="${key}">${label}</button>`;
  }
  function renderChips() {
    const items = [['All', 'All Developers'], ...DEVELOPERS.map((d) => [d.key, d.key])];
    const html = items.map(([k, l]) => chipHTML(k, l)).join('');
    const hc = $('#heroChips'); if (hc) hc.innerHTML = html;
    $('#gridChips').innerHTML = html;
  }
  function syncChips() {
    $$('#heroChips .chip, #gridChips .chip').forEach((c) => c.classList.toggle('active', c.dataset.dev === state.dev));
  }

  /* ---------- Selects ---------- */
  function renderSelects() {
    const regions = [...new Set(PROJECTS.map((p) => p.region))];
    const hl = $('#heroLocation'); if (hl) hl.innerHTML = `<option value="All">All Mumbai</option>` + regions.map((r) => `<option>${r}</option>`).join('');
    $('#formProject').innerHTML = `<option value="">Interested project</option>` +
      PROJECTS.map((p) => `<option value="${esc(p.name)}">${esc(p.name)} — ${devShort(p.dev)}</option>`).join('') +
      `<option value="Not sure yet">Not sure yet</option>`;
  }

  /* ---------- Grid ---------- */
  function matches(p) {
    if (state.dev !== 'All' && p.dev !== state.dev) return false;
    if (state.loc !== 'All' && p.region !== state.loc) return false;
    if (state.bhk) {
      const n = Number(state.bhk);
      if (n >= 5 ? !p.bhk.some((b) => b >= 5) : !p.bhk.includes(n)) return false;
    }
    return true;
  }
  function waLink(text) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`; }

  function cardHTML(p, i) {
    return `
      <article class="res-card reveal" data-open="${p.id}" style="--d:${(i % 3) * 90}ms">
        <div class="res-img group">
          <img src="${p.images[0]}" alt="${esc(p.name)}, ${esc(p.area)}" loading="lazy" decoding="async" />
          <span class="dev-pill">${devShort(p.dev)}</span>
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
    $('#resultCount').textContent = `${list.length} ${list.length === 1 ? 'residence' : 'residences'}` + (state.dev !== 'All' ? ` by ${devLabel(state.dev)}` : '');
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

  /* ---------- Leads ---------- */
  async function submitLead(payload, statusEl, btn) {
    const mobile = String(payload.mobile || '').replace(/\D/g, '').replace(/^91/, '');
    if (String(payload.fullName || '').trim().length < 2) { statusEl.textContent = 'Please add your name.'; return false; }
    if (!/^[6-9]\d{9}$/.test(mobile)) { statusEl.textContent = 'Please enter a valid 10-digit Indian mobile number.'; return false; }
    if (payload.optin === undefined && !payload.optInConsent && document.querySelector('#leadForm input[name="optin"]') && !document.querySelector('#leadForm input[name="optin"]').checked) {
      statusEl.textContent = 'Please accept the communication opt-in to continue.';
      return false;
    }
    btn.disabled = true; statusEl.textContent = 'Sending…';
    const waFallback = waLink(`Hello, I'm ${payload.fullName} (+91${mobile}). I'm interested in ${payload.project || 'your Mumbai residences'}${payload.configuration ? ` (${payload.configuration})` : ''}. ${payload.inquiryType || ''}`.trim());
    try {
      const res = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, mobile: '+91' + mobile, optInConsent: true, sourceUrl: location.href, submittedAt: new Date().toISOString() })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not save');
      statusEl.textContent = 'Thank you. Opening WhatsApp so we can continue there.';
      window.open(data.whatsappRedirect, '_blank', 'noopener');
      return true;
    } catch (err) {
      statusEl.textContent = 'We could not reach the server, so we are opening WhatsApp directly.';
      window.open(waFallback, '_blank', 'noopener');
      return false;
    } finally { btn.disabled = false; }
  }

  /* ---------- Events ---------- */
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-stop]')) { e.stopPropagation(); return; }

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

  $('#heroLocation')?.addEventListener('change', (e) => { state.loc = e.target.value; renderGrid(); });
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

  /* ---------- Init ---------- */
  renderReel(); initHero(); renderChips(); renderSelects(); renderPartners(); renderGrid();
  observeReveals();
})();

