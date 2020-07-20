<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="content has-text-centered">
            <h2 class="title">Welcome to Simple Encryption & Decryption Text</h2>
            <b-carousel>
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                  <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                  </div>
                </section>
              </b-carousel-item>
            </b-carousel>
            <div class="section">
              <p class="content"><h3 class="subtitle">Please select</h3></p>
              <div class="buttons has-addons is-centered">
                <b-button tag="router-link" type="is-outlined is-success" to="/encrypt">Encrypt</b-button>
                <b-button tag="router-link" type="is-outlined is-danger" to="/decrypt">Decrypt</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Home.ts">
</script>