<template>
<div>
	<div class="flex mx-auto justify-evenly max-w-7xl">
		<!-- Calon 1 -->
		<div class="flex flex-col m-2 bg-white shadow-md rounded-3xl w-80">
			<div class="bg-cover h-96 bg-white-400 rounded-3xl" style="
				background-image: url(https://i0.wp.com/www.biem.co/wp-content/uploads/2020/06/nadin-amizah.jpg);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-3xl font-bold font-Montserrat">Nadin Amizah</h4></div>
			<div class="flex flex-row-reverse">
				<button v-on:click="showModal = !showModal" class="px-5 py-3 mt-3 mb-4 mr-4 text-lg font-medium leading-none text-white rounded-xl bg-main">Vote</button>
				<a class="p-2 mt-3 underline text-md" href="">Lihat Kampanye</a>
			</div>
		</div>
		<!-- Calon 2 -->
		<div class="flex flex-col m-2 bg-white shadow-md rounded-3xl w-80">
			<div class="bg-cover h-96 bg-white-400 rounded-3xl" style="
				background-image: url(https://awsimages.detik.net.id/community/media/visual/2021/10/04/cristiano-ronaldo-1_43.jpeg?w=700&q=90);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-3xl font-bold font-Montserrat">Ronaldo</h4></div>
			<div class="flex flex-row-reverse">
				<button v-on:click="showModal = !showModal" class="px-5 py-3 mt-3 mb-4 mr-4 text-lg font-medium leading-none text-white rounded-xl bg-main">Vote</button>
				<a class="p-2 mt-3 underline text-md" href="">Lihat Kampanye</a>
			</div>
		</div>
		<!-- Calon 3 -->
		<div class="flex flex-col m-2 bg-white shadow-md rounded-3xl w-80">
			<div class="bg-cover h-96 bg-white-400 rounded-3xl" style="
				background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
				background-position: top;"></div>
			<div class="flex flex-col mt-4">
				<h4 class="ml-4 text-3xl font-bold font-Montserrat">Kai Havertz</h4></div>
			<div class="flex flex-row-reverse">
				<button v-on:click="showModal = !showModal" class="px-5 py-3 mt-3 mb-4 mr-4 text-lg font-medium leading-none text-white rounded-xl bg-main">Vote</button>
				<a class="p-2 mt-3 underline text-md" href="">Lihat Kampanye</a>
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

