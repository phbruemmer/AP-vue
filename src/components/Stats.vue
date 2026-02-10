<template>
  <div class="statistics-container" ref="target">
    <div class="content">
      <div class="text-containers">
        <div class="counter" v-if="(isMobile && currentStat == 0) || !isMobile">
          <h1>{{ numOne }}%</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            cupiditate fugiat earum perferendis
          </p>
        </div>

        <div class="counter" v-if="(isMobile && currentStat == 1) || !isMobile">
          <h1>{{ numTwo }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            cupiditate fugiat earum perferendis
          </p>
        </div>

        <div class="counter" v-if="(isMobile && currentStat == 2) || !isMobile">
          <h1>{{ numThree }}%</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            cupiditate fugiat earum perferendis
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";

// Counter Start //
const firstNumber = 90;
const secondNumber = 43;
const thirdNumber = 85;

const numOne = ref<number>(0);
const numTwo = ref<number>(0);
const numThree = ref<number>(0);

const animateCounter = (target: number, counter: any, duration = 750) => {
  const start = performance.now();

  function update(now: number) {
    const elapsed = now - start;

    if (elapsed < duration) {
      counter.value = Math.floor((elapsed / duration) * target);
      requestAnimationFrame(update);
    } else {
      counter.value = target;
    }
  }

  requestAnimationFrame(update);
};

const startCounting = () => {
  animateCounter(firstNumber, numOne);
  animateCounter(secondNumber, numTwo);
  animateCounter(thirdNumber, numThree);
};
// Counter End //

const isMobile = ref<boolean>(false);
const currentStat = ref<number>(0);

const target = useTemplateRef("target");
const targetVisible = useElementVisibility(target, {
  threshold: 0.5,
});

const checkSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const updateStat = () => {
  if (isMobile) {
    currentStat.value = Math.floor(Math.random() * 3);
  }
};

watch(targetVisible, () => {
  startCounting();
});

onMounted(() => {
  checkSize();
  updateStat();
  window.addEventListener("resize", checkSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkSize);
});
</script>

<style scoped>
.statistics-container {
  background: linear-gradient(to bottom, #2c3f50 40%, #3a556d 100%);

  height: 60vh;
  width: 100vw;

  transform: translateY(-10vh);
  z-index: 0;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.content {
  height: 50vh;
  width: 100%;

  display: flex;
  flex-direction: column;
}

.content .text-containers {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.counter {
  width: 20vw;
  max-width: 400px;
}

.counter h1 {
  color: #fff;
  font-family: "Tasa-Bold";
  font-weight: 400;
  margin: 2vh 0;
}

.counter p {
  color: #fff;
  font-size: 1.2rem;
  margin: 0;
}

@media (max-width: 768px) {
  .counter {
    width: 90%;
  }
}
</style>
