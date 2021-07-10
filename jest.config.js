
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!babel.config.js',
    '!**/config/**',
    '!**/src/Pages/**',
    '!**/src/index.js',
    '!**/src/App.js',
    '!**/src/AuthGuard.js',
    '!**/src/serviceWorker.js'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: [
    '<rootDir>/src/setupTests.js',
  ],
  // setupFilesAfterEnv: [
  //   '<rootDir>/tests/setupAfterEnv.js',
  // ],
  testMatch: [
    '**/?(*.)+(spec|test).[j]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/coverage/'
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
  },
};