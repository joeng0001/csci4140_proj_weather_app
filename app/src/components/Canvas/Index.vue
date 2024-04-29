<template>

    <TresCanvas clear-color="#FFFFFF" shadows alpha window-size ref="sceneRef">
        <OrbitControls />
        <!-- <TresAmbientLight /> -->
        <TresAxesHelper :args="[100]" />
        <TresMesh ref="boxRef" :scale="5" :rotation-x="-1 * Math.PI / 2" @click="onClick">
            <TresPlaneGeometry :args="[10, 10, 1, 1]" />
            <TresMeshBasicMaterial :map="texture" />
        </TresMesh>
        <TresGroup ref="modelRef" :position="[0, 0, 2]">
            <primitive :object="model" :scale="0.0001" />
            <TresPerspectiveCamera ref="cameraRef" :position="[0, 7, 2]" :fov="45" :aspect="1" :near="0.1" :far="300" />
        </TresGroup>


        <Suspense v-for="(comp, i) in components" :key="i">
            <component :is="comp.comp" v-if="comp.show" />
        </Suspense>
        <!-- <template v-slot:name="params_from_slot"></template> -->
        <!-- <Humidity :v-model.value="a" /> -->

    </TresCanvas>

</template>

<script setup lang="ts">
import { ref, shallowReactive, shallowRef, reactive } from 'vue';
import { TresCanvas, useRenderLoop, useLoader, extend } from '@tresjs/core';
import { OrbitControls, useAnimations } from '@tresjs/cientos';
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
import emitter from '@/helper/emitter';
import { location } from '@/constant';

const defaultComponents = [
    { label: 'Rain Fall', comp: RainFall, show: true },
    { label: 'Sun Light', comp: Sun, show: true },
    { label: 'Humidity', comp: Humidity, show: true },
    { label: 'UV Ray', comp: UVRay, show: true },
    { label: 'Wind', comp: Wind, show: true },
    { label: 'Cloud', comp: Cloud, show: true },
]

const components = shallowRef(defaultComponents)

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
const sceneRef = ref<THREE.Scene | null>(null);

const { onLoop } = useRenderLoop();
const { keyListener } = useKeyboardEventListener()

let date = shallowReactive({ year: "2023", month: "1", day: "1" })

onLoop(({ delta, elapsed }) => {
    if (modelRef.value) {
        keyListener(modelRef.value, currentAction)
        if (cameraRef.value) {
            cameraRef.value.lookAt(modelRef.value.position)
        }
    }
});
extend({ OrbitControls })

emitter.on('panel:weather', (newW: Array<String> | any) => {
    const scene = sceneRef?.value?.context?.scene?.value
    let newArr = [...defaultComponents]
    newArr.forEach(com => {
        if (!newW.includes(com.label)) {
            com.show = false
            while (scene?.getObjectByName(com.label)) {
                scene.remove(scene.getObjectByName(com.label))
            }
            if (com.label == "Humidity") {
                scene.fog = null
            }
        } else {
            com.show = true
        }
    })
    components.value = newArr
})

emitter.on('panel:date', (newD: Object | any) => {
    const scene = sceneRef?.value?.context?.scene?.value
    defaultComponents.forEach(com => {
        while (scene?.getObjectByName(com.label)) {
            scene.remove(scene.getObjectByName(com.label))
        }
    })
})

emitter.on('panel:location', (newL: String | any) => {
    if (modelRef.value) {
        modelRef.value.position.set(location[newL][0], 0, location[newL][1])
    }
})

// function onClick(event: MouseEvent) {
//     console.log("click", event.point)
// }
//provide('test',1) //pass to all descendent
</script>
