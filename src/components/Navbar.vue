<template>
  <div class="desktop-view">
    <RegularNavigationMenu :title="pageTitle" />
  </div>

  <div class="mobile-view">
    <HamburgerMenu :title="pageTitle" />
  </div>
</template>

<script lang="ts" setup>
import HamburgerMenu from "./Navigation/HamburgerMenu.vue";
import RegularNavigationMenu from "./Navigation/RegularNavigationMenu.vue";

const pageTitle = "placeholder";
</script>

<style scoped>
.mobile-view {
  display: none;
}

.desktop-view {
  display: flex;
}

@media (max-width: 768px) {
  .mobile-view {
    display: flex;
  }

  .desktop-view {
    display: none;
  }
}
</style>
