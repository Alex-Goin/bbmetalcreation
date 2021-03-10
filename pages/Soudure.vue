<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Infos :infos="soudure" />
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