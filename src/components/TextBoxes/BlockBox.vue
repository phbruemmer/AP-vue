<template>
  <div class="main">
    <div class="block">
      <h3 class="title">{{ title }}</h3>
      <p class="content">
        <slot />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}

.block {
  width: 80%;
  max-width: 600px;

  text-align: left;

  padding: 20px 20px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.025);

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.block:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.title {
  margin-bottom: 8px;

  font-family: "Bebas";
  font-size: 1.25rem;
  letter-spacing: 1.5px;
  font-weight: 400;
}

.content {
  margin: 0;
  line-height: 1.6;
  color: #444;
}
</style>
