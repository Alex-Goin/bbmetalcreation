<template>
  <div class="box has-text-weight-light is-radiusless">
    <div class="content has-text-centered">
      <span class="is-size-2 has-text-weight-light"> Me contacter </span>
    </div>

    <b-message type="is-info">
      <b-icon pack="far" icon="address-book" size="is-medium"></b-icon>
      {{ contact.address }} <br />

      <b-icon pack="fas" icon="phone" size="is-medium"></b-icon>
      <span
        ><a :href="'tel:+' + contact.phone">{{ contact.phone }}</a></span
      >
      <br />

      <b-icon pack="far" icon="envelope" size="is-medium"></b-icon>
      <span
        ><a :href="'mailto:' + contact.mail">{{ contact.mail }}</a></span
      >
      <br />

      <b-icon pack="fas" icon="map-marker-alt" size="is-medium"></b-icon>
      <span><a :href="contact.map" target="_blank">Me trouver</a></span> <br />

      <b-icon pack="far" icon="clock" size="is-medium"></b-icon>
      {{ contact.horaires }} <br />
    </b-message>
    <div class="content has-text-centered">
      <a :href="contact.facebook" target="_blank" class="is-size-3 mx-3">
        <b-icon pack="fab" icon="facebook-square" size="is-medium"></b-icon>
      </a>
      <a :href="contact.linkedin" target="_blank" class="is-size-3 mx-3">
        <b-icon pack="fab" icon="linkedin" size="is-medium"></b-icon>
      </a>
    </div>
    <section>
      <article>
        <p class="is-size-2 has-text-centered has-text-weight-light">
          Zones d'intervention
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-light">
          Toulouse, Montauban, Castres, Cahors, l'Occitanie, etc
        </p>
        <br />
        <img
          :src="require('~/assets/logo_occitanie.png')"
          alt="logo Occitanie"
        />
      </article>
    </section>
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

<style scoped>
.block {
  margin-bottom: 0.5em;
}
</style>