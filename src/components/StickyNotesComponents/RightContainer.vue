<template>
  <div class="right">
    <div
      class="cta-element"
      :class="{
        first: props.active == 'first',
        second: props.active == 'second',
        third: props.active == 'third',
        fourth: props.active == 'fourth',
      }"
    >
      <Transition name="cta">
        <div
          v-if="props.active === 'first'"
          key="first"
          class="cta-content first-content"
        />
      </Transition>

      <Transition name="cta">
        <div
          v-if="props.active === 'second'"
          key="second"
          class="cta-content second-content"
        />
      </Transition>

      <Transition name="cta">
        <div
          v-if="props.active === 'third'"
          key="third"
          class="cta-content third-content"
        />
      </Transition>

      <Transition name="cta">
        <div
          v-if="props.active === 'fourth'"
          key="fourth"
          class="cta-content fourth-content"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  active: null | "first" | "second" | "third" | "fourth";
}>();
</script>

<style scoped>
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
</style>
