module.exports = {
  extends: ['./javascript', './flowtype', './react'].map(require.resolve)
};
