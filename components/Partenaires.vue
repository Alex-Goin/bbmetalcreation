<template>
  <div class="block">
    <div class="box is-shadowless is-radiusless">
      <h1 class="is-size-2 has-text-centered has-text-weight-light">
        Partenaires
      </h1>

      <div class="level">
        <a class="level-item" :href="partenaires[0].url" target="_blank">
          <b-image
            :src="partenaires[0].logo"
            :alt="partenaires[0].name"
            
          ></b-image>
        </a>
        <a class="level-item" :href="partenaires[1].url" target="_blank">
          <b-image
            :src="partenaires[1].logo"
            :alt="partenaires[1].name"
          ></b-image>
        </a>
      </div>

      <div class="level">
        <a class="level-item" :href="partenaires[2].url" target="_blank">
          <b-image
            :src="partenaires[2].logo"
            :alt="partenaires[2].name"
            style="width: 150px"
          ></b-image>
        </a>
        <a class="level-item" :href="partenaires[3].url" target="_blank">
          <h1 class="subtitle">{{partenaires[3].name}}</h1>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['partenaires'],
}
</script>

<style>
</style>