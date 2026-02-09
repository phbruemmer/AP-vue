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
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Fifth Box -->
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>

      <!-- Sixth Box -->
      <BlockBox title="Titel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at
        dignissimos necessitatibus.
      </BlockBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BlockBox from "./TextBoxes/BlockBox.vue";
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
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vh 2vw;
}
</style>
