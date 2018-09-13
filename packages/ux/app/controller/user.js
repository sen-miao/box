module.exports = (app) => {
  class UserController extends app.Controller {
    async index() {
      this.ctx.body = 'sss'
    }

    async new() {
      this.ctx.body = 'new'
    }

    async show() {
      this.ctx.body = 'show'
    }

    async edit() {
      this.ctx.body = 'edit'
    }

    async create() {
      const { ctx } = this;
      const createRule = {
        name: { type: 'string' },
        password: { type: 'string' },
      };
      // 校验参数
      ctx.validate(createRule);

      await ctx.model.User.create(ctx.request.body);
      ctx.body = {
        code: 0,
        message: 'success',
      };
    }

    async update() {

    }

    async destroy() {
      
    }
  }
  return UserController;
};
