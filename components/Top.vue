<template>
  <section class="hero is-fullheight" :id="id">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="block">
          <span class="main_title has-text-weight-medium"
            >B.B Metal Creation</span
          >
        </p>
        <p class="block">
          <a href="#5" class="button is-success is-light is-large py-5 px-6">
            <span class="icon">
              <i class="fas fa-id-card is-size-3"></i>
            </span>
            <span>Contact</span>
          </a>
        </p>
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
  props: ['id'],
}
</script>

<style>
.main_title {
  font-size: 10vw;
  word-spacing: 3vw;
  letter-spacing: 1vw;
  font-family: 'Shippori Mincho B1', sans-serif;
}
</style>
