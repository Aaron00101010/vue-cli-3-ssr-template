const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash/merge')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'

const target = TARGET_NODE
  ? 'server'
  : 'client'

module.exports = {
  pages: {
    index: {
      entry: `./src/entry-${target}`,
      template: './public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    },
    index2: {
      entry: `./src/entry-${target}`,
      template: './public/index.html',
      filename: 'index2.html',
      title: 'Index2 Page'
    }
  },
  configureWebpack: () => ({
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    plugins: [
      TARGET_NODE
        ? new VueSSRServerPlugin()
        : new VueSSRClientPlugin()
    ],
    externals: TARGET_NODE ? nodeExternals({
      whitelist: /\.css$/
    }) : undefined,
    output: {
      libraryTarget: TARGET_NODE
        ? 'commonjs2'
        : undefined
    }
  }),
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          optimizeSSR: false
        })
      )
  },
  productionSourceMap: false
}
