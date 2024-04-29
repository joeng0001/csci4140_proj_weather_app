<template>
    <VaOptionList v-model="model" :options="options" @update:modelValue="emit('update', model)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['options'])
const options = ["Humidity", "Rain Fall", "Sun Light", "UV Ray", "Wind", "Cloud"]
const emit = defineEmits(['update'])
const model = ref(props.options)


</script>

<style scoped></style>