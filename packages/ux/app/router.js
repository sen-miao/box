module.exports = app => {
  app.get('/', 'home.index');
  app.get('/list', 'list.index');
  app.post('/api/auth/login', 'auth.login');
  app.post('/api/auth/register', 'auth.register');
  app.resources('users', '/api/users', app.controller.user);
};
