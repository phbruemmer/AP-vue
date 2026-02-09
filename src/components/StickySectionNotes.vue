<template>
  <div class="main-container">
    <div class="top">
      <div class="cta">
        <h2>Termin online buchen - Schnell & unkompliziert</h2>
        <p>
          Sparen Sie sich das Warten am Telefon und buchen Sie Ihren Termin
          bequem online - rund um die Uhr.
        </p>
      </div>
    </div>

    <div class="center">
      <div class="left">
        <div ref="firstTarget">
          <StandardTextBox />

          <transition name="appear">
            <div
              class="mobile-CTA-Container"
              v-if="isMobile && active == 'first'"
            >
              <div class="mobile-container-bg first right-mobile"></div>
            </div>
          </transition>
        </div>

        <div ref="secondTarget">
          <StandardTextBox />

          <transition name="appear">
            <div
              class="mobile-CTA-Container"
              v-if="isMobile && active == 'second'"
            >
              <div class="mobile-container-bg second left-mobile"></div>
            </div>
          </transition>
        </div>

        <div ref="thirdTarget">
          <StandardTextBox />

          <transition name="appear">
            <div
              class="mobile-CTA-Container"
              v-if="isMobile && active == 'third'"
            >
              <div class="mobile-container-bg third right-mobile"></div>
            </div>
          </transition>
        </div>

        <div ref="fourthTarget">
          <StandardTextBox />

          <transition name="appear">
            <div
              class="mobile-CTA-Container"
              v-if="isMobile && active == 'fourth'"
            >
              <div class="mobile-container-bg fourth left-mobile"></div>
            </div>
          </transition>
        </div>
      </div>
      <div class="right">
        <div
          class="cta-element"
          :class="{
            first: active == 'first',
            second: active == 'second',
            third: active == 'third',
            fourth: active == 'fourth',
          }"
        >
          <Transition name="cta">
            <div
              v-if="active === 'first'"
              key="first"
              class="cta-content first-content"
            />
          </Transition>

          <Transition name="cta">
            <div
              v-if="active === 'second'"
              key="second"
              class="cta-content second-content"
            />
          </Transition>

          <Transition name="cta">
            <div
              v-if="active === 'third'"
              key="third"
              class="cta-content third-content"
            />
          </Transition>

          <Transition name="cta">
            <div
              v-if="active === 'fourth'"
              key="fourth"
              class="cta-content fourth-content"
            />
          </Transition>
        </div>
      </div>
    </div>

    <div class="lower-center">
      <Calendar />
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from "@vueuse/core";
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from "vue";

import StandardTextBox from "./TextBoxes/StandardTextBox.vue";
import Calendar from "./Calendar.vue";

type Active = null | "first" | "second" | "third" | "fourth";
const active = ref<Active>(null);

const isMobile = ref<boolean>(false);

const firstTarget = useTemplateRef("firstTarget");
const firstTargetVisible = useElementVisibility(firstTarget, {
  threshold: 0.9,
});

const secondTarget = useTemplateRef("secondTarget");
const secondTargetVisible = useElementVisibility(secondTarget, {
  threshold: 0.9,
});

const thirdTarget = useTemplateRef("thirdTarget");
const thirdTargetVisible = useElementVisibility(thirdTarget, {
  threshold: 0.9,
});

const fourthTarget = useTemplateRef("fourthTarget");
const fourthTargetVisible = useElementVisibility(fourthTarget, {
  threshold: 0.9,
});

watch(
  [
    firstTargetVisible,
    secondTargetVisible,
    thirdTargetVisible,
    fourthTargetVisible,
  ],
  ([first, second, third, fourth]) => {
    if (fourth) active.value = "fourth";
    else if (third) active.value = "third";
    else if (second) active.value = "second";
    else if (first) active.value = "first";
  },
);

// Mobile integration
const checkSize = () => {
  isMobile.value = window.innerWidth <= 924;
};

onMounted(() => {
  checkSize();
  window.addEventListener("resize", checkSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkSize);
});
</script>

