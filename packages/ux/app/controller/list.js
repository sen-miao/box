const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    await this.ctx.render('layout.tpl', dataList);
  }
}

module.exports = ListController;