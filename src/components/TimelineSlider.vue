<template>
  <div>
    <vueper-slides autoplay>
      <vueper-slide
        v-for="i of 10"
        :key="i"
        :title="`title ${i.toString()}`"
        :content="`slide ${i.toString()}`"
        :style="`background-color: ${colors[i % colors.length]}`"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "App",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      colors: ["red", "green", "blue"]
    };
  }
};
</script>