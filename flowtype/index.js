module.exports = {
  extends: ['plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  // "plugins": [
  //   "flowtype", added by plugin:flowtype/recommended
  // ],
  rules: {
    'react/forbid-prop-types': ['warn']
  }
};
