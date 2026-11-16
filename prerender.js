// Renders the page into dist/index.html so crawlers that don't run JS see the content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';

const { render } = await import('./.ssr/entry-server.js');
const file = 'dist/index.html';
const placeholder = '<div id="root"></div>';
const html = readFileSync(file, 'utf8');
if (!html.includes(placeholder)) throw new Error(`${placeholder} not found in ${file}`);

const body = render();
if (!body.includes('Featured')) throw new Error('prerendered page is missing its content');

writeFileSync(file, html.replace(placeholder, `<div id="root">${body}</div>`));
rmSync('.ssr', { recursive: true });
