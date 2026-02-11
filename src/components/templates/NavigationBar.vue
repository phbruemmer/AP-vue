<template>
  <transition name="appear">
    <div
      class="nav-toggle"
      v-if="
        scrollY >= 1200 && scrollY <= 8000 && !getStatus().value && !isMobile
      "
      @click="toggleNavbar()"
    >
      <div class="toggle long"></div>
      <div class="toggle"></div>
    </div>
  </transition>

  <div class="main-container">
    <transition name="appear">
      <DetachedNavbar
        v-if="
          scrollY >= 1200 &&
          scrollY <= 8000 &&
          !getStatus().value &&
          isActive &&
          !isMobile
        "
        @close="isActive = false"
      >
      </DetachedNavbar>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import DetachedNavbar from "../DetachedNavbar.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getStatus } from "../../composables/popUp";

const isActive = ref<boolean>(true);
const isMobile = ref<boolean>(false);
const scrollY = ref<number>(0);

const toggleNavbar = () => {
  isActive.value = !isActive.value;
};

const checkSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const onScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  checkSize();
  window.addEventListener("resize", checkSize);
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkSize);
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.nav-toggle {
  position: fixed;
  top: 6vh;
  left: 2vw;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 9999;
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

.nav-toggle:active {
  transform: translateY(-50%) scale(0.9);
}

.toggle {
  height: 2px;
  width: 24px;
  border-radius: 2px;
  border-bottom: 2px solid #222;
}

.toggle.long {
  width: 32px;
}

.main-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 99999;
}

.appear-enter-active,
.appear-leave-active {
  transition: all 0.2s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.appear-enter-to,
.appear-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
