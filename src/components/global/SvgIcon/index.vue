<!--
 * @Description: 自定义svg全局组件
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 15:01:52
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 16:07:52
-->
<template>
  <svg :class="svgClass" aria-hidden="true" :style="svgStyle" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [String],
      default: '55px'
    }
  },
  data() {
    return {}
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon'
    },
    svgStyle() {
      return {
        width: this.size,
        height: this.size
      }
    }
  },
  mounted() {
    console.log('55', this.iconClass)
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
