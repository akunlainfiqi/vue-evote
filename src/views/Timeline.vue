<template>
    <div class="self-center mx-auto max-w-7xl">
        <div class="flex flex-row">
            <TimelineGraph class="flex-shrink-0"></TimelineGraph>
            <TimelineSlider class="ml-8 overflow-auto overscroll-auto"></TimelineSlider>
        </div>
    </div>
</template>

<script setup>
import TimelineSlider from '@/components/TimelineSlider.vue';
import TimelineGraph from '@/components/TimelineGraph.vue';
</script>

<script>
</script>
