<template>
  <div class="column has-text-weight-light">

    <!-- HEADER -->
    <Infos :title="infos.title" :description="infos.description" :contact="false"/>

    <!-- PARTENAIRES -->
    <Partenaires :partenaires="infos.partenaires" />

    <!-- CONTACT -->
    <div class="block">
      <ContactBuefy />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    infos() {
      return this.$store.state.header
    }
  },
}
</script>

<style>
</style>