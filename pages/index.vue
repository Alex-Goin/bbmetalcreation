<template>
  <div class="container">
    <div class="columns">
      <HomeLeft />
      <!-- <HomeRight /> -->
      <div class="column is-half">
      <Photos :banners="banners" />
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
