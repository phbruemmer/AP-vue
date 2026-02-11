<template>
  <div class="navigation-container">
    <div class="title">
      <h2>{{ props.title }}</h2>
    </div>

    <div class="hamburger-container" @click="changeState()">
      <span class="line left" :class="{ closed: isOpen }"></span>
      <span class="line" :class="{ invisible: isOpen }"></span>
      <span class="line right" :class="{ closed: isOpen }"></span>
    </div>
  </div>

  <Transition name="nav">
    <nav class="nav-container" v-if="isOpen">
      <a href="#services" @click="changeState()">Leistungen</a>
      <a href="#appointments" @click="changeState()">Termine</a>

      <a href="#calendar" @click="changeState()">Kalender</a>
      <a href="#info" @click="changeState()">Informationen</a>
    </nav>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  title: string;
}>();

const isOpen = ref<boolean>(false);

const changeState = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin: 0 4vw;
}

.title h2 {
  display: fixed;
  color: #fff;
  width: 30%;
}

.hamburger-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hamburger-container:hover {
  cursor: pointer;
}

.line {
  background: #fff;
  width: 2.25rem;
  height: 2px;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.closed.left {
  transform: rotate(45deg) translateY(0.5625rem);
}

.closed.right {
  transform: rotate(-45deg) translateY(-0.5625rem);
}

.invisible {
  display: none;
}

.nav-container {
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-radius: 2px;
}

.nav-container a {
  margin: 20px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-container a:hover {
  transform: scale(0.9);
}

/* Transition */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

.nav-enter-to,
.nav-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
