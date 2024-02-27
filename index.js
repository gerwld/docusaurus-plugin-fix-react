import path from "path"

module.exports = () => ({
  name: 'docusaurus-plugin-fix-react',
  configureWebpack() {
    return {
      resolve: {
        alias: {
          // assuming root node_modules is in same directory as plugin (node_modules)
          react: path.resolve('/node_modules/react'),
        },
      },
    };
  },
})