<template>
  <div class="main-container">
    <div class="title"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped></style>
