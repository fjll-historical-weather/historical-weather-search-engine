const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// console.log('webpack.config.js process.env: ', process.env)
console.log('webpack.config.js process.env.NODE_ENV: ', process.env.NODE_ENV)

module.exports = env => ({
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: { 
    path: path.resolve(__dirname, './build'), 
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
                ]
            }
          }
        },
        {
            test:/\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
    ]
  },
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
        '/search': 'http://localhost:3000'
    }
  },
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, './index.html')
    }),
  ]
 
});
