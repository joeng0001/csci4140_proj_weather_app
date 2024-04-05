<template>
    <div>{{ WeatherStore.getSunTime }}</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/store/weather'
import { get_sun_time } from "@/helper/http"

const WeatherStore = useWeatherStore()

const SunTime = await get_sun_time()
WeatherStore.setSunTime(SunTime)

console.log(WeatherStore.getSunTime)

</script>