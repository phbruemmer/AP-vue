<template>
  <nav :class="{ 'nav-hidden': isNavHidden }">
    <div class="main">
      <div class="title">
        <a href="/">Zurück</a>
      </div>

      <div class="primary-nav desktop">
        <a
          class="nav-tag"
          v-for="(value, i) in nav_links"
          :key="i"
          @click="scroll_to(value)"
        >
          {{ value.toUpperCase() }}
        </a>
      </div>

      <div class="hamburger" @click="toggleMobileMenu">
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="primary-nav mobile">
      <a
        class="nav-tag"
        style="color: var(--color-textPrimary)"
        v-for="(value, i) in nav_links"
        :key="i"
        @click="
          scroll_to(value);
          toggleMobileMenu();
        "
      >
        {{ value.toUpperCase() }}
      </a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const nav_links = ["impressum", "haftungsausschluss", "datenschutz"];

const isNavHidden = ref(false);
const isMobileMenuOpen = ref(false);

const scroll_to = (destination: string) => {
  const element = document.getElementById(destination);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleScroll = () => {
  isNavHidden.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 3rem;
}

.primary-nav.desktop {
  display: flex;
  gap: 3rem;
}

a {
  font-size: clamp(1rem, 1vw, 1.45rem);
  transition: all 0.2s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-text, #000);
}

a:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  transform: scale(0.95);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  cursor: pointer;
  z-index: 1100;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--color-background);
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform-origin: center;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(7.5px, 7.5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(7.5px, -7.5px);
}

.primary-nav.mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  background-color: var(--color-background);
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .primary-nav.desktop {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
