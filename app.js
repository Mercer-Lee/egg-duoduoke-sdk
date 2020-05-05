/*
 * @Author: mercer
 * @Email: 13928932429@163.com
 * @Date: 2020-04-30 21:33:06
 * @LastEditTime: 2020-05-05 10:49:21
 * @Description:
 */
'use strict';

const PddClient = require('./lib/duoduoke');

module.exports = app => {

  app.duoduoke = new PddClient({
    clientId: '4a457c9ccbb74bbf9f8d31943b6e0ce3',
    clientSecret: '9b212f3587d5e02825959a235f2fa81a3f89cf2a',
  });
};
