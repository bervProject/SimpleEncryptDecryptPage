<template>
  <b-navbar type="is-light" fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="@/assets/logo.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
      <b-navbar-dropdown label="Menu" hoverable>
        <b-navbar-item tag="router-link" to="/encrypt">Encrypt</b-navbar-item>
        <b-navbar-item tag="router-link" to="/decrypt">Decrypt</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-dark"
            href="https://github.com/bervProject/SimpleEncryptDecryptPage"
          >Github</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts" src="./BaseHeader.ts">
</script>
