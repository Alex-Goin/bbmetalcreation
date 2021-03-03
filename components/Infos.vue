<template>
  <section class="hero is-fullheight" :id="id">
    <div class="hero-body">
      <div class="container">
        <div class="box has-text-centered">
          <h1 class="title is-size-1 has-text-light">{{ title }}</h1>
          <h2 class="subtitle is-size-4 has-text-light">{{ infos }}</h2>
        </div>
      </div>
    </div>
    <div class="hero-footer">
      <div class="container has-text-centered">
        <a
          class="button is-info is-light is-large my-6 px-6"
          :href="`#${id + 1}`"
        >
          <i class="fas fa-arrow-down" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'infos', 'id'],
}
</script>

<style scoped>
.box {
  background-color: rgba(0, 0, 4, 0.8);
}
</style>
