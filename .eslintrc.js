module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['@getatomi/eslint-config'],
  globals: {
    graphql: true,
    React: true,
  },
  root: true,
  rules: {
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
