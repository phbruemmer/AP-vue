<template>
  <!-- Container -->
  <!-- Container Symbol -->
  <!-- Container Title -->
  <!-- Container Content -->

  <div class="content-container">
    <ListComponent />
  </div>
</template>

<script lang="ts" setup>
import ListComponent from "./ListComponent.vue";
</script>

<style scoped>
p {
  font-weight: 100;
  font-size: 12px;
  color: #ddd;
  margin: 0;
}

h2 {
  color: #fff;
}

.content-container {
  width: 100vw;
  min-height: 40vh;
  background: #2c3f50;

  display: flex;
  align-items: center;
}

@media (max-width: 480px) {
  .content-container {
    overflow-x: scroll;
  }
}
</style>
