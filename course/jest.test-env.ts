import JSDOMEnvironment from 'jest-environment-jsdom';
import { readFileSync } from 'fs';
import { AbortablePromise, FetchOptions, ResourceLoader } from 'jsdom';
import { join } from 'path';
import puppeteer from 'puppeteer';
import { wsEndpointFile } from './jest.util';

/**
 * A resource loader that loads requests for files at http://localhost from the
 * project src/ directory.
 */
class FileResourceLoader extends ResourceLoader {
  fetch(url: string, options: FetchOptions) {
    if (url.startsWith('http://localhost/')) {
      const u = new URL(url);
      const path = join(__dirname, '..', 'src', u.pathname);
      const data = readFileSync(path);
      const p: AbortablePromise<Buffer> = Promise.resolve(
        data
      ) as AbortablePromise<Buffer>;
      p.abort = () => undefined;
      return p;
    }
    return super.fetch(url, options);
  }
}

type JSDOMConstructorParams = ConstructorParameters<typeof JSDOMEnvironment>;

/**
 * A custom JSDOM environment. The only difference from Jest's standard JSDOM
 * environment is that this one uses a custom resource loader.
 */
export default class JSDOMEnvironmentWithResources extends JSDOMEnvironment {
  constructor(...[config, options]: JSDOMConstructorParams) {
    super(
      {
        ...config,
        testEnvironmentOptions: {
          ...config.testEnvironmentOptions,
          resources: new FileResourceLoader(),
        },
      },
      options
    );
  }

  /**
   * Along with JSDOM, also setup Puppeteer
   */
  async setup() {
    await super.setup();

    const wsEndpoint = readFileSync(wsEndpointFile, 'utf8');
    if (!wsEndpoint) {
      throw new Error('Puppeteer endpoint not found');
    }

    this.global.browser = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });

    this.global.jsdom = this.dom!;
  }
}
