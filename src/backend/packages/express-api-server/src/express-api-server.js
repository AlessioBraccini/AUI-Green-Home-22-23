/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { defaultContainer, Clonable } = require('@nlpjs/core');
const ExpressApiApp = require('./express-api-app');

class ExpressApiServer extends Clonable {
  constructor(settings = {}, container = undefined) {
    super(
      {
        settings: {},
        container: settings.container || container || defaultContainer,
      },
      container
    );
    this.applySettings(this.settings, settings);
    this.registerDefault();
    if (!this.settings.tag) {
      this.settings.tag = 'api-server';
    }
    this.applySettings(
      this.settings,
      this.container.getConfiguration(this.settings.tag)
    );
    if (!this.settings.apiRoot) {
      this.settings.apiRoot = '/api';
    }
    this.plugins = [];
    this.routers = [];
  }

  registerDefault() {
    this.container.registerConfiguration(
      'api-server',
      { port: 3000, serveBot: false },
      false
    );
  }

  isStarted() {
    return this.app !== undefined;
  }

  newRouter() {
    return ExpressApiApp.newRouter();
  }

  start(input = {}) {
    let result = null;
    const port = input.port || this.settings.port;
    const expressApp = new ExpressApiApp(
      this.settings,
      this.plugins,
      this.routers
    );
    this.app = expressApp.initialize();

    if (port && port > 0) {
      result = this.app.listen(port, () => {
        const logger = this.container.get('logger');
        logger.info(`${this.settings.tag} listening on port ${port}!`);
      });
    }
    return result !== null;
  }
}

module.exports = ExpressApiServer;
