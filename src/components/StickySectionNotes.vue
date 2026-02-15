<template>
  <div class="main-container">
    <div class="top" id="appointments">
      <div class="cta">
        <h2>Termin online buchen - Schnell & unkompliziert</h2>
        <p>
          Sparen Sie sich das Warten am Telefon und buchen Sie Ihren Termin
          bequem online - rund um die Uhr.
        </p>
      </div>
    </div>

    <div class="upper-top">
      <button class="cta-btn">Termin wählen</button>
    </div>

    <div class="center">
      <div class="left">
        <!-- First Target -->
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

        <!-- Second Target -->
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

        <!-- Third Target -->
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

        <!-- Fourth Target -->
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
      <RightContainer :active="active" />
    </div>

    <div class="lower-center" id="calendar">
      <Calendar />
    </div>

    <div class="bottom"></div>
  </div>

  <!-- <Redirection /> // Only if wanted -->
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";

import StandardTextBox from "./TextBoxes/StandardTextBox.vue";
import Calendar from "./Calendar.vue";
import RightContainer from "./StickyNotesComponents/RightContainer.vue";

const isMobile = ref<boolean>(false);

type Active = null | "first" | "second" | "third" | "fourth";
const active = ref<Active>(null);

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
.main-container {
  z-index: 9999;
}

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
  font-family: "Tasa-Bold";
  font-size: clamp(1.5rem, 3.5vw, 3rem);
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
# # # # #             # # # # #
            Upper-Top
# # # # #             # # # # #
*/

.upper-top {
  height: 20vh;
  background: #5389b90e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-btn {
  position: relative;
  padding: 1.2rem 2.5rem;
  border-radius: 999px;
  border: 2px solid transparent;

  background:
    linear-gradient(#f6f9fb, #f6f9fb) padding-box,
    linear-gradient(270deg, #a588ef, #ff7ad9, #6be1ff, #a588ef) border-box;

  background-size:
    100% 100%,
    400% 400%;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  font-family: "Tasa-Semi";
  font-size: 1rem;
  color: #222;

  cursor: pointer;
  transition: all 0.1s ease;
}

.cta-btn:active {
  transform: translateY(2px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
}

/*
# # # # #           # # # # #
            Center
# # # # #           # # # # #
*/

.center {
  min-height: 100vh;
  max-width: 100%;
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
  opacity: 0.6;
}

.right-mobile {
  transform: translateX(50%);
}

.left-mobile {
  transform: translateX(-50%);
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
  background: linear-gradient(to top, #eee9f6 40%, #f6f9fb 100%);
  clip-path: ellipse(100% 100% at 50% 0%);
  position: relative;
  z-index: 9999;
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
