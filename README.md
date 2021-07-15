# Dayjs with TypeScript sample

A simple Node.js project using Dayjs with TypeScript by importing from 'dayjs/esm' with updated type definitions.

## Why I modified the type definitions

The dayjs library contains a folder with a variant of dayjs that uses the ES module system ('esm'). I created a demo using this with javascript and all was running as expected.

But trying to use the same library with my esm based angular app failed; IMHO because the type definitions don't match the code. The code uses `export default ...`, but the tyoe definitions use `export = ...`.

So I changed the type definitions to `export default ...` too. That caused problems with the namespaces: I didn't find a way to enable using the default export and at the same time to use named exports.

I decided to prefer the default export over named exports and only put the defined type into the module `dayjs/esm`.

For the `duration` plugin I found no way to enable named exports for the plugin (as required by issue #1360) as this would require to put the Duration class into the same namespace, but this would collide with the way, all other plugin and dayjs itself are structured. So I added the types to the 'dayjs/esm' module as named export as it is done for all other plugins too.

For the `localeData` plugin all types go to the module 'dayjs/esm' and all interfaces and methods go to the namespace 'dayjs'

## Cli

Run this demo in the console with:

```bash
npm run start
```

Only a few plugins are used in this small demos.

Running the code in the demo directory requires the experimental flag for node to resolve the imports in dayjs/index.js:
```bash
node --experimental-specifier-resolution=node demo/index.js
```

## Tests

ts-jest is used as a test runner. Start tests with:

```bash
npm run test
```

The tests are using all plugins, but not all methods of the plugins.

Jest configuration file must have the extension mjs, otherwise jest cannot import the configruation in this esm environment.

Sequence of imports seem to be of importance - importing 'advancedFormat' before 'utc' will throw with 'error importing ...'.

## Configuration

**Import**

Import always from `dayjs/esm`.

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