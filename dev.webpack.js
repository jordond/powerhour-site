var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var assetPath = path.resolve('./static/dist');
var htmlIndex = path.resolve('./src/client/index.html');
var entryJS = path.resolve('./src/client/index.js');

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: {
    vendor: ['angular', 'angular-ui-router'],
    app: entryJS
  },
  output: {
    path: assetPath,
    filename: '[name]-[hash:6].js',
    chunkFilename: '[name]-[chunkhash:6].js',
    publicPath: 'dist/'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.tpl.html$/,
      loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src/client')) + '/!html-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "ng-annotate!babel"
    }, {
      test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
      loader: 'file?name=fonts/[name].[ext]'
    }, {
      test: /\.png$/,
      loader: 'url-loader?limit=100000&mimetype=image/png'
    }, {
      test: /\.jpg$/,
      loader: 'file-loader'
    }]
  },
  progress: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlIndex,
      inject: 'body'
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash:6].js',
      minChunks: Infinity
    }),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:' + process.env.PORT,
      open: false
    })
  ],
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.json', '.css']
  }
};