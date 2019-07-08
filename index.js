module.exports = {
  extends: [
    "./javascript",
    "./prettier",
    "./prettier-react/",
    "./prettier-flowtype/"
  ].map(require.resolve)
};
