<template>
  <div class="main">
    <div class="hero-section">
      <svg
        width="64px"
        stroke-width="1"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#ffffff"
      >
        <path
          d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
        ></path>
        <path
          d="M6 17L20 17"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
        ></path>
        <path
          d="M6 21L20 21"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
        ></path>
        <path
          d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M9 7L15 7"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
        ></path>
      </svg>
      <h2>Rechtsinformationen</h2>
      <button @click="click()">Zurück</button>
    </div>

    <div class="content">
      <DiagonalContainer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DiagonalContainer from "../components/Legal/DiagonalContainer.vue";
import router from "../router";

const click = () => {
  router.push("/");
};
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
  text-align: center;
  background-color: #2c3f50;
  padding: 20vh;
}

.hero-section h2 {
  color: #fff;
  font-size: clamp(1rem, 4vw, 3.5rem);
}

.hero-section h1:hover {
  cursor: default;
}
</style>
