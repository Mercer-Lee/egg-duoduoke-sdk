'use strict';

const mock = require('egg-mock');

describe('test/duoduoke-sdk.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/duoduoke-sdk-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, duoduokeSdk')
      .expect(200);
  });
});
