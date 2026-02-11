<template>
  <div class="navigation">
    <a href="#services" class="animated-link">Leistungen</a>
    <a href="#appointments" class="animated-link">Termine</a>

    <a href="#calendar" class="animated-link">Kalender</a>
    <a href="#info" class="animated-link">Informationen</a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.navigation {
  position: fixed;
  top: 2vh;
  bottom: 0;

  height: 8vh;
  padding: 0 2vw;
  border-radius: 50px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4vw;
  background: #f5f5fe;
  transition: all 0.1s ease;
}

.navigation:active {
  transform: scale(0.98);
}

.navigation a {
  margin: 20px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.navigation a.animated-link {
  position: relative;
  color: #222;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navigation a.animated-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background-color: #222;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.2s ease;
}

.navigation a.animated-link:hover {
  color: #222;
}

.navigation a.animated-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
