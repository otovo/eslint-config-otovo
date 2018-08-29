module.exports = {
  extends: ['../javascript', '../react', '../flowtype', '../prettier'].map(
    require.resolve
  )
};

// module.exports = {
//   env: {
//     browser: true,
//     es6: true
//   },
//   extends: [
//     // JS
//     'airbnb',
//     'plugin:import/errors',
//     'plugin:import/warnings',

//     // React
//     'plugin:react/recommended', // aslint adds plugins but this propbably does something extra?
//     'plugin:jsx-a11y/recommended',

//     // Flow
//     'plugin:flowtype/recommended',

//     // Prettier
//     'plugin:prettier/recommended', // enables-eslint-plugin-prettier, sets the prettier/prettier rule to "error", extends eslint-config-prettier so that we can set prettier options in .prettierrc
//     'prettier/flowtype',
//     'prettier/react'
//   ],
//   // "plugins": [
//   //   "flowtype", added by plugin:flowtype/recommended
//   //   "react", added with Airbnb and plugin:react/recommended
//   //   "prettier", enabled by the plugin;prettier/recommneded extension
//   // ],
//   parser: 'babel-eslint',
//   rules: {
//     'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
//     'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],
//     'no-underscore-dangle': ['off'],
//     'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
//     'react/forbid-prop-types': ['off'],
//     'import/prefer-default-export': ['off'],
//     'react/sort-comp': [
//       1,
//       {
//         order: [
//           'type-annotations',
//           'static-methods',
//           'lifecycle',
//           'everything-else',
//           'render'
//         ]
//       }
//     ],
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['to'],
//         aspects: ['noHref', 'invalidHref', 'preferButton']
//       }
//     ],
//     'prefer-destructuring': [
//       'error',
//       {
//         VariableDeclarator: {
//           array: true,
//           object: true
//         },
//         AssignmentExpression: {
//           array: false,
//           object: false
//         }
//       },
//       {
//         enforceForRenamedProperties: false
//       }
//     ],
//     'jsx-a11y/label-has-for': [
//       2,
//       {
//         required: {
//           every: ['id']
//         },
//         allowChildren: false
//       }
//     ],
//     'react/no-did-mount-set-state': ['off']
//   }
// };
