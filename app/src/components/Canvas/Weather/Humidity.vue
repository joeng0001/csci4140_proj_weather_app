<template>
    <TresFog :color="0xffffff" :far="far" :near="0"></TresFog>
</template>

<script setup lang="ts">
//far=30
import { useWeatherStore } from '@/store/weather'
import emitter from '@/helper/emitter';
import { location } from '@/constant';
import { ref } from 'vue'

const WeatherStore = useWeatherStore()
const date = { year: "2023", month: "1", day: "1" }

const far = ref(30)

emitter.on('move', (pos) => {
    const val = findClosestLoc(pos)
    far.value = val / 3
})
const findClosestLoc = (newPos: any) => {
    let min = 999, val = 0
    WeatherStore.Humidity.forEach(humidity => {
        const tar_pos = location[humidity.place]
        let distance = Math.sqrt((tar_pos[0] - newPos.x) ** 2 + (tar_pos[1] - newPos.z))
        if (distance < min) {
            min = distance
            const target = humidity.data.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
            val = target ? parseInt(target.value) : 0
        }
    })
    return val
}






</script>