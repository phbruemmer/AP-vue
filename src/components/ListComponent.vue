<template>
  <div class="list-container" ref="listContainer">
    <div class="item">
      <div class="block">
        <clockIcon />

        <h2 class="title">Öffnungszeiten</h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          harum esse temporibus ea nesciunt modi commodi quo pariatur et eaque
          ipsum repudiandae adipisci
        </p>
      </div>
    </div>

    <div class="item">
      <div class="block">
        <TextIcon />

        <h2 class="title">Sprechstunden</h2>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          harum esse temporibus
        </p>
      </div>
    </div>

    <div class="item">
      <div class="block">
        <holidaysIcon />

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

<script lang="ts" setup>
import clockIcon from "./icons/clock.vue";
import TextIcon from "./icons/text.vue";
import holidaysIcon from "./icons/holidays.vue";
</script>

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

.list-container {
  display: flex;
}

.block {
  margin: 10px 10%;
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

@media (max-width: 768px) {
  .item {
    width: 100vw;
  }
}
</style>

<!-- New Plan -->

<!-- 
- show only one item
- add the icons on a side bar
- make them clickable
- make fancy animations 
(everyone will think that 
I am not stupid because I can't 
implement a simple horizontal item 
carousel and wanted to be fancy... yep)
-->
