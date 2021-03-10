<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Infos :infos="chaudronnerie" />
      </div>

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