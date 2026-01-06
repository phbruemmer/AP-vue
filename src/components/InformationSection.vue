<template>
  <!-- Container -->
  <!-- Container Symbol -->
  <!-- Container Title -->
  <!-- Container Content -->

  <div class="content-container">
    <div class="content-wrapper">
      <div class="block">
        <svg
          width="46px"
          height="46px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ffffff"
        >
          <path
            d="M12 6L12 12L18 12"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h2 class="title">Öffnungszeiten</h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          harum esse temporibus ea nesciunt modi commodi quo pariatur et eaque
          ipsum repudiandae adipisci
        </p>
      </div>

      <div class="block">
        <svg
          width="46px"
          height="46px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ffffff"
        >
          <path
            d="M7 12L17 12"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 8L13 8"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z"
            stroke="#ffffff"
            stroke-width="1"
          ></path>
        </svg>
        <h2 class="title">Sprechstunden</h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          harum esse temporibus
        </p>
      </div>

      <div class="block">
        <svg
          width="46px"
          height="46px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ffffff"
        >
          <path
            d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 2V6"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h2 class="title">Feiertage</h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          harum esse temporibus ea nesciunt modi commodi quo pariatur et eaque
          ipsum repudiandae adipisci neque
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
p {
  font-weight: 100;
  font-size: 12px;
  color: #ddd;
  margin: 0;
}

h2 {
  color: #fff;
}

.content-container {
  width: 100vw;
  height: 40vh;
  background: #2c3f50;
}

.content-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding-top: 8vh;
}

.block {
  max-width: 280px;
  display: grid;
  grid-template-rows: 46px 40px 1fr;
  row-gap: 12px;
  justify-items: center;
  align-items: start;
  text-align: center;
  transition: all 0.2s ease;
}

.block:hover {
  transform: translateY(-3px);
}

.content {
  margin-top: 15px;
}
</style>
