module.exports = {
  extends: [
    '../javascript',
    '../react',
    '../prettier',
    '../prettier-react/',
  ].map(require.resolve),
};
