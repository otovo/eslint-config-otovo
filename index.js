module.exports = {
  extends: [
    './javascript/index.js',
    './flowtype/index.js',
    './react/index.js'
  ].map(require.resolve)
};
