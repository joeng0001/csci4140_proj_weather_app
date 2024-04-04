<template>
  <div>
    <Canvas></Canvas>
    <Panel></Panel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Options, Vue } from 'vue-class-component';
import Canvas from "@/components/Canvas/index.vue"
import Panel from "@/components/Panel/index.vue"
// import { get_humidity } from "@/helper/http"
// const res=await get_humidity()
// console.log(res.data)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
