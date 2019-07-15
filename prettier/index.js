module.exports = {
  extends: [
    'plugin:prettier/recommended', // enables-eslint-plugin-prettier, sets the prettier/prettier rule to "error", extends eslint-config-prettier so that we can set prettier options in .prettierrc
  ],
  // "plugins": [
  //   "prettier", enabled by the plugin;prettier/recommneded extension
  // ],
  parser: 'babel-eslint',
};
