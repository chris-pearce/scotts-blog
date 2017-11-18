const ifProd = process.env.NODE_ENV === 'production';
// const ifDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {
      flexbox: false,
      grid: false,
    },
    'postcss-csso': ifProd && {},
  },
};
