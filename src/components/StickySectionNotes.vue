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
        <StandardTextBox ref="stdBox1" />

        <StandardTextBox ref="stdBox2" />

        <StandardTextBox ref="stdBox3" />

        <StandardTextBox ref="stdBox4" />
      </div>
      <div class="right">
        <div class="cta-element"></div>
      </div>
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script lang="ts" setup>
import StandardTextBox from "./TextBoxes/StandardTextBox.vue";
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

.right .cta-element {
  width: 30rem;
  height: 30rem;

  border-radius: 50% 50% 2px 50%;

  background: #2e685b;
  position: sticky;
  top: 25%;
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
</style>
