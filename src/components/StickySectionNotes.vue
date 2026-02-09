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
        </div>

        <div ref="secondTarget">
          <StandardTextBox />
        </div>

        <div ref="thirdTarget">
          <StandardTextBox />
        </div>

        <div ref="fourthTarget">
          <StandardTextBox />
        </div>
      </div>
      <div class="right">
        <div
          class="cta-element"
          :class="{
            first: firstTargetVisible,
            second: secondTargetVisible,
            third: thirdTargetVisible,
            fourth: fourthTargetVisible,
          }"
        >
          <div class="cta-content" v-if="active == 'first'"></div>

          <div class="cta-content" v-if="active == 'second'"></div>

          <div class="cta-content" v-if="active == 'third'"></div>

          <div class="cta-content" v-if="active == 'fourth'"></div>
        </div>
      </div>
    </div>

    <div class="lower-center">
      <AppointmentCTA />
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from "@vueuse/core";
import { ref, useTemplateRef, watch } from "vue";

import StandardTextBox from "./TextBoxes/StandardTextBox.vue";
import AppointmentCTA from "./templates/AppointmentCTA.vue";

type Active = null | "first" | "second" | "third" | "fourth";
const active = ref<Active>(null);

const firstTarget = useTemplateRef("firstTarget");
const firstTargetVisible = useElementVisibility(firstTarget, {
  threshold: 0.75,
});

const secondTarget = useTemplateRef("secondTarget");
const secondTargetVisible = useElementVisibility(secondTarget, {
  threshold: 0.75,
});

const thirdTarget = useTemplateRef("thirdTarget");
const thirdTargetVisible = useElementVisibility(thirdTarget, {
  threshold: 0.75,
});

const fourthTarget = useTemplateRef("fourthTarget");
const fourthTargetVisible = useElementVisibility(fourthTarget, {
  threshold: 0.75,
});

watch(
  [
    firstTargetVisible,
    secondTargetVisible,
    thirdTargetVisible,
    fourthTargetVisible,
  ],
  ([first, second, third, fourth]) => {
    if (first) active.value = "first";
    else if (second) active.value = "second";
    else if (third) active.value = "third";
    else if (fourth) active.value = "fourth";
    else active.value = null;
  },
);
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
  align-items: center;
}

.top .cta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.top .cta h2 {
  font-family: "Bebas";
  font-size: 3.5rem;
  letter-spacing: 1px;
  margin: 1vh;
  width: 500px;
}

.top .cta p {
  width: 350px;
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
}

.cta-element {
  width: 30rem;
  height: 30rem;

  border-radius: 50% 50% 2px 50%;

  position: sticky;
  top: 25%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: all 0.2s ease;
}

.cta-content {
  width: 20rem;
  height: 40%;
  border-radius: 16px;

  background: #ffffff;
  box-shadow: 0 4px 4px #00000011;

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

  padding-top: 16vh;
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
</style>
