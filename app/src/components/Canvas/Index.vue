<template>

    <TresCanvas clear-color="#FFFFFF" shadows alpha window-size ref="sceneRef">
        <OrbitControls />
        <TresAmbientLight />
        <TresAxesHelper :args="[100]" />
        <TresMesh ref="boxRef" :scale="5" cast-shadow :rotation-x="-1 * Math.PI / 2" @click="onClick">
            <TresPlaneGeometry :args="[10, 10, 1, 1]" />
            <TresMeshBasicMaterial :map="texture" />
        </TresMesh>
        <TresGroup ref="modelRef" :position="[0, 0, 2]">
            <primitive :object="model" :scale="0.0001" />
            <TresPerspectiveCamera ref="cameraRef" :position="[0, 7, 2]" :fov="45" :aspect="1" :near="0.1" :far="300" />
        </TresGroup>

        <Suspense>
            <!-- <RainFall />
            <Sun />
            <Humidity />
            <UVRay />
            <Wind /> -->
            <Cloud />
        </Suspense>
        <!-- <template v-slot:name="params_from_slot"></template> -->
        <!-- <Humidity :v-model.value="a" /> -->

    </TresCanvas>

    <!-- <Humidity :v-model.value="1"/> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TresCanvas, useRenderLoop, useLoader, extend } from '@tresjs/core';
import { OrbitControls, useAnimations } from '@tresjs/cientos';
//import Humidity from '@/components/Canvas/Humidity.vue'
import * as THREE from "three"
import map from "@/assets/HKMap.png"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import useKeyboardEventListener from '@/hooks/Canvas/useKeyEvent'
import RainFall from "@/components/Canvas/Weather/RainFall.vue"
import Sun from "@/components/Canvas/Weather/Sun.vue"
import Humidity from "@/components/Canvas/Weather/Humidity.vue"
import UVRay from "@/components/Canvas/Weather/UVRay.vue"
import Wind from "@/components/Canvas/Weather/Wind.vue"
import Cloud from "@/components/Canvas/Weather/Cloud.vue"

const manager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(manager);
const texture = textureLoader.load(map);

const Url = new URL('@/assets/man.gltf', import.meta.url)
const { scene: model, animations } = await useLoader(GLTFLoader, Url.href)
const { actions } = useAnimations(animations, model)
const currentAction = actions['GltfAnimation 0']
currentAction.play()

const modelRef = ref<THREE.Object3D | null>(null);
const cameraRef = ref<THREE.PerspectiveCamera | null>(null);
const boxRef = ref<THREE.Object3D | null>(null);

const { onLoop } = useRenderLoop();
const { keyListener } = useKeyboardEventListener()

onLoop(({ delta, elapsed }) => {
    if (modelRef.value) {
        keyListener(modelRef.value, currentAction)
        if (cameraRef.value) {
            cameraRef.value.lookAt(modelRef.value.position)
        }
    }
});
extend({ OrbitControls })


// Function to handle the click event
function onClick(event: MouseEvent) {
    console.log("click", event.point)
}
//provide('test',1) //pass to all descendent
</script>
