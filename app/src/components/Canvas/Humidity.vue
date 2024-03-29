<template>
    <div>humidity</div>
</template>
<script setup lang="ts">
import { useHumidityStore } from '@/store/humidity'
import { storeToRefs } from 'pinia'
const humidityStore = useHumidityStore()
console.log(humidityStore.level)
humidityStore.level += 1
console.log(humidityStore.level)
humidityStore.$patch({ //at once
    level: 1,
    t: true
})
console.log(humidityStore)
humidityStore.addLevel(3)
console.log(humidityStore.level)

const { level } = storeToRefs(humidityStore)
</script>