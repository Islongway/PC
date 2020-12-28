/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 11:32:56
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 11:36:38
 */
module.exports = {
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true, // warnnings: true会发出警告但不会影响serve或者build，error: true 会在页面上弹出错误
      error: true
    }
  }
}
