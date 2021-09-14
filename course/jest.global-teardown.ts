import { unlinkSync } from 'fs';
import { serverPortFile, wsEndpointFile } from './jest.util';

export default async function teardown() {
  try {
    await global.__BROWSER_GLOBAL__.close();
  } catch (error) {
    // ignore
  }
  unlinkSync(wsEndpointFile);

  try {
    global.__SERVER_GLOBAL__.close();
  } catch (error) {
    // ignore
  }
  unlinkSync(serverPortFile);
}
