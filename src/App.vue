<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style scoped></style>

<!--
Push to Dist: 
(I don't want to google the commands if I forget them)
npm run build
git add dist -f
git commit -m "commit message"
git subtree push --prefix dist origin gh-pages
-->
