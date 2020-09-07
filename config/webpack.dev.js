/**
 * webpack development mode settings
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    port: 8020, // setting port
  },

  mode: 'development',
});
