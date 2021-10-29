<template>
    <div class="self-center mx-auto max-w-7xl">
        <div class="flex flex-col md:flex-row">
            <TimelineGraph class="flex-shrink-0"></TimelineGraph>
            <TimelineSlider class="overflow-auto md:ml-8 overscroll-auto"></TimelineSlider>
        </div>
    </div>
</template>

<script setup>
import TimelineSlider from '@/components/TimelineSlider.vue';
import TimelineGraph from '@/components/TimelineGraph.vue';
</script>

<script>
</script>
