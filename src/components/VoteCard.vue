<template>
    <div class="relative bg-white shadow-lg h-max w-max rounded-3xl">
        <div class="inset-0 bg-gray-500">
            <div class="w-80 h-80"></div>
        </div>
        <div class="">
            <div class="space-y-6">
                <h1>Calon 1</h1>
                <h3></h3>
            </div>
        </div>
    </div>

    <button v-on:click="showModal = !showModal">tes</button>
    <VoteConfirmation v-if="showModal"></VoteConfirmation>
</template>

<script setup>
import VoteConfirmation from '@/components/VoteConfirmation.vue';
</script>

<script>
export default{
    props: {
        showModal: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

