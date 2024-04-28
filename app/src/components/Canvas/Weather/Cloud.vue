<template>
    <primitive :object="model" :scale="1" :position="[10, 4, 0]" />
    <TresPointLight />
</template>

<script setup lang="ts">
import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useWeatherStore } from '@/store/weather';

const Url = new URL('@/assets/cloud.glb', import.meta.url)
const { scene: model } = await useLoader(GLTFLoader, Url.href)
const WeatherStore = useWeatherStore()
console.log(WeatherStore.Cloud)

</script>