<template>
    <primitive :object="model" :scale="1" :position="[0, 30, 0]" name="Sun Light" />
    <TresDirectionalLight :position="[0, 30, 0]" name="Sun Light" />
</template>

<script setup lang="ts">
import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
const Url = new URL('@/assets/sun.glb', import.meta.url)
const { scene: model } = await useLoader(GLTFLoader, Url.href)
</script>