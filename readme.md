# docosaurus-plugin-fix-react

Fixes the issue when npm package / exported Component uses React import, so webpack resolves it not from global node_modules/react but instead from package directory, which causes Hooks and other parts of React not working properly.

## Installation:
```bash
## NPM
npm i docosaurus-plugin-fix-react
## yarn
yarn add docosaurus-plugin-fix-react
## PNPM
pnpm add docosaurus-plugin-fix-react
```
## Then, add to your docusaurus.config.js:
```js
/** @type {import('@docusaurus/types').Config} */
const config = {
plugins: ["docusaurus-plugin-fix-react"],
// ... rest of config
}
```

## License
MIT © [Patryk Jaworski](https://github.com/gerwld)
