<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="block">
          <div class="box is-shadowless">
            <h1 class="is-size-2 is-uppercase has-text-weight-light">{{ soudure.title }}</h1>
            <h2 class="is-size-4 has-text-weight-light">{{ soudure.infos}}</h2>
          </div>
        </div>
        <div class="block">
            <Contact />
        </div>
      </div>

      <div class="column is-half">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    soudure() {
      return this.$store.state.soudure
    },
  },
  data() {
    return {
      banners: this.$store.state.soudure.imgs,
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
}
</script>

<style>
</style>