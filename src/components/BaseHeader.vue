<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>

      <button @click="makeBurger" type="button" class="button navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-bind:class="{ 'is-active': activator }">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>

        <router-link class="navbar-item" to="/encrypt">
          Encrypt
        </router-link>

        <router-link class="navbar-item" to="/decrypt">
          Decrypt
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <o-button icon-pack="mdi" icon-left="github" variant="dark">Github</o-button>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script lang="ts" src="./BaseHeader.ts">
</script>
