<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Infos :title="mobilier.title" :description="mobilier.description" :contact="true" />
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
    this.banners = getImgs(require.context('~/assets/mobilier/', true, /\.*$/))
  },
  computed: {
    mobilier() {
      return this.$store.state.mobilier
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