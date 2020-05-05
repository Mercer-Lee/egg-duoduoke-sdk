/*
 * @Author: mercer
 * @Email: 13928932429@163.com
 * @Date: 2020-04-29 20:32:34
 * @LastEditTime: 2020-05-05 11:01:58
 * @Description:
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const commodityQuery = await this.app.duoduoke.execute('pdd.ddk.goods.basic.info.get', {
      goods_id_list: [ 15587188 ],
    });
    this.ctx.body = commodityQuery;
  }
}

module.exports = HomeController;
