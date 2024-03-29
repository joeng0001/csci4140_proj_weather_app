<template>
    <div>
        control panel
        {{ props1 }}
    </div>
</template>

<script setup lang="ts">


let { props1 } = withDefaults(defineProps<{ props1?: String }>(), {
    props1: () => "default value"
})

if (props1) {

}
</script>