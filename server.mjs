import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 4173);

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const clean = decoded === '/' ? '/index.html' : decoded;
  const target = path.normalize(path.join(root, clean));

  if (!target.startsWith(root)) {
    return path.join(root, 'index.html');
  }

  return target;
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);

    if (url.pathname === '/qr.svg') {
      const data = url.searchParams.get('data') ?? '';

      if (!data) {
        response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Missing QR data');
        return;
      }

      const svg = await QRCode.toString(data, {
        type: 'svg',
        margin: 1,
        width: 240,
        color: {
          dark: '#12121F',
          light: '#FFFFFF',
        },
      });

      response.writeHead(200, {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'no-store',
      });
      response.end(svg);
      return;
    }

    const requestedPath = safePath(request.url ?? '/');
    const filePath = existsSync(requestedPath) ? requestedPath : path.join(root, 'index.html');
    const ext = path.extname(filePath);
    const body = await readFile(filePath);

    const noCache = ['.html', '.js', '.css', '.webmanifest'].includes(ext) || filePath.endsWith('sw.js');

    response.writeHead(200, {
      'Content-Type': types.get(ext) ?? 'application/octet-stream',
      'Cache-Control': noCache ? 'no-cache' : 'public, max-age=3600',
    });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(error instanceof Error ? error.message : 'Server error');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Alliance Journaliere PWA: http://localhost:${port}`);
});
