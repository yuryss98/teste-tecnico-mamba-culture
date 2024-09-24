module.exports = {
  preset: 'ts-jest',
  rootDir: "./",
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  testEnvironment: 'node',
  testMatch: ["<rootDir>/test/**/*-e2e.spec.ts"],
};