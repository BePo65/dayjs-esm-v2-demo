# Dayjs with TypeScript sample

A simple Node.js project using Dayjs with TypeScript by importing from 'dayjs/esm' with updated type definitions.

## Cli

Run this demo in the console with:

```bash
npm run start
```

requires experimental flag for node to resolve the imports in dayjs/index.js:
```bash
node --experimental-specifier-resolution=node demo/index.js
```

## Tests

ts-jest is used as a test runner. Start tests with:

```bash
npm run test
```

Jest configuration file must have the extension mjs, otherwise jest cannot import the configruation in this esm environment.

Sequence of imports seem to be of importance - importing 'advancedFormat' before 'utc' will throw with 'error importing ...'.

## Configuration

**Import**

Import always from `dayjs/esm`.

**Attention** the type definition files in 'node_modules/dayjs/esm' are modified and will be reset on any `npm install`. So after any `npm install` they have to be copied from the source again.

**Entry in package.json**
```json
    {
      "type": "module"
    }
```

**Content of directory dayjs/esm**

Requires a new file named `package.json` in `dayjs/esm` with the following content:
```json
    {
      "main": "index.js",
      "name": "dayjs",
      "type": "module"
    }
```

**tsconfig.base.json**
```json
    {
      "compilerOptions": {
        "target": "ESNEXT",
        "module": "ESNext",
        "moduleResolution": "node"
      }
    }
```

**tsconfig.json**

This configuration is used by VScode. In VScode there is no configuration option to use different tsconfig.json for tests and runtime. So I created a special tsconfig for VScode,