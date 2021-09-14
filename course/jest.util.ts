import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { Browser } from 'puppeteer';

export const runDir = join(tmpdir(), 'jest_puppeteer_global');
export const wsEndpointFile = join(runDir, 'wsEndpoint');
export const serverPortFile = join(runDir, 'serverPort');

declare global {
  namespace NodeJS {
    interface Global {
      __BROWSER_GLOBAL__: Browser;
      __SERVER_GLOBAL__: Server;
    }
  }
}
