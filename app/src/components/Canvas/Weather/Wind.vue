<template>
    <primitive :object="model.model" :scale="0.03" :position="model.position" modelList v-for="model in modelList"
        :key="model" name="Wind" />
</template>
<script setup lang="ts">

//display wind speed by animation speed
// every area has it's own model

import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useAnimations } from '@tresjs/cientos';
import { location } from '@/constant';
const Url = new URL('@/assets/turbine.glb', import.meta.url)
const { scene: model, animations } = await useLoader(GLTFLoader, Url.href)

import { useWeatherStore } from '@/store/weather'
const WeatherStore = useWeatherStore()
console.log("inweather", WeatherStore.Wind)

const date = { year: "2023", month: "1", day: "1" }
let modelList = <Array<modelItf>>[]
WeatherStore.Wind.forEach(wind => {
    const coordinate = location[wind.place]
    const m = model.clone()
    const { actions } = useAnimations(animations, m)
    const currentAction = actions['rotation|Action']
    currentAction.play()
    const target = wind.data.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
    currentAction.timeScale = target ? parseInt(target.value) : 0
    modelList.push({
        model: m,
        position: [coordinate[0], 2.3, coordinate[1]]
    })
})



interface modelItf {
    "model": String,
    "position": Array<any>
}

</script>