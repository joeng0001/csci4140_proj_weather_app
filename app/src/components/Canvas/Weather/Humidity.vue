<template>
    <div>{{ WeatherStore.getSunTime }}</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/store/weather'
import { get_humidity } from "@/helper/http"

const WeatherStore = useWeatherStore()

const Humidity = await get_humidity()
WeatherStore.setHumidity(Humidity)

console.log(WeatherStore.getHumidity)

</script>