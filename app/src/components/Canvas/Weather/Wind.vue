<template>
    <primitive :object="model.model" :scale="0.03" :position="model.position" v-for="model in modelList" :key="model"
        name="Wind" />
</template>
<script setup lang="ts">

import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useAnimations } from '@tresjs/cientos';
import { location } from '@/constant';
import { useWeatherStore } from '@/store/weather'
import { useDateStore } from '@/store/date';
import { shallowRef, watch } from 'vue';

const Url = new URL('@/assets/turbine.glb', import.meta.url)
const { scene: model, animations } = await useLoader(GLTFLoader, Url.href)
const WeatherStore = useWeatherStore()
const DateStore = useDateStore()

let modelList = shallowRef(<Array<modelItf>>[])

watch(() => DateStore.date, (newD) => {
    initModelList(newD)
}, { immediate: true })

function initModelList(date: any = { year: "2023", month: "1", day: "1" }) {
    let newArr: any = []
    WeatherStore.Wind.forEach(wind => {
        const coordinate = location[wind.place]
        const m = model.clone()
        const { actions } = useAnimations(animations, m)
        const currentAction = actions['rotation|Action']
        currentAction.play()
        const target = wind.data.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
        currentAction.timeScale = target ? parseInt(target.value) : 0
        newArr.push({
            model: m,
            position: [coordinate[0], 2.3, coordinate[1]]
        })
    })
    modelList.value = newArr
}

interface modelItf {
    "model": String,
    "position": Array<any>
}

</script>