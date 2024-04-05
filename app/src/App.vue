<template>


  <Suspense>
    <div>
      <Canvas></Canvas>
      <Panel></Panel>
    </div>
  </Suspense>


</template>

<script setup lang="ts">
import { ref, onMounted, Suspense } from 'vue'
import { Options, Vue } from 'vue-class-component';
import Canvas from "@/components/Canvas/index.vue"
import Panel from "@/components/Panel/index.vue"


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
