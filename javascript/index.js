module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': ['off'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': ['off'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ]
  }
};
