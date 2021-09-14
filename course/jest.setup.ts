import '@jason0x43/jest-expect-message';
import '@wordpress/jest-puppeteer-axe';
import 'expect-puppeteer';
import '@testing-library/jest-dom';
import { readdirSync, readFileSync } from 'fs';
import 'jest-extended';
import 'html-validate/jest';
import { JSDOM } from 'jsdom';
import { join, basename, dirname } from 'path';
import { Browser, Page, Viewport } from 'puppeteer';
import { serverPortFile } from './jest.util';

const port = Number(readFileSync(serverPortFile, { encoding: 'utf8' }));

// -----------------------------------------------------------------------------
// Add helpers to the global object

global.projectRoot = join(__dirname, '..');

interface LoadPageOptions {
  viewport?: Viewport
}

global.loadPage = async function loadPage(options?: LoadPageOptions) {
  const page = await browser.newPage();
  if (options?.viewport) {
    await page.setViewport(options.viewport);
  }
  await page.goto(`http://localhost:${port}`);
  return page;
};

global.loadDoc = function loadDoc(): string {
  try {
    const file = toRealPath(join(projectRoot, 'src', 'index.html'));
    if (!file) {
      throw new Error('missing index.html');
    }
    const html = readFileSync(file, { encoding: 'utf8' });
    document.documentElement.innerHTML = html;
    return html;
  } catch (error) {
    throw new Error('src/index.html is missing or invalid');
  }
};

global.toRealPath = (filepath: string) => {
  const name = basename(filepath).toLowerCase();
  const lowername = name.toLowerCase();
  const dir = dirname(filepath);
  const match = readdirSync(dir).find(
    (entry) => entry.toLowerCase() === lowername
  );
  if (match) {
    return join(dir, match);
  }
  return;
};

declare global {
  let projectRoot: string;
  let browser: Browser;
  let jsdom: JSDOM;
  let toRealPath: (name: string) => string | undefined;
  let loadPage: (options?: LoadPageOptions) => Promise<Page>;
  let loadDoc: () => string;

  namespace NodeJS {
    interface Global {
      projectRoot: string;
      jsdom: JSDOM;
      toRealPath: (name: string) => string | undefined;
      loadPage: () => Promise<Page>;
      loadDoc: () => string;
    }
  }

  namespace jest {
    interface Matchers<R> {
      toPassAxeTests(): Promise<R>;
    }
  }
}
