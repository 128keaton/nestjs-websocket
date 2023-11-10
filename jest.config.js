'use strict'

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/build/", "/node_modules/"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }]
  },
  transformIgnorePatterns: ['node_modules/(?!@fastify/)', 'node_modules/(?!@toad-cache/)'],
  testRegex: ".spec.ts$",
  collectCoverage: true,
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 70,
      lines: 70,
      statements: 85
    }
  }
};
