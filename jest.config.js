/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  roots: ["<rootDir>/tests/"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};