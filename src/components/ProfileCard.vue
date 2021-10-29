<template>
    <div class="flex flex-col mx-auto lg:flex-row max-w-7xl">
    <div v-for="item in items" v-bind:key="item.id" class="mx-auto">
        <div class="flex flex-row w-full max-w-xl m-2 mx-auto bg-white shadow-md lg:flex-col rounded-3xl lg:w-80">
            <img :src="item.URLFoto" class="object-cover w-40 h-40 lg:h-80 lg:w-80 rounded-3xl">
			<div class="flex flex-col justify-center w-48 my-auto lg:w-full md:my-4">
				<h4 class="text-3xl font-bold text-center font-Montserrat">{{item.name}}</h4>
                <div class="flex justify-center">
                    <button v-on:click="showModal = !showModal" class="px-5 py-3 mt-3 text-lg font-medium leading-none text-white rounded-xl bg-main">Unduh CV</button>
                </div>
            </div>
		</div>
        
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {
                    id:1,
                    name: "Nadin Amizah",
                    URLFoto: "https://i0.wp.com/www.biem.co/wp-content/uploads/2020/06/nadin-amizah.jpg",
                    URLCV:"/",
                },
                {
                    id:2,
                    name: "Ronaldo",
                    URLFoto: "https://awsimages.detik.net.id/community/media/visual/2021/10/04/cristiano-ronaldo-1_43.jpeg?w=700&q=90",
                    URLCV:"/",
                },
                {
                    id:3,
                    name: "Kai Havertz",
                    URLFoto: "https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90",
                    URLCV:"/",
                },
            ]
        }
    }
}
</script>