const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = [
  'index',
  'nav-box',
  'room-details',
  'search-room',
  'sign-in',
  'sign-up',
  'ui-kit',
];

module.exports = {
  externals: {
    paths: PATHS,
    moment: 'moment',
  },

  entry: {
    'index': `${PAGES_DIR}index/index.js`,
    'nav-box': `${PAGES_DIR}nav-box/nav-box.js`,
    'room-details': `${PAGES_DIR}room-details/room-details.js`,
    'search-room': `${PAGES_DIR}search-room/search-room.js`,
    'sign-in': `${PAGES_DIR}sign-in/sign-in.js`,
    'sign-up': `${PAGES_DIR}sign-up/sign-up.js`,
    'ui-kit': `${PAGES_DIR}ui-kit/ui-kit.js`,
  },

  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf|svg|jpg|gif|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } },
          },
          {
            loader: 'stylus-loader',
            options: {
              indentedSyntax: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      '~': PATHS.src,
      modules: path.join(__dirname, 'node_modules'),
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new CopyWebpackPlugin([
      { from: '**/img/*', to: `${PATHS.assets}img`, flatten: true },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/${PATHS.assets}favicons`, to: `${PATHS.assets}favicons` },
    ]),

    ...PAGES.map(
      (page, index) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}/${page}.pug`,
          filename: `./${page}.html`,
          chunks: [`${page}`, 'vendors'],
        })
    ),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
