const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const moment = require('moment')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


module.exports = {

  externals: {
    paths: PATHS
  },

  entry: {
    app: `${PATHS.src}/js/index.js`,
    login: `${PATHS.src}/js/login.js`,
    signUp: `${PATHS.src}/js/sign-up.js`,
    searchRoom: `${PATHS.src}/js/search-room.js`,
    roomDetails: `${PATHS.src}/js/room-details.js`,
    uiKit: `${PATHS.src}/js/ui-kit.js`
  },

  output: {
    // filename: `${PATHS.assets}js/[name].[hash].js`,
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.pug$/,
      loader: 'pug-html-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.styl$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'stylus-loader',
          options: {
            indentedSyntax: true,
            sourceMap: true
           }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },

  resolve: {
    alias: {
      '~': PATHS.src,
      modules: path.join(__dirname, "node_modules"),
    }
  },

  plugins: [

    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),

    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}css/[name].[hash].css`,
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new CopyWebpackPlugin([
      { from: '**/img/*',
        to: `${PATHS.assets}img`,
        flatten: true
      },

      { from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: `${PATHS.assets}fonts`
      },

      { from: `${PATHS.src}/static`,
        to: ''
      },
    ]),

    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      moment : 'moment'
    })

  ],
}
