module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.ts'],
  globals: {
    'ts-jest': {
      diagnostics: { ignoreCodes: [2355] },
    },
  },
};
