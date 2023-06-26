<template>
  <section class="section">
    <div class="card">
      <div class="card-content">
        <div class="content has-text-centered">
          <h2 class="title">Welcome to Simple Encryption & Decryption Text</h2>
          <o-carousel>
            <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <span class="image">
                <div class="columns is-flex is-overlay is-vcentered is-centered">
                  <div class="column">
                    <h1 class="title has-text-black-bis">{{carousel.text}}</h1>
                  </div>
                </div>
                <img :src="carousel.image" alt="Carousel Image" />
              </span>
            </o-carousel-item>
          </o-carousel>
          <div class="section">
            <div class="content"><h3 class="subtitle">Please select</h3></div>
            <div class="buttons has-addons is-centered">
              <o-button
                tag="router-link"
                variant="success"
                outlined
                to="/encrypt">Encrypt</o-button>
              <o-button
                tag="router-link"
                variant="danger"
                outlined
                to="/decrypt">Decrypt</o-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Home.ts">
</script>
