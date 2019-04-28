const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  build: resolveApp('build'),
  public: resolveApp('public'),
  root: appDirectory,
  scripts: resolveApp('scripts'),
  src: resolveApp('src'),
};
