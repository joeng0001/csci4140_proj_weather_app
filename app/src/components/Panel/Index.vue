<template>
    <div class="wrapper">
        <VaAccordion class="d-flex justify-space-evenly">
            <VaCollapse style="width: 100%;">
                <template #header>
                    <VaButton color="info" gradient class="mb-2">{{ WeatherOptionCollapses.title }}</VaButton>
                </template>
                <template #content>
                    <component :is=WeatherOptionCollapses.content :options="WeatherOptionCollapses.options"
                        @update="(newV: Array<never>) => WeatherOptionCollapses.options = newV" class="bg" />
                </template>
            </VaCollapse>
            <VaCollapse style="width: 100%;">
                <template #header>
                    <VaButton color="info" gradient class="mb-2">{{ DateTimeOptionObj.title }}</VaButton>
                </template>
                <template #content>
                    <component :is=DateTimeOptionObj.content @update="(newV: Date) => DateTimeOptionObj.date = newV"
                        :date="DateTimeOptionObj.date" class="bg" />
                </template>
            </VaCollapse>
            <VaCollapse style="width: 100%;">
                <template #header>
                    <VaButton color="info" gradient class="mb-2">{{ LocationOptionCollapses.title }}</VaButton>
                </template>
                <template #content>
                    <component :is=LocationOptionCollapses.content :location="LocationOptionCollapses.location"
                        @update="(newV: string) => LocationOptionCollapses.location = newV" />
                </template>
            </VaCollapse>
        </VaAccordion>
    </div>
</template>

<script setup lang="ts">
// weather
import useWeatherOptionCollapses from "@/hooks/Panel/Weather"
const { WeatherOptionCollapses } = useWeatherOptionCollapses(["Humidity", "Rain Fall", "Sun Light", "UV Ray", "Wind", "Cloud"])

import useDateTime from "@/hooks/Panel/Date"
const { DateTimeOptionObj } = useDateTime(new Date('2023-01-01'))

import useLocationOptionCollapses from "@/hooks/Panel/Location"
const { LocationOptionCollapses } = useLocationOptionCollapses()



</script>
<style scoped>
.wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}

.bg {
    background: rgba(220, 220, 220, 0.9);
}
</style>