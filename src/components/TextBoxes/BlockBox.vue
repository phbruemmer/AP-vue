<template>
  <div class="block">
    <h3 class="title">{{ props.title }}</h3>
    <p class="content">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped>
.block {
  width: 40vw;
  max-width: 600px;
  border-radius: 16px;

  text-align: left;
  background: #f2f2f293;
  padding: 0 24px;

  cursor: pointer;
  transition: all 0.2s ease;
}

.block:hover {
  transform: translateY(-3px);
}

.title {
  font-family: "Bebas";
  letter-spacing: 2px;
  font-weight: 100;
}
</style>
