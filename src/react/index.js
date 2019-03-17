const jsRules = require('../javascript/rules');

module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: 'babel-eslint',
  rules: Object.assign({}, jsRules, {
    // Because Flow can infer default props based on which props are listed in `defaultProps` we disable forbudDefaultForRequired
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: 0
      }
    ],
    // We want to encourage destructuring, but in order to do this incrementally we'll onyl warng about it.
    // See https://github.com/yannickcr/eslint-plugin-react/issues/1731 for more info.
    'react/destructuring-assignment': ['warn', 'always'],

    'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id']
        },
        allowChildren: false
      }
    ],
    'react/no-did-mount-set-state': ['off']
  })
};
