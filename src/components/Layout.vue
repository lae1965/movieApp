<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <div class="container">
    <Header />
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  min-height: 100dvh;
  width: 100dvw;
  background-color: #363232;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slot-wrapper {
  max-width: 1480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
