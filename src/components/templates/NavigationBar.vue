<template>
  <div class="main-container">
    <transition name="appear">
      <DetachedNavbar
        v-if="
          scrollY >= 1200 && scrollY <= 8000 && !getStatus().value && isActive
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

const checkSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const onScroll = () => {
  scrollY.value = window.scrollY;
  console.log(scrollY.value);
  if (scrollY.value <= 800) isActive.value = true;
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
