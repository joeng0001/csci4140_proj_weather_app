<template>
    <VaDateInput v-model="model" clearable :allowedDays="(date: Date) => date.getFullYear() === 2023"
        @update:modelValue="emit('update', model)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['date'])
const model = ref(props.date)
const emit = defineEmits(['update'])

</script>
<style scoped></style>