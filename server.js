/**
 * server.js
 * Lightweight Node.js / Express-compatible server for the Mumbai MMR
 * Authorized Channel Partner Web Portal.
 *
 * Features:
 * - Serves static portal files (index.html, styles.css, app.js, ./assets/projects/*, ./assets/logos/*)
 * - POST /api/leads: Validates Indian +91 mobile numbers, logs inquiries to leads.json,
 *   and returns a pre-formatted WhatsApp Business API redirect payload.
 * - GET /api/leads: Returns stored client mandate inquiries for CRM / webhook sync.
 * - Zero-dependency native HTTP fallback if Express is not installed in node_modules.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4500;
const LEADS_FILE = path.join(__dirname, 'leads.json');
const WHATSAPP_DESK_NUMBER = process.env.WHATSAPP_NUMBER || '917304971642';

// Initialize leads.json if not present
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf8');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

function readLeads() {
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (_) {
    return [];
  }
}

function saveLeadRecord(lead) {
  const leads = readLeads();
  const entry = {
    id: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    fullName: String(lead.fullName || '').trim(),
    mobile: String(lead.mobile || '').trim(),
    project: String(lead.project || 'Mumbai residences').trim(),
    configuration: String(lead.configuration || 'Not Specified').trim(),
    inquiryType: String(lead.inquiryType || 'Floor Plans & Cost Sheet').trim(),
    reraId: String(lead.reraId || '').trim(),
    sourceUrl: String(lead.sourceUrl || '').trim(),
    submittedAt: lead.submittedAt || new Date().toISOString(),
    webhookStatus: 'READY_FOR_WHATSAPP_DISPATCH'
  };
  leads.unshift(entry);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');
  return entry;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // API Route: POST /api/leads
  if (pathname === '/api/leads' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
      if (body.length > 1e6) req.socket.destroy();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const cleanedMobile = String(data.mobile || '').replace(/\D/g, '').replace(/^91/, '');

        if (!data.fullName || String(data.fullName).trim().length < 2) {
          return sendJson(res, 400, { ok: false, error: 'Full Name is required.' });
        }
        if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
          return sendJson(res, 400, { ok: false, error: 'Valid +91 10-digit Indian mobile number is required.' });
        }

        const saved = saveLeadRecord({
          ...data,
          mobile: `+91${cleanedMobile}`
        });

        const waText = encodeURIComponent(
          `*New enquiry*\nClient: ${saved.fullName}\nMobile: ${saved.mobile}\nProject: ${saved.project}\nConfiguration: ${saved.configuration}\nRequirement: ${saved.inquiryType}`
        );

        console.log(`[LEAD CAPTURED] ${saved.id} | ${saved.fullName} (${saved.mobile}) -> ${saved.project}`);

        return sendJson(res, 201, {
          ok: true,
          lead: saved,
          whatsappRedirect: `https://wa.me/${WHATSAPP_DESK_NUMBER}?text=${waText}`
        });
      } catch (err) {
        return sendJson(res, 400, { ok: false, error: 'Malformed JSON payload.' });
      }
    });
    return;
  }

  // API Route: GET /api/leads
  if (pathname === '/api/leads' && req.method === 'GET') {
    const leads = readLeads();
    return sendJson(res, 200, {
      ok: true,
      count: leads.length,
      leads
    });
  }

  // Static File Server
  let relativePath = pathname === '/' ? '/index.html' : pathname;
  const safePath = path.normalize(relativePath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);
  if (!filePath.startsWith(__dirname)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`====================================================================`);
  console.log(` CREDENCE FIRST REALTORS - MUMBAI CHANNEL PARTNER`);
  console.log(` Server active at: http://localhost:${PORT}`);
  console.log(` Leads API active: POST http://localhost:${PORT}/api/leads -> leads.json`);
  console.log(`====================================================================`);
});


