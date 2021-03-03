<template>
  <section class="hero is-fullheight" :id="id">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="message has-background-light">
          <div class="message-header has-background-success">
            <span class="is-size-4 has-text-weight-light is-uppercase"
              >B.B Metal Creation</span
            >
          </div>
          <div class="message-body is-size-5">
            <div class="content">
              <p>
                <i class="far fa-address-card" />
                <span class="">{{ contact.address }}</span>
              </p>
              <p>
                <i class="fas fa-phone" /><span class="px-2">
                  {{ contact.phone }}</span
                >

                <i class="fas fa-at" />
                <a :href="contact.mail" target="_blank"
                  ><span class="px-2"> Me contacter par mail</span></a
                >

                <i class="fas fa-location-arrow" />
                <a :href="contact.map" target="_blank"
                  ><span class="px-2"> Me trouver</span></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-footer">
      <div class="container has-text-centered">
        <a class="button is-info is-light is-large my-6 px-6" href="#0">
          <i class="fas fa-arrow-up" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    contact() {
      return this.$store.state.footer
    },
  },
}
</script>

<style></style>
