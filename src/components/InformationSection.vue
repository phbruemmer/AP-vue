<template>
  <!-- Container -->
  <!-- Container Symbol -->
  <!-- Container Title -->
  <!-- Container Content -->

  <div class="content-container">
    <div class="content-wrapper">
      <ListComponent />
    </div>
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
  min-height: 45vh;
  background: #2c3f50;
}

.content-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding-top: 8vh;
}

.block {
  max-width: 280px;
  display: grid;
  grid-template-rows: 46px 40px 1fr;
  row-gap: 12px;
  justify-items: center;
  align-items: start;
  text-align: center;
  transition: all 0.2s ease;
}

.block:hover {
  transform: translateY(-3px);
}

.content {
  margin-top: 15px;
}

@media (max-width: 480px) {
  .content-container {
    overflow-x: scroll;
  }
}
</style>
