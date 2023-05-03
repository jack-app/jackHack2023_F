const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToPhaser = path.join(__dirname, '/node_modules/phaser');
const phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /phaser\.js$/,
        use: {
          loader: 'expose-loader',
          options: {
            exposes: 'Phaser',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser,
    },
  },
};
