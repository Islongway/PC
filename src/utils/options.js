/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 17:27:53
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 17:31:39
 */
const RESOLUTION = 1920
const width = document.documentElement.clientWidth

// 将px根据分辨率不同换算成等比的px
export function pxAuto(value) {
  return (width / RESOLUTION) * value
}
