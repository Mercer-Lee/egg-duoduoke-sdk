/*
 * @Author: mercer
 * @Email: 13928932429@163.com
 * @Date: 2020-05-01 11:16:32
 * @LastEditTime: 2020-05-04 23:20:55
 * @Description:
 */
'use strict';

const util = require('./util');
const request = require('./network');

function PddClient(options) {

  if (!(this instanceof PddClient)) {
    return new PddClient(options);
  }

  options = options || {};

  if (!options.clientId || !options.clientSecret) {
    throw new Error('clientId and clientSecret are necessary!');
  }

  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret;
  this.endpoint = options.endpoint || 'http://gw-api.pinduoduo.com/api/router';
}

PddClient.prototype.request = function(params) {
  return new Promise((resolve, reject) => {
    const err = util.checkRequired(params, 'type');
    if (err) {
      reject(err);
    }
    const args = {
      client_id: this.clientId,
      timestamp: this.timestamp(),
      data_type: 'JSON',
      version: 'V1',
    };

    for (const key in params) {
      if (typeof params[key] === 'object') {
        args[key] = JSON.stringify(params[key]);
      } else {
        args[key] = params[key];
      }
    }

    args.sign = this.sign(args);
    request.post(this.endpoint, args).then(res => resolve(res)).catch(err => reject(err));
  });
};

PddClient.prototype.invoke = function(method, params, responseNameCandidate) {
  params.type = method;

  return this.request(params).then(res => {
    if (responseNameCandidate && responseNameCandidate.length > 0) {
      let retResult;
      for (let i = 0; i < responseNameCandidate.length; i++) {
        const name = responseNameCandidate[i];
        retResult = res[name];
        if (retResult !== undefined) {
          res = retResult;
          break;
        }
      }
      return res;
    }
  });
};

PddClient.prototype.execute = function(apiname, params) {
  return this.invoke(apiname, params, util.getApiResponseNameCandidate(apiname));
};

PddClient.prototype.sign = function(params) {
  const sorted = Object.keys(params).sort();
  let basestring = this.clientSecret;
  for (let i = 0, l = sorted.length; i < l; i++) {
    const k = sorted[i];
    basestring += k + params[k];
  }
  basestring += this.clientSecret;
  return util.md5(basestring).toUpperCase();
};

PddClient.prototype.timestamp = function() {
  return parseInt((new Date()).getTime() / 1000);
};

module.exports = PddClient;
