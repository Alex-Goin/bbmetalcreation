<template>
  <div class="box is-shadowless is-radiusless">
    <b-carousel
      :indicator-inside="true"
      :autoplay="true"
      indicator-position="is-top"
      indicator-style="is-boxes"
    >
      <b-carousel-item v-for="(item, i) in photos" :key="i">
        <span class="image">
          <img :src="item" />
        </span>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: ['photos'],
}
</script>

<style scoped>
span > img {
  max-height: 90vh;
  height: auto;
  width: auto;
  margin: auto;
}
</style>