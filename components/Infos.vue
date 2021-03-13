<template>
  <div class="div">
    <div class="block">
      <div class="box is-shadowless">
        <h1 class="is-size-2 is-uppercase has-text-weight-light">
          {{ infos.title }}
        </h1>
        <h2 class="is-size-4 has-text-weight-light">{{ infos.infos }}</h2>
      </div>
    </div>
    <div class="block">
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  props: ['infos'],
}
</script>

<style>
</style>