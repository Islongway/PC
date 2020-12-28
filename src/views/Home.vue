<!--
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 10:06:23
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 11:37:16
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    add() {
    }
  }
}
</script>
