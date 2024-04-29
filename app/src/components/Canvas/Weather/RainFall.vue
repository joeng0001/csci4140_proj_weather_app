<template>
    <TresMesh v-for="(rain, i) in rains" :key="i" :position="[rain.position[0], rain.position[1], rain.position[2]]"
        name="Rain Fall">
        <TresBoxGeometry :args="[0.01, 0.3, 0.01]" />
        <TresMeshBasicMaterial color="grey" :transparent="true" :opacity="0.5" />
    </TresMesh>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowReactive, shallowRef, watch } from 'vue'
import { useWeatherStore } from '@/store/weather';
import { location } from '@/constant';
import emitter from '@/helper/emitter';

const WeatherStore = useWeatherStore()

let rains: Array<rainObj> | any = shallowRef([])

emitter.on('panel:date', (newD: Object | any) => {
    initRains(newD)
})

initRains()
function initRains(date: any = { year: "2023", month: "1", day: "1" }) {
    rains.value = []
    const newArr: any = []
    WeatherStore.Rainfall.forEach(rainfall => {
        const loc = location[rainfall.place]
        const target = rainfall.data.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
        const value = (target?.value ? (parseInt(target.value) > 50 ? 50 : parseInt(target.value)) : 0)
        for (let i = 0; i < value; i++) {
            newArr.push({
                position: [loc[0] + Math.random() * 4 - 1, 5, loc[0] + Math.random() * 4 - 1],
                velocity: Math.random() * 0.5 + 0.5
            })
        }
    })
    rains.value = newArr
}

const interval = initInterval()
function initInterval() {
    const interval = setInterval(() => {
        const newArr = [...rains.value]
        newArr.forEach(rainObj => {
            rainObj.position[1] = rainObj.position[1] - rainObj.velocity < 0 ? 5 : rainObj.position[1] - rainObj.velocity
        })
        rains.value = newArr
    }, 10)
    return interval
}


onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
})

interface rainObj {
    position: Array<number>,
    velocity: number
}

</script>