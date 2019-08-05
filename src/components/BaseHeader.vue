<template>
  <b-navbar type="is-info" fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">S-E-D</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
      <b-navbar-item tag="router-link" to="/encrypt">Encrypt</b-navbar-item>
      <b-navbar-item tag="router-link" to="/decrypt">Decrypt</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts" src="./BaseHeader.ts">
</script>
