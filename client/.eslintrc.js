module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',  // Utilise cette extension uniquement
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  rules: {
    'react/jsx-no-duplicate-props': 'off',
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': [
      'warn',  // Utilise "warn" au lieu de "error" pour ne pas bloquer le build
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
  overrides: [
    {
      files: ['pages/api/**/*.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
