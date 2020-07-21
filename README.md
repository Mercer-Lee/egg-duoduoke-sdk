# egg-duoduoke-sdk

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-duoduoke-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-duoduoke-sdk
[travis-image]: https://img.shields.io/travis/CaanDoll/egg-duoduoke-sdk.svg?style=flat-square
[travis-url]: https://travis-ci.org/CaanDoll/egg-duoduoke-sdk
[codecov-image]: https://img.shields.io/codecov/c/github/CaanDoll/egg-duoduoke-sdk.svg?style=flat-square
[codecov-url]: https://codecov.io/github/CaanDoll/egg-duoduoke-sdk?branch=master
[david-image]: https://img.shields.io/david/CaanDoll/egg-duoduoke-sdk.svg?style=flat-square
[david-url]: https://david-dm.org/CaanDoll/egg-duoduoke-sdk
[snyk-image]: https://snyk.io/test/npm/egg-duoduoke-sdk/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-duoduoke-sdk
[download-image]: https://img.shields.io/npm/dm/egg-duoduoke-sdk.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-duoduoke-sdk

拼多多平台多多客的 sdk，核心内容为[everywill](https://github.com/everywill/duoduoke-node-sdk)提供，由作者封装为 Egg 插件供有需要的 Egg 开发者安装使用。

### 依赖的 egg 版本

| egg-duoduoke-sdk 版本 | egg 2.x |
| --------------------- | ------- |
| 2.x                   | 😁      |
| 1.x                   | ❌      |

## 安装

```bash
$ npm i egg-duoduoke-sdk --save
```

## 开启插件

```js
// config/plugin.js
exports.duoduokeSdk = {
  enable: true,
  package: "egg-duoduoke-sdk",
};
```

```js
// config/config.default.js
config.duoduoke = {
  clientId: "your clientId",
  clientSecret: "your clientSecret",
};

// config/config.prod.js
config.duoduoke = {
  clientId: "your clientId",
  clientSecret: "your clientSecret",
  endpoint: "https://gw-api.pinduoduo.com/api/router",
};
```

## 使用

```javascript
const { goods_id_list } = ctx.request.body;
const commodityQuery = await ctx.duoduoke.execute(
  "pdd.ddk.goods.basic.info.get",
  {
    goods_id_list,
  }
);
```

## License

[MIT](LICENSE)
