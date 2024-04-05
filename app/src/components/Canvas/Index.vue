<template>
    <TresCanvas clear-color="#FFFFFF" shadows alpha window-size>
        <OrbitControls />
        <TresAmbientLight/>
        <TresAxesHelper :args="[100]"/>
        
        <TresMesh ref="boxRef" :scale="5" cast-shadow  :rotation-x="-1*Math.PI/2">
            <TresPlaneGeometry :args="[10, 10, 1, 1]" />
            <TresMeshBasicMaterial :map="texture"/>
        </TresMesh>
        <TresGroup ref="modelRef" :position="[0,0,2]">
            <primitive :object="model"  :scale="0.00001" />
            <TresPerspectiveCamera ref="cameraRef" :position="[0,2,2]" :fov="45" :aspect="1" :near="0.1" :far="20" />
        </TresGroup>
        
        <!-- <template v-slot:name="params_from_slot"></template> -->
        <!-- <Humidity :v-model.value="a" /> -->
        <!-- <RouterView/> -->
    </TresCanvas>
    <input v-show="false" @keydown="keyListen" />
    <!-- <Humidity :v-model.value="1"/> -->
</template>

<script setup lang="ts">
import { ref,provide } from 'vue';
import { TresCanvas, useRenderLoop,useLoader } from '@tresjs/core';
import { OrbitControls,useGLTF,useAnimations } from '@tresjs/cientos';
//import Humidity from '@/components/Canvas/Humidity.vue'
import { type ppl,type ppls } from '@/types/Canvas'
import * as THREE from "three"
import { RouterView } from 'vue-router'
import map from "@/assets/HKMap.png"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import type { toValue } from 'vue';
import useKeyboardEventListener from '@/hooks/Canvas/useKeyEvent'

const manager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader( manager );
const texture =textureLoader.load(map);

const Url = new URL('@/assets/man.gltf', import.meta.url)
const { scene: model, animations } = await useLoader(GLTFLoader, Url.href)
const { actions } = useAnimations(animations, model)
const currentAction = ref(actions['GltfAnimation 0'])
currentAction.value.play()

const modelRef=ref<THREE.Object3D | null>(null);
const cameraRef=ref<THREE.PerspectiveCamera | null>(null);

// const boxRef = ref<THREE.Object3D | null>(null);
const { onLoop } = useRenderLoop();
// let x: ppl = { ppl: 1 }
// let s: ppls = [{ ppl: 1 }]

const {keyListener}=useKeyboardEventListener()

onLoop(({ delta, elapsed }) => {
    if (modelRef.value){ 
        keyListener(modelRef.value,currentAction.value)
        if(cameraRef.value){
            cameraRef.value.lookAt( modelRef.value.position)
        }
    }

});

//provide('test',1) //pass to all descendent
</script>
