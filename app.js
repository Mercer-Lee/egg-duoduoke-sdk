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

  app.duoduoke = new PddClient(app.config.duoduoke);
};
