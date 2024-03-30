<template>
    <TresCanvas clear-color="#82DBC5" shadows alpha window-size>
        <OrbitControls />
        <TresPerspectiveCamera ref="cameraRef" :position="[1, 2, 5]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
        <TresMesh ref="boxRef" :scale="1" cast-shadow>
            <TresBoxGeometry :args="[1, 1, 1]" />
            <TresMeshNormalMaterial />
        </TresMesh>
        <!-- <Humidity :v-model.value="a" /> -->
        <!-- <RouterView/> -->
    </TresCanvas>
    <Humidity :v-model.value="1"/>
</template>

<script setup lang="ts">
import { ref,provide } from 'vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import Humidity from '@/components/Canvas/Humidity.vue'
import { type ppl,type ppls } from '@/types/Canvas'
import * as THREE from "three"
import { RouterView } from 'vue-router'

const boxRef = ref<THREE.Object3D | null>(null);
const { onLoop } = useRenderLoop();
let x: ppl = { ppl: 1 }
let s: ppls = [{ ppl: 1 }]

onLoop(({ delta, elapsed }) => {
    if (boxRef.value) {
        boxRef.value.rotation.y += delta;
        boxRef.value.rotation.z = elapsed * 0.2;
    }
});

//provide('test',1) //pass to all descendent
</script>
