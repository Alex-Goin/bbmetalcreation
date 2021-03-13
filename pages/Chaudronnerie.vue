<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Infos :title="chaudronnerie.title" :description="chaudronnerie.description" :contact="true" :descriptions="chaudronnerie.descriptions" :description_fin="chaudronnerie.description_fin"/>  
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
    this.banners = getImgs(require.context('~/assets/chaudronnerie/', true, /\.*$/))
  },
  computed: {
    chaudronnerie() {
      return this.$store.state.chaudronnerie
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