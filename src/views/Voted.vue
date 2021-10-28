<template>
<div class="min-h-full m-auto w-max">
        <div class="overflow-hidden text-center align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div class="flex flex-col items-center sm:items-start">
                    <div class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                        <CheckIcon class="w-8 h-8 font-bold text-green-600"/>
                    </div>
                    <div class="w-full mt-3">
                        <h3 class="text-xl font-medium text-gray-900 font-Poppins">
                            Anda telah memilih!
                        </h3>
                    </div>
                    <div class="w-full mt-2">
                        <p class="font-medium text-gray-600 text-md font-Poppins">
                            Terima kasih, anda telah berpartisipasi dalam voting!<br>Hasil akan diumumkan pada tanggal 15/09/2021
                        </p>
                    </div>
                    <div class="w-full mt-2">
                        <button class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-100 border-2 border-gray-300 border-opacity-0 rounded-full shadow-sm bg-main rounded-gray-300 hover:bg-gray-50 hover:text-main hover:border-main focus:outline-none" @click="this.$router.push('/')">
                            Kembali ke menu utama
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import VoteCard from '@/components/VoteCard.vue';
</script>

<script>
import { CheckIcon } from '@heroicons/vue/solid';
</script>

