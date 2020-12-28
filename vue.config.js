/*
 * @Description: vue.config.js
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 11:32:56
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 14:55:01
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true, // warnnings: true会发出警告但不会影响serve或者build，error: true 会在页面上弹出错误
      error: true
    }
  },
  chainWebpack(config) {
    // 配置svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
