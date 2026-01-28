<template>
  <div class="transition-container" v-if="showTransition">
    <div
      class="block"
      :class="
        openingTransition ? 'opening' : closingTransition ? 'closing' : ''
      "
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

type Transition = "open" | "close";

const router = useRouter();

const props = defineProps<{
  type: Transition;
  destination?: string;
}>();

const showTransition = ref<boolean>(false);

const closingTransition = props.type === "close";
const openingTransition = props.type === "open";

const isPageReloaded = sessionStorage.getItem("reloaded") === "true";

const goTo = (destination: string) => {
  router.push({
    path: destination,
    state: {
      viaTransition: true,
    },
  });
};

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("reloaded", "true");
});

setTimeout(() => {
  if (props.destination && closingTransition) {
    goTo(props.destination);
  }
}, 300);

onMounted(() => {
  showTransition.value =
    !isPageReloaded &&
    ((history.state?.viaTransition === true && openingTransition) ||
      closingTransition);

  sessionStorage.removeItem("reloaded");
});
</script>

<style scoped>
.transition-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  border-radius: 6px;

  z-index: 9999;
  pointer-events: none;
}

.block {
  width: 100%;
  background: #2d465c;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

/* Closing Transition */
.closing {
  transform: translateX(-100%) translateY(-100%);
  animation-name: slide-in-close;
}

@keyframes slide-in-close {
  to {
    transform: translateX(0);
  }
}

/* Opening Transition */
.opening {
  transform: translateX(0);
  animation-name: slide-in-open;
}

@keyframes slide-in-open {
  to {
    transform: translateX(100%) translateY(100%);
  }
}
</style>
