<template>
    <primitive :object="model.model" :scale="0.03" :position="model.position" modelList v-for="model in modelList"
        :key="model" />
</template>
<script setup lang="ts">

//display wind speed by animation speed
// every area has it's own model

import { useLoader } from '@tresjs/core';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useAnimations } from '@tresjs/cientos';
import type { RGB_PVRTC_2BPPV1_Format } from 'three';
const Url = new URL('@/assets/turbine.glb', import.meta.url)
const { scene: model, animations } = await useLoader(GLTFLoader, Url.href)
const modelList = []
for (let i = 0; i < 2; i++) {
    const m = model.clone()
    const { actions } = useAnimations(animations, m)
    const currentAction = actions['rotation|Action']
    currentAction.play()
    modelList.push({
        model: m,
        position: [i, 2.3, i]
    })
}



</script>