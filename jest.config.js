/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/*.spec.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
    collectCoverageFrom: [
      'src/**',
      '!**/index.ts',
      '!**/globalStyle.ts',
      '!**/__snapshots__/**',
      '!**/*.stories.tsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  };
  