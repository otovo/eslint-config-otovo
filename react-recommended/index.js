module.exports = {
  extends: ['../javascript', '../react', '../flowtype', '../prettier'].map(
    require.resolve
  )
};
