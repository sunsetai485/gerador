const http = require('http');
const fs = require('fs');
const path = require('path');

const ENV_KEYS = [
  'JWT_SECRET', 'TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_PHONE_NUMBER',
  'EVOLUTION_API_BASE_URL', 'EVOLUTION_API_INSTANCE', 'EVOLUTION_API_TOKEN',
  'WHATSAPP_WEBHOOK_TOKEN', 'TELEGRAM_BOT_TOKEN', 'TELEGRAM_WEBHOOK_URL',
  'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'FROM_EMAIL', 'FROM_NAME',
  'N8N_BASE_URL', 'VAPID_PUBLIC_KEY', 'VAPID_PRIVATE_KEY', 'N8N_API_KEY',
  'N8N_DEFAULT_WORKFLOW_ID', 'MOBIZON_API_KEY', 'MOBIZON_API_DOMAIN',
  'VAPI_API_KEY', 'VAPI_ASSISTANT_ID', 'VAPI_PHONE_NUMBER_ID', 'AUTHENTICATION_API_KEY',
  'EVOLUTION_API_URL', 'EVOLUTION_API_BASE_URL', 'N8N_WEBHOOK_URL_YOUSHOP',
  'N8N_RECOVERY_WEBHOOK_URL', 'CLOUDFLARE_R2_ACCOUNT_ID', 'CLOUDFLARE_R2_ACCESS_KEY_ID',
  'CLOUDFLARE_R2_SECRET_ACCESS_KEY', 'CLOUDFLARE_R2_BUCKET_NAME', 'CLOUDFLARE_R2_PUBLIC_URL',
  'N8N_PRESCRIPTION_WEBHOOK_URL', 'N8N_CERTIFICATE_WEBHOOK_URL', 'N8N_RECEIPT_WEBHOOK_URL',
  'N8N_REFERRAL_WEBHOOK_URL', 'N8N_BUDGET_WEBHOOK_URL', 'FOCUSNFE_TOKEN', 'FOCUSNFE_ENVIRONMENT'
];

function getEnvTokens() {
  const o = {};
  ENV_KEYS.forEach(k => { o[k] = process.env[k] || '__PREENCHER__'; });
  return o;
}

const PORT = parseInt(process.env.PORT || '80', 10);
const htmlPath = path.join(__dirname, 'gerador-easypanel.html');

const server = http.createServer((req, res) => {
  if (req.url === '/env-tokens-exemplo.txt') {
    const p = path.join(__dirname, 'env-tokens-exemplo.txt');
    res.setHeader('Content-Type', 'text/plain');
    fs.createReadStream(p).pipe(res);
    return;
  }
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
      return;
    }
    const tokens = getEnvTokens();
    const injected = html.replace('__POOH_ENV_JSON__', JSON.stringify(tokens));
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(injected);
  });
});

server.listen(PORT, () => {
  console.log('Pooh Deploy listening on port', PORT);
});
