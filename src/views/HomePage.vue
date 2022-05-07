<template>
  <section class="section">
      <div class="card">
        <div class="card-content">
          <div class="content has-text-centered">
            <h2 class="title">Welcome to Simple Encryption & Decryption Text</h2>
            <b-carousel>
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                    <span class="image">
                      <div class="columns is-flex is-overlay is-vcentered is-centered">
                        <div class="column">
                          <h1 class="title has-text-black-bis">{{carousel.text}}</h1>
                        </div>
                      </div>
                      <img :src="carousel.image" />
                    </span>
              </b-carousel-item>
            </b-carousel>
            <div class="section">
              <div class="content"><h3 class="subtitle">Please select</h3></div>
              <div class="buttons has-addons is-centered">
                <b-button
                  tag="router-link"
                  type="is-outlined is-success"
                  to="/encrypt">Encrypt</b-button>
                <b-button
                  tag="router-link"
                  type="is-outlined is-danger"
                  to="/decrypt">Decrypt</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts" src="./Home.ts">
</script>
