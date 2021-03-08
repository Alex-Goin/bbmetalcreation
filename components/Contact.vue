<template>
  <div class="box has-text-weight-light">
    <div class="hero is-warning is-small">
      <div class="hero-body">
        <h1 class="is-size-2 has-text-centered has-text-weight-light">
          Me contacter
        </h1>
      </div>
    </div>
    <div class="content is-size-5">
      <!-- Address -->
      <span class="icon-text">
        <span class="icon"><i class="far fa-address-book"></i></span>
        <span>{{ contact.address }}</span> </span
      ><br />

      <!-- Telephone -->
      <span class="icon-text">
        <span class="icon"><i class="fas fa-phone"></i></span>
        <span
          ><a :href="'tel:+' + contact.phone">{{ contact.phone }}</a></span
        > </span
      ><br />

      <!-- Mail -->
      <span class="icon-text">
        <span class="icon"><i class="far fa-envelope"></i></span>
        <span
          ><a :href="'mailto:' + contact.mail">{{ contact.mail }}</a></span
        > </span
      ><br />

      <!-- Map -->
      <span class="icon-text">
        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
        <span
          ><a :href="contact.map" target="_blank">Me trouver</a></span
        > </span
      ><br />

      <!-- Horaires -->
      <span class="icon-text">
        <span class="icon"><i class="far fa-clock"></i></span>
        <span>{{ contact.horaires }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.state.contact
    },
  },
}
</script>

<style>
</style>