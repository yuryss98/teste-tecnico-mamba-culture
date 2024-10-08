module.exports = {
  preset: 'ts-jest',
  rootDir: "./",
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/domain/repository/**'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  coverageReporters: ["json", "html", "text"],
  testEnvironment: 'node',
  testMatch: ["<rootDir>/test/**/*.spec.ts"],
};