<template>
  <div class="box is-shadowless">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide has-text-centered is-vcentered"
          :key="banner"
          v-for="banner in banners"
        >
          <img :src="banner" style="max-height: 83vh; margin: 0 auto" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['banners'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoHeight: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        centeredSlides: true,
      },
    }
  },
  mounted() {
    //console.log('Current Swiper instance object', this.mySwiper)
  },
}
</script>