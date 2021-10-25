<template>
	<div class="grid xl:grid-cols-3 gap-4 max-w-6xl">
		<!-- Calon 1 -->
		<div class="flex flex-col bg-white rounded-lg p-4 m-2">
			<div class="h-80 bg-white-400 rounded-lg" style="
            background-image: url(https://akcdn.detik.net.id/community/media/visual/2021/04/14/christian-pulisic-chelsea-vs-porto-liga-champions-perempatfinal-liga-champions-chelsea_169.jpeg?w=700&q=90);
            background-position: top;"></div>
			<div class="flex flex-col items-start mt-4">
				<h4 class="text-2xl font-semibold">Christian Pulisic</h4>
				<a class="p-3 leading-none rounded font-medium mt-3 bg-main text-s text-white" href="#">Vote</a>
			</div>
		</div>
		<!-- Calon 2 -->
		<div class="flex flex-col bg-white rounded-lg p-4 m-2">
			<div class="h-80 bg-white-400 rounded-lg" style="
            background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
            background-position: top;"></div>
			<div class="flex flex-col items-start mt-4">
				<h4 class="text-2xl font-semibold">Kai Havertz</h4>
				<a class="p-3 leading-none rounded font-medium mt-3 bg-main text-s text-white" href="#">Vote</a>
			</div>
		</div>
		<!-- Calon 3 -->
		<div class="flex flex-col bg-white rounded-lg p-4 m-2">
			<div class="h-80 bg-white-400 rounded-lg" style="
            background-image: url(https://media.vivagoal.com/2020/12/Mason-Mount.jpg);
            ackground-repeat: no-repeat;
            background-attachment: cover;
            background-position: top;"></div>
			<div class="flex flex-col items-start mt-4">
				<h4 class="text-2xl font-semibold">Mason Mount</h4>
				<a class="p-3 leading-none rounded font-medium mt-3 bg-main text-s text-white" href="#">Vote</a>
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

