<template>
  <div class="navigation" @click="emits('close')">
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 2vh;
  bottom: 0;

  height: 8vh;
  padding: 0 2vw;
  border-radius: 50px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4vw;
  background: #f5f5fe;
  transition: all 0.1s ease;
}

.navigation:active {
  transform: scale(0.9);
}
</style>
