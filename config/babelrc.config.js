module.exports = ({ babelrc }) => ({
  ...babelrc,
  presets: babelrc.presets.concat(['react', 'flow']),
});
