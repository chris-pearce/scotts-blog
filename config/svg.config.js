module.exports = JSON.stringify({
  plugins: [
    { convertColors: { shorthex: false } },
    { removeAttrs: true },
    { removeDimensions: true },
    { removeViewBox: false },
  ],
});
