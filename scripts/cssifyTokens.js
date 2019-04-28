const fs = require('fs-extra');
const { execSync } = require('child_process');
const paths = require('../paths');

/**
 * This script makes the tokens and their utils which are written in JS
 * compatible with the `postcss-simple-vars` and `postcss-functions` PostCSS
 * plugins.
 *
 * Using Babel, we first compile everything in `src/tokens` to CommonJS modules
 * to be compatible with the PostCSS processor.
 *
 * We then create a flat "tokens" object to be compatible with the
 * `postcss-simple-vars` plugin as it only works with one level objects.
 * However, thanks to the `flattenObj` function, the nested structure isn't lost
 * as the compiled CSS tokens use a dash ("-") to represent the levels, e.g.:
 *
 * Input:
 *
 *  color = {
 *    primary: {
 *      default: '#444',
 *      light: '#666',
 *      dark: '#000',
 *    }
 *  }
 *
 * Output:
 *
 *  color-primary-default
 *  color-primary-light
 *  color-primary-dark
 *
 * We also export the `pxToEm` and `pxToRem` utils so they're available for use
 * in our CSS. This is what we use the `postcss-functions` PostCSS plugin for.
 */

process.on('unhandledRejection', err => {
  throw err;
});

const srcPath = `${paths.src}/tokens`;
const buildPath = `${paths.build}/tokens`;
const fileBlacklist = { index: 'index', config: 'config', utils: 'utils' };

/**
 * A generic util that flattens a deep object into a one level object with it’s
 * path as the key name.
 *
 * @credit https://gist.github.com/penguinboy/762197#gistcomment-2083577
 */
const flattenObj = obj =>
  Object.assign(
    {},
    ...(function _flatten(child, path = []) {
      return [].concat(
        ...Object.keys(child).map(key =>
          typeof child[key] === 'object'
            ? _flatten(child[key], path.concat([key]))
            : { [path.concat([key]).join('-')]: child[key] }
        )
      );
    })(obj)
  );

// Clean the build folder
fs.emptyDirSync(buildPath);

// Compile with Babel
execSync(
  `npx babel --no-babelrc ${srcPath} --out-dir ${buildPath} --presets=@babel/preset-env`,
  { stdio: 'inherit' }
);

// Create a flat tokens object
const createTokensObj = () => {
  // For each compiled file that is generated in the previous "Compile with
  // Babel" step we strip out the '.js' extension and any files that *aren't*
  // token files to then be used as the object's keys.
  const objKeys = fs
    .readdirSync(buildPath)
    .map(item => item.replace(/\.[^/.]+$/, ''))
    .filter(item => item !== fileBlacklist[item]);

  return flattenObj(
    Object.assign(
      {},
      ...objKeys.map(item => ({
        // eslint-disable-next-line import/no-dynamic-require, global-require
        [item]: flattenObj(require(`${buildPath}/${item}`).default),
      }))
    )
  );
};

module.exports = {
  tokens: createTokensObj(),
  // eslint-disable-next-line import/no-dynamic-require, global-require
  utils: require(`${buildPath}/utils`),
};
