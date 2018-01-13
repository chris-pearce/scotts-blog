module.exports = ({ babelrc }) => ({
  ...babelrc,
  presets: babelrc.presets.concat(['flow']),
});
