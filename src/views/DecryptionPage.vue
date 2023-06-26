<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">Decryption</h1>
          <o-field label="Content">
            <o-input type="textarea" v-model="content" required />
          </o-field>
          <o-field label="Key">
            <o-input type="password" v-model="key" min="5" required password-reveal />
          </o-field>
          <div class="has-text-centered">
            <o-button variant="success" size="large" @click="decryptNow">Decrypt</o-button>
          </div>
          <o-field label="Result">
            <div class="card">
              <div class="card-content">{{result}}</div>
            </div>
          </o-field>
          <div class="buttons has-addons is-centered">
            <o-button tag="router-link" variant="danger" outlined to="/">Home</o-button>
            <o-button tag="router-link" variant="link" outlined to="/encrypt">Encrypt</o-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Decryption.ts">
</script>
