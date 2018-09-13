// config/config.default.js
const path = require('path');

module.exports = app => {
  const config = {};

  config.keys = 'hello box'

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'senmiao0',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  }
  
  // config.nextjs = {
  //   dir: '.',
  //   dev: false,
  //   staticMarkup: false,
  //   quiet: false,
  // };
  
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      // '.jsx': 'react',
    },
  };
  
  // config.reactssr = {
  //   doctype: '<!doctype html>',
  //   layout: path.join(app.baseDir, 'app/view/layout.js'),
  //   manifest: path.join(app.baseDir, 'config/manifest.json'),
  //   injectHeadRegex: /(<\/head>)/i,
  //   injectBodyRegex: /(<\/body>)/i,
  //   injectCss: true,
  //   injectJs: true,
  //   crossorigin: false,
  //   injectRes: [],
  //   mergeLocals: true,
  //   fallbackToClient: true, // fallback to client rendering if server render failed
  //   afterRender: (html, context) => { /* eslint no-unused-vars:off */
  //     return html;
  //   },
  // };

  return config
}
