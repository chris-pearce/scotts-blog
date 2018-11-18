const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  config: resolveApp('config'),
  public: resolveApp('public'),
  root: appDirectory,
  src: resolveApp('src'),
};
