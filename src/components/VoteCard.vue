<template>
<div>
	<div class="flex justify-evenly">
		<!-- Calon 1 -->
		<div class="flex flex-col bg-white rounded-3xl m-2 w-80 shadow-md">
			<div class="h-96 bg-white-400 rounded-t-3xl" style="
				background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-2xl font-semibold">Kai Havertz</h4></div>
			<div class="flex flex-row justify-between mr-1 ml-1">
				<a class="p-2 ml-24 text-s mt-3 underline" href="">Lihat Kampanye</a>
				<a class="pt-3 pb-3 pl-5 pr-5 mr-2 mb-4 leading-none rounded-3xl font-medium mt-3 bg-main text-xs text-white" href="#">Vote</a>
			</div>
		</div>
		<!-- Calon 2 -->
		<div class="flex flex-col bg-white rounded-3xl m-2 w-80 shadow-md">
			<div class="h-96 bg-white-400 rounded-t-3xl" style="
				background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-2xl font-semibold">Kai Havertz</h4></div>
			<div class="flex flex-row justify-between mr-1 ml-1">
				<a class="p-2 ml-24 text-s mt-3 underline" href="">Lihat Kampanye</a>
				<a class="pt-3 pb-3 pl-5 pr-5 mr-2 mb-4 leading-none rounded-3xl font-medium mt-3 bg-main text-xs text-white" href="#">Vote</a>
			</div>
		</div>
		<!-- Calon 3 -->
		<div class="flex flex-col bg-white rounded-3xl m-2 w-80 shadow-md">
			<div class="h-96 bg-white-400 rounded-t-3xl" style="
				background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-2xl font-semibold">Kai Havertz</h4></div>
			<div class="flex flex-row justify-between mr-1 ml-1">
				<a class="p-2 ml-24 text-s mt-3 underline" href="">Lihat Kampanye</a>
				<button v-on:click="showModal = !showModal" class="pt-3 pb-3 pl-5 pr-5 mr-2 mb-4 leading-none rounded-3xl font-medium mt-3 bg-main text-xs text-white">Vote</button>
			</div>
		</div>


    <!-- <button v-on:click="showModal = !showModal">tes</button> -->
</div>
<VoteConfirmation v-if="showModal"></VoteConfirmation>
</div>
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

