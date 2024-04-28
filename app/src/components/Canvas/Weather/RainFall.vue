<template>
    <TresMesh v-for="(rain, i) in rains" :key="i" :position="[rain.position[0], rain.position[1], rain.position[2]]">
        <TresBoxGeometry :args="[0.01, 0.3, 0.01]" />
        <TresMeshBasicMaterial color="grey" :transparent="true" :opacity="0.5" />
    </TresMesh>
</template>

<script setup lang="ts">
import { onBeforeUnmount, shallowRef } from 'vue'
import { useWeatherStore } from '@/store/weather';
import { location } from '@/constant';

const WeatherStore = useWeatherStore()

const date = { year: "2023", month: "10", day: "9" }

let rains: Array<rainObj> | any = shallowRef([])


WeatherStore.Rainfall.forEach(rainfall => {
    const loc = location[rainfall.place]
    const target = rainfall.data.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
    const value = (target?.value ? (parseInt(target.value) > 50 ? 50 : parseInt(target.value)) : 0)
    for (let i = 0; i < value; i++) {
        rains.value.push({
            position: [loc[0] + Math.random() * 4 - 1, 5, loc[0] + Math.random() * 4 - 1],
            velocity: Math.random() * 0.5 + 0.5
        })
    }
})
const interval = setInterval(() => {
    const newArr = [...rains.value]
    newArr.forEach(rainObj => {
        rainObj.position[1] = rainObj.position[1] - rainObj.velocity < 0 ? 5 : rainObj.position[1] - rainObj.velocity
    })
    rains.value = newArr
}, 10)

onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
})

interface rainObj {
    position: Array<number>,
    velocity: number
}

</script>