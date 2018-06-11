const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  public: resolveApp('public'),
  root: appDirectory,
  src: resolveApp('src'),
};
