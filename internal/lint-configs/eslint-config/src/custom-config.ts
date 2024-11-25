import type { Linter } from 'eslint';

const customConfig: Linter.Config[] = [
  {
    files: ['internal/**/**', 'scripts/**/**'],
    rules: {
      'no-console': 'off',
    },
  },
];

export { customConfig };
