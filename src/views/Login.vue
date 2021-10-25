<template>
    <div class="bg-main">
    <div class="flex flex-col items-center justify-center w-screen h-screen m-auto">
        <LoginMenuVue></LoginMenuVue>
        <img src="@/assets/logo.png" alt="logo evote" class="pt-10">
    </div>
    </div>
</template>

<script setup>
import LoginMenuVue from "@/components/LoginMenu.vue";
</script>