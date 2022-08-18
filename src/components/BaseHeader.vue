<template>
  <b-navbar type="is-light" fixed-top wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="@/assets/logo.png" alt="logo" />
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
          <b-button
            icon-pack="mdi"
            icon-left="github"
            type="is-dark"
          >Github</b-button
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts" src="./BaseHeader.ts">
</script>
