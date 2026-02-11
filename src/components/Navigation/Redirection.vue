<template>
  <div class="redirect-container" @click="test = !test">
    <transition name="transition-left">
      <div class="box" v-if="test"></div>
    </transition>

    <transition name="transition-right">
      <div class="box" v-if="test"></div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const test = ref<boolean>(false);
</script>

<style scoped>
.redirect-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  z-index: 999999;
}

.box {
  background: #2c3f50;
}

.transition-left-enter-active,
.transition-left-leave-active,
.transition-right-enter-active,
.transition-right-leave-active {
  transition: all 0.4s ease;
}

.transition-left-enter-from,
.transition-left-leave-to {
  transform: translateX(-100%);
  border-radius: 0 50% 50% 0;
}

.transition-left-enter-to,
.transition-left-leave-from {
  transform: translateX(0);
  border-radius: 0;
}

.transition-right-enter-from,
.transition-right-leave-to {
  transform: translateX(100%);
  border-radius: 50% 0 0 50%;
}

.transition-right-enter-to,
.transition-right-leave-from {
  transform: translateX(0);
  border-radius: 0;
}
</style>
