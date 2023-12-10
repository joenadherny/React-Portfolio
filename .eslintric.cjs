module.exports = {
    parser: '@babel/eslint-parser',
    extends: ['airbnb', 'plugin:react/recommended'],
    plugins: ['react-hooks', 'jsx-a11y'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/label-has-associated-control': [2, {
        assert: 'either',
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  