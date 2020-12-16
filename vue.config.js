'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title || 'saas-admin'

const port = process.env.production || process.env.npm_config_port || 9527

module.exports = {
  publicPath: './',
  outputDir: 'systemMamagement',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      'cors-api': {
        target: 'http://192.168.158.53:8080',
        changeOrigin: true,
        pathRewrite: {
          'cors-api': ''
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // plugins: [
  //   new VueLoaderPlugin()
  // ],
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

  }
}
