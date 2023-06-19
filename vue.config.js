const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack');
var webpack = require('webpack');
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser')
      }
    },
    
  }
};