module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    '@emotion',
    'react-hooks',
  ],
  rules: {
    'dot-notation': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'linebreak-style': 'off',
    'no-nested-ternary': 'error',
    'no-lonely-if': 'error',
    'no-else-return': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    semi: ['error', 'always'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    // TODO: Re-enable and address the following rules
    'jsx-quotes': 'off',
    'no-unused-expressions': 'off',
    'operator-linebreak': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-tag-location': 'off',
    'arrow-body-style': 'off',
    'no-unneeded-ternary': 'off',
    'implicit-arrow-linebreak': 'off',
    quotes: 'off',
    'react/no-unused-prop-types': 'off',
    'nonblock-statement-body-position': 'off',
    curly: 'off',
    'no-throw-literal': 'off',
    'no-plusplus': 'off',
    'no-unsafe-optional-chaining': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'jsx-a11y': {
      components: {
        CaptchaButton: 'button',
        VerifyButton: 'button',
        StyledButton: 'button',
        SVG: 'svg',
      },
    },
  },
};
