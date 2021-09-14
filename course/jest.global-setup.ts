import express from 'express';
import { mkdirSync, writeFileSync } from 'fs';
import { Server } from 'http';
import { AddressInfo } from 'net';
import { join } from 'path';
import puppeteer from 'puppeteer';
import { runDir, serverPortFile, wsEndpointFile } from './jest.util';

export default async function setup() {
  try {
    mkdirSync(runDir);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  const browser = await puppeteer.launch();
  global.__BROWSER_GLOBAL__ = browser;
  writeFileSync(wsEndpointFile, browser.wsEndpoint());

  // The express app is the main server
  const srcDir = join(__dirname, '..', 'src');
  const app = express();
  app.use(express.static(srcDir));
  const server = await new Promise<Server>((resolve) => {
    const svr = app.listen(() => {
      resolve(svr);
    });
  });
  global.__SERVER_GLOBAL__ = server;
  const port = (server.address() as AddressInfo).port;
  writeFileSync(serverPortFile, `${port}`);
}
