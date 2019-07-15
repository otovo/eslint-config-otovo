# Otovo eslint config

This repo contains sets of opinionated linting rules (eslint-configs) for Otovo projects.

## Installing

```sh
yarn add --dev @otovo/eslint-config-otovo

# or using npm:

npm install --save-dev @otovo/eslint-config-otovo
```

## Quick start

Depending on your project, add one of these to your `.eslintrc` file:

- **Pure JS:** `@otovo/eslint-config-otovo`
- **React without types:** `@otovo/eslint-config-otovo/react-recommended`
- **React with Flow:** `@otovo/eslint-config-otovo/react-flow-recommended`
- **React with Typescript:** `@otovo/eslint-config-otovo/react-typescript-recommended`

Example `.eslintrc` using **React with Flow**:

```json
{
  "env": { "browser": true },
  "extends": ["@otovo/eslint-config-otovo/react-flow-recommended"]
}
```

## Slow start

`eslint-config-otovo` consists of several small sets of rules:

- javascript
- react
- flowtype
- typescript
- prettier
- prettier-react
- prettier-flowtype
- prettier-typescript

For a given project, you will probably need several of them. For example: If you want to add `javascript` and `react`, `prettier` and `prettier-react` to your repo, add the following to your `.eslintrc` config:

```json
{
  "env": {
    "browser": true
  },
  "extends": [
    "@otovo/eslint-config-otovo/javascript",
    "@otovo/eslint-config-otovo/react",
    "@otovo/eslint-config-otovo/prettier",
    "@otovo/eslint-config-otovo/prettier-react"
  ]
}
```

### Recommended sets

Instead of adding rule sets one by one, you can use one of four collections:

- `@otovo/eslint-config-otovo`
- `@otovo/eslint-config-otovo/react-recommended`
- `@otovo/eslint-config-otovo/react-flow-recommended`
- `@otovo/eslint-config-otovo/react-typescript-recommended`

You use collections in the same way you add rule sets: By adding them to the `extends` array in `.eslintrc`:

```json
{
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "extends": ["@otovo/eslint-config-otovo/react-flow-recommended"]
}
```

The following is a overview of the rules each collection includes:

|                     | `default` | `react-recommended` | `react-flow-recommended` | `react-typescript-recommended` |
| ------------------- | --------- | ------------------- | ------------------------ | ------------------------------ |
| javascript          | ✅        | ✅                  | ✅                       | ✅                             |
| prettier            | ✅        | ✅                  | ✅                       | ✅                             |
| react               |           | ✅                  | ✅                       | ✅                             |
| prettier-react      |           | ✅                  | ✅                       | ✅                             |
| flowtype            |           |                     | ✅                       |                                |
| prettier-flowtype   |           |                     | ✅                       |                                |
| typescript          |           |                     |                          | ✅                             |
| prettier-typescript |           |                     |                          | ✅                             |

## Publishing

This package is hosted on npm under @otovo/eslint-config-otovo namespace and is published using [`np`](https://github.com/sindresorhus/np). To publish a new version, run

```sh
yarn run release
```

Doing so guides you through publishing to npm, pushing tags to Github and create release notes.
