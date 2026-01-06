<template>
  <div class="navbar">
    <nav class="nav">
      <a href="#news" class="animated-link">News</a>
      <a href="#appointments" class="animated-link">Termine</a>
    </nav>

    <div class="title"><h2>placeholder</h2></div>

    <nav class="nav">
      <a href="#services" class="animated-link">Leistungen</a>
      <a href="#calendar" class="animated-link">Kalender</a>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;

  background: transparent;
  padding: 10px 0;
}

.title h2 {
  display: fixed;
  color: #fff;
  width: 30%;
}

.nav {
  width: 35%;
  display: flex;
  justify-content: space-evenly;
}

.nav a {
  margin: 20px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav a.animated-link {
  position: relative;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav a.animated-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.2s ease;
}

.nav a.animated-link:hover {
  color: #fff;
}

.nav a.animated-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
