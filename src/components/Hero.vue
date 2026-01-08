<template>
  <div class="hero-container">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="hero-content">
      <h2 class="sub-title">Your Sub-title Here</h2>
      <h1 class="main-title">Your Main Title Here</h1>
      <div class="arrow-container">
        <span class="arrow-down" @click="scrollTo('start')"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "./Navbar.vue";

const scrollTo = (to: string) => {
  const element = document.getElementById(to);

  if (element) {
    element.scrollIntoView();
  }
};
</script>
<style scoped>
.navbar {
  width: 100vw;
}

.hero-container {
  position: relative;
  height: 80vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
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
  margin: 0.5rem 0 0;
  font-size: 3rem;
  text-align: center;
  color: #fff;
}

.arrow-container {
  position: absolute;
  bottom: 2.5rem;
  display: inline-block;
  transition: all 0.2s ease;
}

.arrow-container:hover {
  transform: scale(1.15);
  cursor: pointer;
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
</style>
