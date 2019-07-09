/**
 * Plain JS-projects uses airbnb-base and React-projects uses airbnb.
 *
 * To avoid duplicating these rules they are imported from here.
 */

module.exports = {
  'no-underscore-dangle': ['off'],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'import/prefer-default-export': ['off'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    },
  ],
};
