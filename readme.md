# docusaurus-plugin-fix-react

Fixes the issue when npm package / exported Component uses React import, so webpack resolves it not from global node_modules/react but instead from package directory, which causes Hooks and other parts of React not working properly.

## Installation:
```bash
## NPM
npm i docusaurus-plugin-fix-react
## yarn
yarn add docusaurus-plugin-fix-react
## PNPM
pnpm add docusaurus-plugin-fix-react
```
## Add to your docusaurus.config.js:
```js
/** @type {import('@docusaurus/types').Config} */
const config = {
plugins: ["docusaurus-plugin-fix-react"],
// ... rest of the config
}
```
#### ~ or, alternatively:
```js
/** @type {import('@docusaurus/types').Config} */
const config = {
plugins: ["./node_modules/docusaurus-plugin-fix-react/index.js"],
// ... rest of the config
}
```

## If you use PNPM and @type errors appear this may help:
```bash
# add next line to your .npmrc file
node-linker=hoisted
```

<br>

## License
MIT © [Patryk Jaworski](https://github.com/gerwld)