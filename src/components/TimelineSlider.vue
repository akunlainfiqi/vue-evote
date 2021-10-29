<template>
<div class="flex flex-row">
<div v-for="item in items" :key="item.id" class="m-4 my-auto">
  <div class="p-8 mx-auto border w-max border-main text-main">
    <div class="flex items-center justify-center w-32 h-32 p-4 mx-auto border-8 rounded-full border-main ">
      <h1 class="text-2xl font-bold break-inside-avoid font-Montserrat">{{ item.Tanggal }}</h1>
    </div>
    <div class="flex flex-col items-center justify-center font-Montserrat">
      <h1 class="text-xl font-semibold">{{ item.Bulan }}</h1>
      <h1 class="text-2xl font-bold">{{ item.nama }}</h1>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default{
  data(){
    return {
      items: [
        {
          id: 1,
          nama: "Pengumuman Calon Terdaftar",
          Tanggal: "21",
          Bulan: "Agustus"
        },
        {
          id: 2,
          nama: "Masa kampanye",
          Tanggal: "22-29",
          Bulan: "Agustus"
        },
        {
          id: 3,
          nama: "Masa Tenang",
          Tanggal: "30-06",
          Bulan: "Agustus-September"
        },
        {
          id: 4,
          nama: "Masa Pemilihan",
          Tanggal: "07-14",
          Bulan: "September"
        },
        {
          id: 5,
          nama: "Penghitungan Suara",
          Tanggal: "15",
          Bulan: "September"
        },
        {
          id: 6,
          nama: "Masa Gugat",
          Tanggal: "15-22",
          Bulan: "Masa Gugat"
        },
        {
          id: 7,
          nama: "Pengumuman Ketua Terpilih",
          Tanggal: "23",
          Bulan: "September"
        }
      ]
    }
  }
}
</script>