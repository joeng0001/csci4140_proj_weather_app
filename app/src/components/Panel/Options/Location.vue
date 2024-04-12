<template>
    <VaButtonToggle v-model="model" gradient :options="options" @update:modelValue="emit('update', model)"
        color="success" />
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'

const options = [
    { label: "Kowloon", value: "Kowloon" },
    { label: "New Territories", value: "New Territories" },
    { label: "Hong Kong Island", value: "Hong Kong Island" }]

const emit = defineEmits(['update'])
const props = defineProps(['location'])

const model = ref(props.location)

</script>