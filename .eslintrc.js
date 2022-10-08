module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // add this for lacking of babel config file under root
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],

  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-import-module-exports': 'off',
    // ... more overwrite if needed
    'react/jsx-filename-extension': 0,
    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.3/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['internals/**/*.js', 'server/**/*.js'] },
    ],
  },
};
