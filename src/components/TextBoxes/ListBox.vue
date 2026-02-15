<template>
  <div class="box-container" @click="toggleBox()">
    <div class="main">
      <h2>{{ props.title }}</h2>

      <div class="arrow-container" :class="expanded ? 'expanded' : ''">
        <div class="arrow"></div>
      </div>
    </div>

    <div class="content-container" :class="{ open: expanded }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  title: string;
}>();

const expanded = ref<boolean>(false);

const toggleBox = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  transition: all 0.3s ease;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2vw;
}

.main h2 {
  font-family: "Tasa";
  font-size: 1.3rem;
  color: #222;
}

.arrow-container {
  padding: 12px;
  cursor: pointer;

  transition: all 0.1s ease;
}

.arrow-container.expanded {
  transform: rotate(-90deg);
}

.arrow {
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(45deg);
}

.content-container {
  margin-left: 6vw;
  width: 20vw;
  min-width: 250px;
  max-width: 450px;

  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.5s ease;
}

.content-container.open {
  max-height: 500px;
  opacity: 1;
}
</style>
