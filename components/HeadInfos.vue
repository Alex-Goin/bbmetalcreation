<template>
  <section class="hero is-fullheight" :id="id">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="box px-6 py-6 has-text-light">
          <h1 class="title is-size-1 has-text-light is-uppercase">
            {{ title }}
          </h1>
          <h2
            class="subtitle is-size-4 has-text-light"
            v-html="description"
          ></h2>
          <div v-if="actions">
            <ul v-for="action in actions" :key="action" class="is-size-4">
              <li>{{ action }}</li>
            </ul>
          </div>
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
  props: ['title', 'description', 'actions', 'id'],
}
</script>

<style scoped>
.box {
  background-color: rgba(0, 0, 4, 0.8);
}
</style>