<style scoped>
/*
# # # # #         # # # # #
            Top
# # # # #         # # # # #
*/

.top {
  height: 40vh;
  background: linear-gradient(to bottom, #7753b921 40%, #5389b90e 100%);
  clip-path: ellipse(100% 100% at 50% 100%);

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.top .cta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
}

.top .cta h2 {
  font-family: "Bebas";
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: 1px;
  margin: 1vh 0;
  width: 100%;
  max-width: 500px;
}

.top .cta p {
  width: 100%;
  max-width: 500px;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: 1.5;
}

/*
# # # # #           # # # # #
            Center
# # # # #           # # # # #
*/

.center {
  min-height: 100vh;
  background: #5389b90e;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.left {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 45vh;
  padding: 7.5rem 0;
}

.right {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.cta-element {
  width: clamp(18rem, 30vw, 30rem);
  aspect-ratio: 1 / 1;

  border-radius: 50% 50% 2px 50%;
  position: sticky;
  top: 25%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
}

.cta-content {
  position: absolute;

  width: 80%;
  height: 60%;
  border-radius: 16px;

  background: #ffffff;
  box-shadow: 0 4px 4px #00000011;

  transform: translateX(-50%);
}

/* Mobile CTA */
.mobile-CTA-Container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-container-bg {
  position: absolute;

  width: 20rem;
  height: 20rem;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.6;
}

.right-mobile {
  transform: translateX(-50%);
}

.left-mobile {
  transform: translateX(50%);
}

/*
# # # # #               # # # # #
            Lower-Center
# # # # #               # # # # #
*/

.lower-center {
  background: #5389b90e;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20vh;
}

/*
# # # # #           # # # # #
            Bottom
# # # # #           # # # # #
*/

.bottom {
  height: 40vh;
  background: linear-gradient(to top, #7753b918 40%, #5389b90e 100%);
  clip-path: ellipse(100% 100% at 50% 0%);
}

/* Bubble Colors */
.first {
  background-color: #b888fa;
  box-shadow: 0 4px 4px #b788fa23;
}

.second {
  background-color: #276fbf;
  box-shadow: 0 4px 4px #276ebf23;
}

.third {
  background-color: #d64550;
  box-shadow: 0 4px 4px #d645512a;
}

.fourth {
  background-color: #f1c40f;
  box-shadow: 0 4px 4px #f1c40f29;
}

/* CTA-Content style */
.first-content {
  background-image: url("https://wallpapercave.com/wp/wp4854991.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.second-content {
  background-image: url("https://www.pixelstalk.net/wp-content/uploads/2016/12/Free-Beautiful-Landscape-Image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.third-content {
  background-image: url("https://th.bing.com/th/id/R.91b787ec89a49140e9c73be53271a03b?rik=Yjdehc0JKgaohA&pid=ImgRaw&r=0");
  background-repeat: no-repeat;
  background-size: cover;
}

.fourth-content {
  background-image: url("https://img1.akspic.ru/crops/4/0/3/2/22304/22304-otrazhenie-pejzazhi_gor-priroda-prirodnyj_zapovednik-dikaya_mestnost-1920x1080.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* CTA-Content animation */
.cta-enter-active,
.cta-leave-active {
  transition: all 0.3s ease;
}

.cta-enter-from,
.cta-leave-to {
  opacity: 0;
  transform: translateX(0) scale(50%);
}

.cta-enter-to,
.cta-leave-from {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

/* Appear Animation */
.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s ease;
}

.appear-enter-from,
.appear-leave-to {
  transform: scale(0);
}

.appear-enter-to,
.appear-leave-from {
  transform: scale(1);
}

@media (max-width: 1024px) {
  .cta-element {
    top: 15%;
  }
}

@media (max-width: 924px) {
  .right {
    display: none;
  }

  .center {
    display: flex;
    justify-content: center;
  }
}
</style>

<!--

1: sliding / rotating blocks coming into view - CTA appears in the center

2: CTA elements appear one by one (total 3 elements)

3: circular CTA element appear

4: Blocks appear at both edges - centered CTA appears

-->
