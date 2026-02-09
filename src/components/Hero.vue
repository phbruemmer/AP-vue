<template>
  <div class="hero-container">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="hero-content">
      <h2 class="sub-title">Your Sub-title Here</h2>
      <h1 class="main-title">Your Main Title Here</h1>

      <transition name="arrow">
        <div class="arrow-container" @click="scrollTo('start')" v-if="isTop">
          <div class="arrow">
            <span class="arrow-down"></span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import Navbar from "./Navbar.vue";

const THRESHOLD = 150;
const isTop = ref<boolean>(false);

const scrollTo = (to: string) => {
  const element = document.getElementById(to);

  if (element) {
    element.scrollIntoView();
  }
};

const checkScroll = () => {
  isTop.value = window.scrollY <= THRESHOLD;
};

onMounted(() => {
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>
<style scoped>
.navbar {
  width: 100vw;
}

.hero-container {
  position: relative;
  height: 80vh;
  width: 100vw;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("../assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60vh;
}

.sub-title {
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
}

.main-title {
  font-family: "Bebas";
  font-weight: 100;
  font-size: 4.5rem;

  margin: 0.5rem 0 0;
  text-align: center;
  color: #fff;
}

.arrow-container {
  position: absolute;
  bottom: 2.5rem;
  background: #00000048;

  width: 3rem;
  height: 3rem;

  border-radius: 50%;
  display: inline-block;
  transition: all 0.2s ease;
}

.arrow-container:hover {
  transform: scale(1.15);
  cursor: pointer;
}

.arrow {
  transform: translateY(0.5rem);
}

.arrow-down {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
  border-radius: 1px;
  margin: 5px;
}

.arrow-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.arrow-enter-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.arrow-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.arrow-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.arrow-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.arrow-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
