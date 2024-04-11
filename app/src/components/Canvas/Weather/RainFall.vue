<template>
    <primitive :object="model" :scale="0.3" :position="[3, 3, 0]" />
</template>

<script setup lang="ts">
import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
const Url = new URL('@/assets/cloud.glb', import.meta.url)
const { scene: model } = await useLoader(GLTFLoader, Url.href)






</script>