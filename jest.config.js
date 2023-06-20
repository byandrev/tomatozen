export default {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest/mocks/jest.setup.js"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  resetMocks: true,
};