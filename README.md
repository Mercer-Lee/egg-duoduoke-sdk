# egg-duoduoke-sdk

拼多多平台多多客的sdk，核心内容为[everywill](https://github.com/everywill/duoduoke-node-sdk)提供，由作者封装为Egg插件供有需要的Egg开发者安装使用。


### 依赖的 egg 版本

| egg-duoduoke-sdk 版本 | egg 1.x |
| --------------------- | ------- |
| 1.x                   | 😁      |
| 0.x                   | ❌      |


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
