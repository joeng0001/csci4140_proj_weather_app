<template>
  <Suspense>
    <div>
      <Canvas></Canvas>
      <!-- <Panel></Panel> -->
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted, Suspense } from 'vue'
import { Options, Vue } from 'vue-class-component';
import Canvas from "@/components/Canvas/Index.vue"
import Panel from "@/components/Panel/Index.vue"
import { useWeatherStore } from '@/store/weather'
import { get_rainfall, get_humidity, get_sun_time, get_uv_ray } from "@/helper/http"

// const WeatherStore = useWeatherStore()

// const Rainfall = await get_rainfall()
// WeatherStore.setRainfall(Rainfall)

// console.log(WeatherStore.getRainfall)


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
