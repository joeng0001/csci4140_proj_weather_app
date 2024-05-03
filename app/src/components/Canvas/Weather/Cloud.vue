<template>
    <primitive :object="model.clone()" :scale="0.5"
        :position="[cloud.position[0], cloud.position[1], cloud.position[2]]" v-for="(cloud, i) in clouds" :keys="i"
        name="Cloud" />
</template>

<script setup lang="ts">
import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useWeatherStore } from '@/store/weather';
import { useDateStore } from '@/store/date';
import { onBeforeUnmount, shallowRef, watch } from 'vue';

const Url = new URL('@/assets/cloud.glb', import.meta.url)
const { scene: model } = await useLoader(GLTFLoader, Url.href)

const WeatherStore = useWeatherStore()
const DateStore = useDateStore()


const clouds: Array<cloudObj> | any = shallowRef([])

watch(() => DateStore.date, (newD) => {
    initClouds(newD)
}, {
    immediate: true
})

function initClouds(date: any = { year: "2023", month: "1", day: "1" }) {
    const target = WeatherStore.Cloud.find(obj => obj.year == date.year && obj.month == date.month && obj.day == date.day)
    const value = target?.value ? parseInt(target.value) : 0
    for (let i = 0; i < value; i++) {
        clouds.value.push({
            position: [
                Math.random() * 50 - 25, 5, Math.random() * 50 - 25
            ],
            up: true,
            velocity: Math.random() * 0.01,
        })
    }
}

const interval = setInterval(() => {
    let newArr = [...clouds.value]
    newArr.forEach(cloud => {
        cloud.position[1] += cloud.up ? cloud.velocity : -1 * cloud.velocity
        if (cloud.position[1] > 6) cloud.up = false
        if (cloud.position[1] < 4) cloud.up = true
    })
    clouds.value = newArr
}, 10)

onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
})

interface cloudObj {
    position: Array<Number>,
    up: Boolean,
    velocity: Number
}

</script>