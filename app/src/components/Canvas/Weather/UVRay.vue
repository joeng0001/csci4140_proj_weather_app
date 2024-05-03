<template>
    <TresDirectionalLight :position="[0, 10, 0]" :color="0xda70d6" :power="power" name="UV Ray" />
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/store/weather';
import { useDateStore } from '@/store/date';
import { ref, watch } from 'vue';

const power = ref(0)
const WeatherStore = useWeatherStore()
const DateStore = useDateStore()

watch(() => DateStore.date, (newD) => {
    initPower(newD)
}, {
    immediate: true
})

function initPower(date: any = { year: "2023", month: "1", day: "1" }) {
    const target = WeatherStore.UVRay.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
    power.value = target?.value ? 500 * parseInt(target.value) : 0
}

</script>