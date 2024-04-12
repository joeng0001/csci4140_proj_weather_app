<template>
  <Suspense>
    <div>
      <Canvas />
      <Panel />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { Suspense } from 'vue'
import Canvas from "@/components/Canvas/Index.vue"
import Panel from "@/components/Panel/Index.vue"
import useWeather from '@/hooks/Canvas/useWeather';

// useWeather()

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
