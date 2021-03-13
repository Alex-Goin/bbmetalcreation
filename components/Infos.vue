<template>
  <div class="block">
    <div class="block content">
      <div class="box is-shadowless is-radiusless">
        <h1 class="is-size-2 has-text-weight-light has-text-centered">
          {{ title }}
        </h1>
        <blockquote class="subtitle has-text-weight-light has-text-black">
          {{ description }}
        <div v-if="descriptions">
          <ul v-for="(item, index) in descriptions" :key="index">
            <li>{{item}}</li>
          </ul>
        </div>
        <div v-if="description_fin">
          <p><br>
          {{description_fin}}
          </p>
        </div>
        </blockquote>
      </div>
    </div>
    <div v-if="contact" class="block">
      <ContactBuefy />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "contact", "descriptions", 'description_fin'],
};
</script>

<style>
</style>