module.exports = {
  extends: [
    "../javascript",
    "../react",
    "../flowtype",
    "../prettier",
    "../prettier-react/",
    "../prettier-flowtype/"
  ].map(require.resolve)
};
