<template>
    <div>{{ WeatherStore.getSunTime }}</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/store/weather'
import { get_rainfall } from "@/helper/http"

const WeatherStore = useWeatherStore()

const Rainfall = await get_rainfall()
WeatherStore.setRainfall(Rainfall)

console.log(WeatherStore.getRainfall)

</script>