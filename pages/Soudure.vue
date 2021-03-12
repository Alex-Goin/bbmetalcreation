<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Infos :title="soudure.title" :description="soudure.description" :contact="true" />
      </div>

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
    this.banners = getImgs(require.context('~/assets/soudure/', true, /\.*$/))
  },
  computed: {
    soudure() {
      return this.$store.state.soudure
    },
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