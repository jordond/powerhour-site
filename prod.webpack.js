var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var projectRoot = path.resolve(__dirname);
var assetPath = path.resolve('./static/dist');
var htmlIndex = path.resolve('./src/client/index.html');
var entryJS = path.resolve('./src/client/index.js');

module.exports = {
  devtool: 'source-map',
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
      loader: "ng-annotate?add=false!babel"
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
    new CleanPlugin([assetPath], { root: projectRoot, verbose: true }),

    new HtmlWebpackPlugin({
      template: htmlIndex,
      inject: 'body'
    }),

    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash:6].js',
      minChunks: Infinity
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.json', '.css']
  }
};