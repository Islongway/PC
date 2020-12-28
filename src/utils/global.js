/*
 * @Description:全局注册,方法...
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 15:48:01
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 16:41:05
 */

export default {
  install(Vue) {
    const requireComponent = require.context(
      // 获取全局组件
      '@/components/global',
      true,
      /[a-z0-9]+\.(jsx?|vue)$/i
    )
    requireComponent.keys().forEach((fileName) => {
      // 注册Component
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name
      if (componentName) {
        Vue.component(
          componentName,
          componentConfig.default || componentConfig
        )
      }
    })

    const requireSvg = require.context(
      '@/assets/icons',
      true,
      /\.(svg|scss|css|less|sass)$/
    ) // 获取全部svg和fontClass
    requireSvg.keys().map(requireSvg) // 导入svg和获取全部svg和fontClass
  }
}
