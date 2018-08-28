module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'prettier'],
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
