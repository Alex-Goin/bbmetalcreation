<template>
  <nav class="navbar has-background-grey-lighter block" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href=".">
          <span class="icon-text is-size-3 ml-3">
            <span class="icon">
              <i class="fas fa-tools"></i>
            </span>
            <span class="ml-4 is-uppercase has-text-weight-light is-size-2">
              {{ nav.brand }}
            </span>
          </span>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="shownav = !shownav"
          :class="{ 'is-active': shownav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': shownav }"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <NuxtLink class="button is-dark is-size-5" :to="nav.links[0].url"> {{ nav.links[0].name }} </NuxtLink>
              <NuxtLink class="button is-dark is-size-5" :to="nav.links[1].url"> {{ nav.links[1].name }} </NuxtLink>
              <NuxtLink class="button is-dark is-size-5" :to="nav.links[2].url"> {{ nav.links[2].name }} </NuxtLink>
              <NuxtLink class="button is-dark is-size-5" :to="nav.links[3].url"> {{ nav.links[3].name }} </NuxtLink>
              <NuxtLink class="button is-size-5 is-success" :to="nav.links[4].url"> {{ nav.links[4].name }} </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      shownav: false,
    }
  },
  computed: {
    nav() {
      return this.$store.state.navbar
    },
  },
}
</script>

<style>
.nav_title {
  font-family: 'Raleway', sans-serif;
}
.mysvg {
  font-size: 3em;
}
</style>
