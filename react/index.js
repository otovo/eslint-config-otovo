module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parser: 'babel-eslint',
  // "plugins": [
  //   "react", added both with Airbnb config and plugin:react/recommended
  // ],
  rules: {
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
  }
};
