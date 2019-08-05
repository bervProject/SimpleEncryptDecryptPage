<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="title">Decryption</h1>
          <b-field label="Content">
            <b-input type="textarea" v-model="content" required></b-input>
          </b-field>
          <b-field label="Key">
            <b-input type="password" v-model="key" min="5" required password-reveal></b-input>
          </b-field>
          <b-button type="is-success" @click="decryptNow">Decrypt</b-button>
          <b-field label="Result">
            <div class="card">
              <div class="card-content">
                {{result}}
              </div>
            </div>
          </b-field>
          <div class="buttons is-centered">
            <b-button tag="router-link" type="is-danger" to="/">Home</b-button>
            <b-button tag="router-link" type="is-link" to="/encrypt">Encrypt</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import CryptoJS from 'crypto-js';

export default Vue.extend({
  data() {
    return {
      content: '',
      key: '',
      result: '',
    };
  },
  methods: {
    decryptNow() {
      if (this.content && this.key) {
        const resultChiper = CryptoJS.AES.decrypt(this.content, this.key);
        this.result = resultChiper.toString(CryptoJS.enc.Utf8);
      } else {
        this.$buefy.snackbar.open({
          message: 'Please fill all form',
          type: 'is-danger',
        });
      }
    },
  },
});
</script>

