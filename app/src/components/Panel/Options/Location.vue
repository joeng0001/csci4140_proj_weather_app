<template>
    <VaSelect v-model="model" placeholder="Go To" color="#990099" :options="options"
        @update:modelValue="emit('update', model)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { location } from '@/constant';

const options = Object.keys(location)
const emit = defineEmits(['update'])
const props = defineProps(['location'])

const model = ref(options.includes(props.location) ? props.location : options[0])

</script>