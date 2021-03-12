<template>
<div class="container">
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="icon-text title ml-3">
            <span class="icon">
              <i class="fas fa-tools"></i>
            </span>
            <span class="ml-4 is-uppercase has-text-weight-light title is-hidden-mobile">
              BB Metal Creation
            </span>
          </span>
        
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
          <div class="buttons">
        <NuxtLink to="/" class="button is-radiusless"> Accueil </NuxtLink>
        <NuxtLink to="/chaudronnerie" class="button is-radiusless"> Chaudronnerie </NuxtLink>
        <NuxtLink to="/soudure" class="button is-radiusless"> Prestation soudure </NuxtLink>
        <NuxtLink to="/mobilier" class="button is-radiusless"> Mobilier métal </NuxtLink>
        <NuxtLink to="/contact" class="button is-primary is-radiusless"> Contact </NuxtLink>
          </div>
      </b-navbar-item>
    </template>
  </b-navbar>
  </div>
</template>
