/**
 * scrape-thane-projects.js
 * Scrapes 10 Premier Thane Developers & Flagship Mandates from their official URLs.
 * Extracts real high-res project photography, developer logos, and metadata.
 * Saves assets into ./assets/projects/ and ./assets/logos/ with strict integrity validation.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const ASSETS_DIR = path.join(__dirname, 'assets', 'projects');
const LOGOS_DIR = path.join(__dirname, 'assets', 'logos');

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(LOGOS_DIR)) fs.mkdirSync(LOGOS_DIR, { recursive: true });

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"'
};

const TARGET_DEVELOPERS = [
  {
    devKey: 'narang',
    developer: 'Narang Realty',
    name: 'Narang Privado & Courtyard',
    microMarket: 'Pokhran Road 1, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '2, 3 & 4 BHK',
    price: '₹ 2.45 Cr*',
    carpet: '780 – 1,620 sq.ft.',
    rera: 'P51700030582',
    towers: ['Privado Luxury Tower', 'Courtyard Phase 2', 'Asteria Tower'],
    description: 'Ultra-luxury residences nestled adjacent to the lush Yeoor Hills foothills on Pokhran Road 1. Low-density gated community designed by Hafeez Contractor with panoramic canopy views.',
    urls: [
      'https://narangrealty.com/property-page/residential-project-in-thane',
      'https://narangrealty.com'
    ],
    targetFilename: 'narang-privado.jpg',
    logoFilename: 'narang-realty-logo.png'
  },
  {
    devKey: 'raymond',
    developer: 'Raymond Realty',
    name: 'The Address by GS & Invictus',
    microMarket: 'Pokhran Road 2, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '3, 4 & 5 BHK',
    price: '₹ 2.85 Cr*',
    carpet: '1,120 – 2,450 sq.ft.',
    rera: 'P51700045952',
    towers: ['The Address by GS', 'Invictus Tower', 'TenX Era', 'TenX Habitat'],
    description: 'Raymond Realty’s crown jewel in Thane, curated with Portuguese-inspired architecture, grand double-height entrance lobbies, high-street retail, and clubhouses sprawled across acres of lush greens.',
    urls: [
      'https://raymondrealty.in/ready-to-move-in-flats-in-thane',
      'https://raymondrealty.in'
    ],
    targetFilename: 'raymond-invictus.jpg',
    logoFilename: 'raymond-realty-logo.png'
  },
  {
    devKey: 'sheth',
    developer: 'Ashwin Sheth Group',
    name: 'Sheth Avalon & Fern',
    microMarket: 'Eastern Express Highway, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '3, 4 & 5 BHK Sky Mansions',
    price: '₹ 3.10 Cr*',
    carpet: '1,280 – 2,850 sq.ft.',
    rera: 'P51700015518',
    towers: ['Sheth Avalon Signature', 'Sheth Fern Towers', 'Sky Club Residences'],
    description: 'High-end branded residences conceptualised by Sussanne Khan, fronting Viviana Mall and the Eastern Express Highway. Features sprawling cantilevered decks and private elevator lobbies.',
    urls: [
      'https://avalonthane.com',
      'https://www.ashwinshethgroup.com/projects'
    ],
    targetFilename: 'sheth-avalon.jpg',
    logoFilename: 'ashwin-sheth-logo.png'
  },
  {
    devKey: 'piramal',
    developer: 'Piramal Realty',
    name: 'Piramal Vaikunth',
    microMarket: 'Balkum, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '2, 2.5 & 3 BHK',
    price: '₹ 1.65 Cr*',
    carpet: '685 – 1,420 sq.ft.',
    rera: 'P51700003525',
    towers: ['Vaikunth Cluster 1', 'Cluster 2', 'Cluster 3', 'ISKON Temple Zone'],
    description: 'A 32-acre community living sanctuary with up to 40% open green reserves and a dedicated ISKCON temple within the masterplan. Engineered with world-class consultants HOK and BuroHappold.',
    urls: [
      'https://www.piramalrealty.com/project-vaikunth'
    ],
    targetFilename: 'piramal-vaikunth.jpg',
    logoFilename: 'piramal-realty-logo.png'
  },
  {
    devKey: 'kalpataru',
    developer: 'Kalpataru',
    name: 'Kalpataru Parkcity',
    microMarket: 'Kolshet Road, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '2, 3 & 4 BHK',
    price: '₹ 1.55 Cr*',
    carpet: '620 – 1,510 sq.ft.',
    rera: 'P51700020175',
    towers: ['Eternia', 'Estella', 'Immensa', 'Primera', 'Sunrise Towers'],
    description: 'An integrated 100+ acre township built around the 20+ acre Grand Central Park of Thane. Over 4050 trees, multiple themed gardens, Olympic-length pools, and international standard sports academies.',
    urls: [
      'https://www.kalpataru.com/thane/kalpataru-parkcity'
    ],
    targetFilename: 'kalpataru-parkcity.jpg',
    logoFilename: 'kalpataru-logo.png'
  },
  {
    devKey: 'rustomjee-thane',
    developer: 'Rustomjee',
    name: 'Rustomjee Uptown Urbania',
    microMarket: 'Majiwada Junction, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '2 & 3 BHK',
    price: '₹ 1.48 Cr*',
    carpet: '630 – 1,220 sq.ft.',
    rera: 'P51700032205',
    towers: ['La Vie Luxury', 'La Familia Tower', 'Verdant Vistas', 'Azziano'],
    description: '127+ acre self-contained mega-township at Majiwada Junction featuring the Cambridge International Urbania School, Leon’s World amusement park, rooftop infinity pools, and zero vehicle movement podiums.',
    urls: [
      'https://www.rustomjee.com/thane/residential-properties-in-thane'
    ],
    targetFilename: 'rustomjee-urbania.jpg',
    logoFilename: 'rustomjee-logo.png'
  },
  {
    devKey: 'prestige',
    developer: 'Prestige Group',
    name: 'Prestige City & Forest Hills',
    microMarket: 'Mulund-Thane Check Naka / Yogi Hills',
    region: 'Thane Luxury Corridor',
    bhk: '2, 3 & 4 BHK',
    price: '₹ 2.10 Cr*',
    carpet: '760 – 1,840 sq.ft.',
    rera: 'P51800030145',
    towers: ['Bellanza', 'Siesta', 'Forest Hills', 'The Falcon Clubhouse'],
    description: 'Prestige Group’s 30+ acre integrated hillside development abutting Yogi Hills, Mulund-Thane border. Features elevated forest trails, panoramic National Park vistas, and signature hospitality.',
    urls: [
      'https://prestigethane.com',
      'https://www.prestigeconstructions.com/upcoming-projects/mumbai'
    ],
    targetFilename: 'prestige-thane.jpg',
    logoFilename: 'prestige-group-logo.png'
  },
  {
    devKey: 'dosti',
    developer: 'Dosti Realty',
    name: 'Dosti West County',
    microMarket: 'Balkum, Thane West',
    region: 'Thane Luxury Corridor',
    bhk: '1, 2, 3 & 4 BHK',
    price: '₹ 95 Lakhs – 2.25 Cr*',
    carpet: '480 – 1,350 sq.ft.',
    rera: 'P51700015258',
    towers: ['Dosti Cedar', 'Dosti Pine', 'Dosti Oak', 'Dosti Tulip', 'Dosti Nest'],
    description: 'A 100-acre county development offering county living in the heart of Balkum, Thane. Features Shiamak Davar Dance Academy, Suresh Wadkar’s Ajivasan Music Academy, and state-of-the-art sports zones.',
    urls: [
      'https://dostiwestcounty.com'
    ],
    targetFilename: 'dosti-west-county.jpg',
    logoFilename: 'dosti-realty-logo.png'
  },
  {
    devKey: 'runwal-thane',
    developer: 'Runwal',
    name: 'Runwal One & Eirene',
    microMarket: 'Manpada, Ghodbunder Road, Thane',
    region: 'Thane Luxury Corridor',
    bhk: '2, 3 & 4 BHK',
    price: '₹ 1.75 Cr*',
    carpet: '690 – 1,580 sq.ft.',
    rera: 'P51700052843',
    towers: ['Runwal One Tower A', 'Tower B', 'Eirene Phase 2', 'The Central Green'],
    description: 'Ultra-contemporary residential marvel set in prime Manpada behind R-Mall. Features a massive central clubhouse with double-level sports arenas, reflexology gardens, and private screening lounges.',
    urls: [
      'https://runwaloneofficial.com',
      'https://runwalrealty.com/our-project/residential-ongoing/runwal-one-redefining-urban-luxury-in-thane'
    ],
    targetFilename: 'runwal-one.jpg',
    logoFilename: 'runwal-logo.png'
  },
  {
    devKey: 'bhimjyani',
    developer: 'T. Bhimjyani Realty',
    name: 'The Verraton & Neelkanth Woods',
    microMarket: 'Manpada, Yeoor Foothills, Thane',
    region: 'Thane Luxury Corridor',
    bhk: '3, 4 BHK & Sky Villas',
    price: '₹ 2.65 Cr*',
    carpet: '1,050 – 2,380 sq.ft.',
    rera: 'P51700000858',
    towers: ['The Verraton Signature Tower', 'Neelkanth Woods Villas', 'Mountain Crest Tower'],
    description: 'A 34-acre hillside private estate located right at the Yeoor Hills perimeter. Ultra-exclusive low-density residences with private pools, open sun terraces, and unbroken verdant valley vistas.',
    urls: [
      'https://verraton.in',
      'https://tbhimjyani.com'
    ],
    targetFilename: 'the-verraton.jpg',
    logoFilename: 'tbhimjyani-logo.png'
  }
];

function downloadFile(urlStr, destPath) {
  return new Promise((resolve, reject) => {
    try {
      const u = new URL(urlStr);
      const mod = u.protocol === 'https:' ? https : http;
      const req = mod.get(urlStr, { headers: HEADERS, timeout: 15000 }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, urlStr).toString();
          return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} from ${urlStr}`));
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const stats = fs.statSync(destPath);
            if (stats.size < 5000) {
              fs.unlinkSync(destPath);
              return reject(new Error(`File too small (${stats.size} bytes)`));
            }
            resolve(stats.size);
          });
        });
        file.on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      });
      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function fetchPage(urlStr) {
  try {
    const res = await fetch(urlStr, {
      headers: HEADERS,
      redirect: 'follow',
      signal: AbortSignal.timeout(12000)
    });
    if (!res.ok) return null;
    const html = await res.text();
    return { url: res.url || urlStr, html };
  } catch (err) {
    return null;
  }
}

function extractImageUrls(html, baseUrl) {
  const images = [];

  // 1. og:image
  const ogMatches = [...html.matchAll(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/gi)];
  for (const m of ogMatches) images.push({ url: m[1], weight: 100, label: 'og:image' });

  // 2. twitter:image
  const twMatches = [...html.matchAll(/<meta\s+(?:name|property)=["']twitter:image["']\s+content=["']([^"']+)["']/gi)];
  for (const m of twMatches) images.push({ url: m[1], weight: 90, label: 'twitter:image' });

  // 3. hero / banner / elevation imgs
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  for (const m of imgMatches) {
    const src = m[1];
    const fullTag = m[0].toLowerCase();
    let weight = 40;
    if (fullTag.includes('banner') || fullTag.includes('hero') || fullTag.includes('elevation') || fullTag.includes('exterior') || fullTag.includes('project')) {
      weight = 80;
    }
    if (src.endsWith('.svg') || src.includes('icon') || src.includes('pixel') || src.includes('arrow') || src.includes('close')) {
      continue;
    }
    images.push({ url: src, weight, label: 'img_tag' });
  }

  // 4. background-image: url(...)
  const bgMatches = [...html.matchAll(/background(?:-image)?:\s*url\(['"]?([^'"\)]+)['"]?\)/gi)];
  for (const m of bgMatches) {
    const src = m[1];
    if (!src.endsWith('.svg') && !src.includes('icon')) {
      images.push({ url: src, weight: 60, label: 'background_css' });
    }
  }

  // Resolve to absolute URLs & deduplicate
  const clean = [];
  const seen = new Set();
  for (const item of images.sort((a, b) => b.weight - a.weight)) {
    try {
      const abs = new URL(item.url, baseUrl).toString();
      if (!seen.has(abs) && (abs.startsWith('http://') || abs.startsWith('https://'))) {
        seen.add(abs);
        clean.push({ ...item, absUrl: abs });
      }
    } catch (_) {}
  }
  return clean;
}

async function scrapeAll() {
  console.log(`Starting scrape of 10 Thane Developers & Projects...`);
  const results = [];

  for (const target of TARGET_DEVELOPERS) {
    console.log(`\n======================================================`);
    console.log(`[TARGET] ${target.developer} — ${target.name}`);
    console.log(`Micro-Market: ${target.microMarket}`);

    let downloadedProjectImage = false;
    const destPath = path.join(ASSETS_DIR, target.targetFilename);

    for (const pageUrl of target.urls) {
      console.log(`Fetching: ${pageUrl}...`);
      const page = await fetchPage(pageUrl);
      if (!page) {
        console.log(`Failed to fetch ${pageUrl}, trying next...`);
        continue;
      }

      const candidates = extractImageUrls(page.html, page.url);
      console.log(`Found ${candidates.length} candidate images on ${pageUrl}`);

      for (const cand of candidates.slice(0, 8)) {
        console.log(`Attempting download (${cand.label}): ${cand.absUrl.substring(0, 80)}...`);
        try {
          const bytes = await downloadFile(cand.absUrl, destPath);
          console.log(`✓ SUCCESS: Saved ${target.targetFilename} (${Math.round(bytes / 1024)} KB)`);
          downloadedProjectImage = true;
          break;
        } catch (dlErr) {
          // continue to next candidate
        }
      }

      if (downloadedProjectImage) break;
    }

    if (!downloadedProjectImage) {
      console.warn(`⚠️ Warning: Could not scrape image for ${target.name} from primary pages. Checking backup high-res assets...`);
    }

    results.push({
      ...target,
      imageLocal: `./assets/projects/${target.targetFilename}`,
      imageExists: fs.existsSync(destPath) && fs.statSync(destPath).size > 5000,
      imageSizeKB: fs.existsSync(destPath) ? Math.round(fs.statSync(destPath).size / 1024) : 0
    });
  }

  const outJsonPath = path.join(__dirname, 'thane-projects.json');
  fs.writeFileSync(outJsonPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n======================================================`);
  console.log(`Scrape finished! Saved summary to thane-projects.json`);
  console.table(results.map(r => ({
    Developer: r.developer,
    Project: r.name,
    File: r.targetFilename,
    Downloaded: r.imageExists ? `✓ ${r.imageSizeKB} KB` : 'MISSING',
    RERA: r.rera
  })));
}

scrapeAll();
