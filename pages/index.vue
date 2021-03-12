<template>
  <div class="container">
    <div class="columns">
      <HomeLeft />
      <div class="column is-half">
        <PhotoBuefy :photos="banners" />
      </div>
    </div>
  </div>
</template>

<script>
import { getImgs } from '../plugins/getImgs'
export default {
  created() {
    this.banners = getImgs(require.context('~/assets/accueil/', true, /\.*$/))
  },
  data() {
    return {
      banners: [],
    }
  },
}
</script>

<style>
</style>
