const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  devtool: 'inline-source-map',  
  entry: "./js/game.js",
  output: {
    path: path.join(process.cwd(), 'js'),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
      publicPath: '/',
    },
  },
};
