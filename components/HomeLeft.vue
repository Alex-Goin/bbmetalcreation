<template>
  <div class="column has-text-weight-light">

    <!-- HEADER -->
    <div class="block">
      <div class="box is-shadowless">
        <h1
          class="is-size-2 is-uppercase has-text-weight-light has-text-centered"
        >
          {{ infos.title }}
        </h1>
        <h2 class="is-size-4 has-text-weight-light">{{ infos.description }}</h2>
        <span
          class="is-size-4 has-text-weight-light"
          v-for="(item, index) in infos.actions"
          :key="index"
        >
          {{ infos.actions.length - 1 === index ? item : item + ',' }}
        </span>
      </div>
    </div>

    <!-- PARTENAIRES -->
    <div class="block">
      <div class="box is-shadowless">
        <h1 class="is-size-2 is-uppercase has-text-centered has-text-weight-light">
          Partenaires
        </h1>
        <div class="columns is-vcentered">
          <div
            v-for="(item, index) in infos.partenaires"
            :key="index"
            class="column is-uppercase"
          >
            <a :href="item.url" target="_blank">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT -->
    <div class="block">
      <Contact />
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