# Otovo eslint config

This repo contains a set highly opinionated linting rules (eslint-configs) for
Otovo projects. **Note:** Every configuration assumes you are using Prettier and
they specify relevant Prettier rules within the config.

## Installing

```
yarn add --dev @otovo/eslint-config-otovo

# or using npm:

npm install --save-dev @otovo/eslint-config-otovo
```

## Using

In your `.eslintrc` file you can specify which config you want to extend. The
default will extend everything (currently JavaScript, Flow, and React):

```json
// .eslintrc.json

{
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "extends": ["@otovo/eslint-config-otovo"]
}
```

To extend just a subset, specify which folder(s) you want to include. The
following example uses only JavaScript and Flow rules:

```json
// .eslintrc.json

{
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "extends": [
    "@otovo/eslint-config-otovo/javascript",
    "@otovo/eslint-config-otovo/flowtype"
  ]
}
```

## Publishing

This package is hosted on npm under @otovo/eslint-config-otovo namespace and is
published using the [`np`](https://github.com/sindresorhus/np) package.
