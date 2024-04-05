<template>
    <div>{{ WeatherStore.getSunTime }}</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/store/weather'
import { get_uv_ray } from "@/helper/http"

const WeatherStore = useWeatherStore()

const UVRay = await get_uv_ray()
WeatherStore.setUVRay(UVRay)

console.log(WeatherStore.getUVRay)

</script>