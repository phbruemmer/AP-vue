<template>
  <div class="section-title">
    <h2>Leistungen</h2>
  </div>

  <div class="content-container">
    <div class="content-wrapper">
      <!-- First Box -->
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Second Box -->
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Third Box -->
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Fourth Box -->
      <BlockBox title="Titel" v-if="(isMobile && contentLoaded) || !isMobile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Fifth Box -->
      <BlockBox title="Titel" v-if="(isMobile && contentLoaded) || !isMobile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Sixth Box -->
      <BlockBox title="Titel" v-if="(isMobile && contentLoaded) || !isMobile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>
    </div>

    <p
      class="load-more"
      @click="contentLoaded = true"
      v-if="isMobile && !contentLoaded"
    >
      Mehr laden
    </p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import BlockBox from "./TextBoxes/BlockBox.vue";

const isMobile = ref<boolean>(false);
const contentLoaded = ref<boolean>(false);

const checkSize = () => {
  isMobile.value = window.innerWidth <= 896;
};

onMounted(() => {
  window.addEventListener("resize", checkSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkSize);
});
</script>

<style scoped>
h2 {
  font-family: "Bebas";
  font-size: 2.2rem;
  letter-spacing: 2px;
}

.section-title {
  text-align: center;
  margin: 15vh 0 3vh 0;
  color: #222;
  font-weight: 500;
}

.content-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2vw;
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vh 0;

  max-width: 1200px;
  margin: 0 auto;
}

.load-more {
  margin-top: 4vh;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 896px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    margin: 0 2vw;
  }
}
</style>
