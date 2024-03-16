<template>
    <Renderer ref="renderer" resize="window" orbit-ctrl>
        <Camera :position="{ z: 10 }" />
        <Scene>
            <AmbientLight :position="{ y: 50, z: 50 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const renderer = ref(null)
        const box = ref(null)

        onMounted(() => {
            renderer?.value?.onBeforeRender(() => {
                box.value.mesh.rotation.x += 0.01;
            });
        })
        return { renderer, box }
    }
})

</script>