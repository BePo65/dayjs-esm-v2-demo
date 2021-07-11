/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
      useESM: true,
      diagnostics: {
        ignoreCodes: [151001]
      }
    },
  },
  testMatch: [
    "<rootDir>/test/**/*.spec.ts"
  ],
  "reporters": [
    "default"
  ]
};
