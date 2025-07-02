<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">
            Encryption
          </h1>
          <o-field label="Content">
            <o-input
              v-model="content"
              type="textarea"
              required
            />
          </o-field>
          <o-field label="Key">
            <o-input
              v-model="key"
              type="password"
              min="5"
              required
              password-reveal
            />
          </o-field>
          <div class="has-text-centered">
            <o-button
              id="encrypt-button"
              variant="success"
              size="large"
              @click="encryptNow"
            >
              Encrypt
            </o-button>
          </div>
          <o-field label="Result">
            <div class="card">
              <div class="card-content">
                {{ result }}
              </div>
            </div>
          </o-field>
          <div class="buttons has-addons is-centered">
            <o-button
              tag="router-link"
              variant="danger"
              outlined
              to="/"
            >
              Home
            </o-button>
            <o-button
              tag="router-link"
              variant="link"
              outlined
              to="/decrypt"
            >
              Decrypt
            </o-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Encryption.ts">
</script>
