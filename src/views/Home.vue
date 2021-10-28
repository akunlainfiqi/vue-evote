<template>
    <div class="min-w-full">
        <div class="flex flex-col min-h-screen">
        <div class="inline-grid flex-grow min-w-full grid-cols-3 text-center bg-slate-500">
            <div class="bg-cover bg-white-400" style="
				background-image: url(https://i0.wp.com/www.biem.co/wp-content/uploads/2020/06/nadin-amizah.jpg);
				background-position: top;"></div>
            <div class="bg-cover bg-white-400" style="
				background-image: url(https://awsimages.detik.net.id/community/media/visual/2021/10/04/cristiano-ronaldo-1_43.jpeg?w=700&q=90);
				background-position: top;"></div>
            <div class="bg-cover bg-white-400" style="
				background-image: url(https://akcdn.detik.net.id/community/media/visual/2020/09/21/kai-havertz-2_43.jpeg?w=700&q=90);
				background-position: top;"></div>
        </div>
        <div class="bg-main">
            <div
                class="flex flex-col px-4 py-16 mx-auto font-bold text-white align-middle max-w-7xl sm:px-6 lg:px-8 font-Montserrat">
                <h3 class="text-2xl font-normal font-DMsans">Sedang berlangsung</h3>
                <h1 class="pb-5 text-5xl">Pemilihan Ketua Organisasi</h1>
                <div class="flex flex-row items-center text-5xl align-middle">
                    <div class="flex items-center justify-center w-24 h-24 bg-gradient-2a rounded-2xl">
                        <h1 class="flex">{{ diff.hour }}</h1>
                    </div> : 
                    <div class="flex items-center justify-center w-24 h-24 bg-gradient-2a rounded-2xl">
                        <h1 class="flex">{{ diff.minute }}</h1>
                    </div>:
                    <div class="flex items-center justify-center w-24 h-24 bg-gradient-2a rounded-2xl">
                        <h1 class="flex">{{ diff.second }}</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="relative h-72 bg-gradient-2b shadow-inner-fix">
            <div class="absolute w-full h-full opacity-40 bg-neutral-300"></div>
            <div class="relative flex flex-row-reverse items-center h-full mx-auto backdrop-filter backdrop-blur-xl max-w-7xl">
                <div class="flex items-center justify-center h-24 text-xl font-bold text-center bg-white w-72 rounded-3xl font-Montserrat">
                    Calon-Calon Ketua Organisasi
                </div>
            </div>
        </div>
        <div class="relative bg-white h-72 shadow-inner-fix">
            <div class="absolute w-full h-full opacity-40 bg-neutral-300"></div>
            <div class="relative flex flex-row items-center h-full mx-auto backdrop-filter backdrop-blur-xl max-w-7xl">
                <div class="flex items-center justify-center h-24 text-xl font-bold text-center bg-white w-72 rounded-3xl font-Montserrat">
                    Lihat Timeline
                </div>
            </div>
        </div>
        <div class="relative bg-orange-400 h-72 shadow-inner-fix">
            <div class="absolute w-full h-full opacity-40 bg-neutral-300"></div>
            <div class="relative flex flex-row-reverse items-center h-full mx-auto backdrop-filter backdrop-blur-xl max-w-7xl">
                <div class="flex items-center justify-center h-24 text-xl font-bold text-center bg-white w-72 rounded-3xl font-Montserrat">
                    Voting Sekarang
                </div>
            </div>
        </div>
    </div>
</template>


<script>
const futureDate = new Date(2021,11,10);
const getDateDiff = (date1,date2) =>{
    const diff = new Date(date2.getTime() - date1.getTime());
    return {
        year: diff.getFullYear(),
        month: diff.getUTCMonth(),
        day: diff.getUTCDate() - 1,
        hour: diff.getUTCHours()+(diff.getUTCDate()-1)*24,
        minute: diff.getUTCMinutes(),
        second: diff.getUTCSeconds(),
    }
};
export default{
    data(){
        return{
            futureDate,
            diff:{},
            timer: undefined,
        }
    },
    methods:{
        getDiff(){
            this.diff = getDateDiff(new Date(), futureDate);
        },
        formatDate(date){
            let d = newDate(date),
            month = (d.getMonth() + 1).toString(),
            day = (d.getDate() - 1).toString(),
            year = d.getFullYear().toString();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        }
    },
    beforeMount() {
    this.timer = setInterval(this.getDiff, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
}
</script>