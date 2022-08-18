<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">Decryption</h1>
          <b-field label="Content">
            <b-input type="textarea" v-model="content" required />
          </b-field>
          <b-field label="Key">
            <b-input type="password" v-model="key" min="5" required password-reveal />
          </b-field>
          <div class="has-text-centered">
            <b-button type="is-success" size="is-large" @click="decryptNow">Decrypt</b-button>
          </div>
          <b-field label="Result">
            <div class="card">
              <div class="card-content">{{result}}</div>
            </div>
          </b-field>
          <div class="buttons has-addons is-centered">
            <b-button tag="router-link" type="is-outlined is-danger" to="/">Home</b-button>
            <b-button tag="router-link" type="is-outlined is-link" to="/encrypt">Encrypt</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Decryption.ts">
</script>
