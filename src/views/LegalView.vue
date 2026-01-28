<template>
  <div class="hero-section">
    <book />
    <h2>Rechtsinformationen</h2>
    <button @click="goBack()">Zurück</button>
  </div>

  <div class="content">
    <DiagonalContainer />
  </div>

  <pageTransition type="open" />
  <pageTransition type="close" destination="./" v-if="startTransition" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import book from "../components/icons/book.vue";
import DiagonalContainer from "../components/Legal/DiagonalContainer.vue";
import pageTransition from "../components/transition/pageTransition.vue";

const startTransition = ref<boolean>(false);

const goBack = () => {
  startTransition.value = true;
};

import { onMounted, nextTick } from "vue";

onMounted(() => {
  nextTick(() => window.scrollTo(0, 0));
});
</script>

<style scoped>
button {
  padding: 12px 24px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #ffffff00;
  border: 2px dotted #fff;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ffffff0e;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #2c3f50;
  height: 60vh;
}

.hero-section h2 {
  color: #fff;
  font-size: clamp(1rem, 4vw, 3.5rem);
}

.hero-section h1:hover {
  cursor: default;
}
</style>
