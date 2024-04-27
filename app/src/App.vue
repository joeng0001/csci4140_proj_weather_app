<template>
  <Suspense>
    <div v-if="!loading">
      <Canvas />
      <Panel />
    </div>
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { Suspense, onMounted, ref } from 'vue'
import Canvas from "@/components/Canvas/Index.vue"
import Panel from "@/components/Panel/Index.vue"
import useWeather from '@/hooks/Canvas/useWeather';

const loading = ref(true);
onMounted(async () => {
  try {
    await useWeather()
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false
  }
});


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
