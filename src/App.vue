<script setup lang="ts">
import Layout from "./components/Layout.vue";
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

#app {
  overflow-y: auto;
}
</style>
