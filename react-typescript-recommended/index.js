module.exports = {
  extends: [
    '../javascript',
    '../react',
    '../typescript',
    '../prettier',
    '../prettier-react/',
    '../prettier-typescript/',
  ].map(require.resolve),
};
