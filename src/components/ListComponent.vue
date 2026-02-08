<template>
  <div class="list-container" ref="listContainer">
    <div class="arrow-container" @click="lastBlock()">
      <div class="arrow left"></div>
    </div>

    <div class="blocks">
      <div class="item" v-if="currentBlock == 0 || !isMobile">
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

      <div class="item" v-if="currentBlock == 1 || !isMobile">
        <div class="block">
          <TextIcon />

          <h2 class="title">Sprechstunden</h2>
          <p class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            harum esse temporibus
          </p>
        </div>
      </div>

      <div class="item" v-if="currentBlock == 2 || !isMobile">
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

    <div class="arrow-container" @click="nextBlock()">
      <div class="arrow right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import clockIcon from "./icons/clock.vue";
import TextIcon from "./icons/text.vue";
import holidaysIcon from "./icons/holidays.vue";
import { onMounted, onUnmounted, ref } from "vue";

const currentBlock = ref<number>(0);
const isMobile = ref<boolean>(false);

const nextBlock = () => {
  currentBlock.value = (currentBlock.value + 1 + 3) % 3;
};

const lastBlock = () => {
  currentBlock.value = (currentBlock.value - 1 + 3) % 3;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
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
  align-items: center;
  justify-content: center;

  width: 100vw;
}

.blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
}

.block {
  margin: 10px 0;
  max-width: 400px;
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

.arrow {
  display: none;

  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;

  width: 16px;
  height: 16px;

  border-radius: 2px;

  margin: 0 5vw;

  transition: all 0.2s ease;
}

.left {
  transform: rotate(45deg);
}

.left:active {
  transform: rotate(45deg) scale(1.2);
}

.right {
  transform: rotate(-135deg);
}

.right:active {
  transform: rotate(-135deg) scale(1.2);
}

@media (max-width: 768px) {
  .list-container {
    display: flex;
    justify-content: center;
  }

  .blocks {
    display: flex;
    justify-content: center;
  }

  .block {
    max-width: 350px;
    margin: 0 5vw;
  }

  .arrow {
    display: flex;
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
