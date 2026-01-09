<template>
  <div class="box-container">
    <Transition name="msg">
      <div
        class="msg-box"
        @click="close()"
        @touchstart="onTouchStart($event)"
        @touchend="onTouchEnd($event)"
        v-if="props.isOpen"
      >
        <p>{{ title }}</p>
        <p class="note">
          <slot></slot>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from "vue";

const props = defineProps<{
  title: string;
  isOpen: boolean;
  duration?: number;
}>();

const emits = defineEmits<{
  (e: "close"): void;
}>();

let autoCloseTimer: ReturnType<typeof setTimeout> | null = null;

const clearAutoCloseTimer = () => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
};

const close = () => {
  clearAutoCloseTimer();

  setTimeout(() => {
    emits("close");
  }, 100);
};

// Swipe to close
const startY = ref<number>(0);
const threshold = 50;

const onTouchStart = (e: TouchEvent): void => {
  if (e.touches.length > 0 && e.touches[0]) {
    startY.value = e.touches[0].clientY;
  }
};

const onTouchEnd = (e: TouchEvent): void => {
  if (e.changedTouches.length > 0 && e.changedTouches[0]) {
    const endY = e.changedTouches[0].clientY;
    const deltaY = startY.value - endY;

    if (deltaY > threshold) {
      // Execute swipe up
      swipeUp();
    }
  }
};

const swipeUp = (): void => {
  clearAutoCloseTimer();
  emits("close");
};

watch(
  () => props.isOpen,
  (newVal) => {
    clearAutoCloseTimer();
    if (newVal) {
      autoCloseTimer = setTimeout(() => {
        emits("close");
        autoCloseTimer = null;
      }, props.duration || 4500);
    }
  }
);

onUnmounted(() => {
  clearAutoCloseTimer();
});
</script>

<style scoped>
.box-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  pointer-events: none;
}

.msg-box {
  margin: 2vh 0;
  background: #fafafa;
  box-shadow: 0 0 16px #00000018;
  border-radius: 4px;
  padding: 1.5vh 2vw;

  z-index: 9999;
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 90%;
  max-width: 400px;
  box-sizing: border-box;

  pointer-events: all;

  transition: all 0.15s ease;
}

.msg-box:active {
  transform: scale(0.9);
}

.note {
  font-size: clamp(0.7em, 1.5vw, 0.9em);
  color: #555;
  line-height: 1.4;
  margin-bottom: 0.5em;
  word-wrap: break-word;
  border-radius: 2px;
  transition: all 0.2s ease;
}

/* Transition */
.msg-enter-active,
.msg-leave-active {
  transition: all 0.25s ease;
}

.msg-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.msg-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.msg-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.msg-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 350px) {
  .msg-box {
    padding: 2vh 3vw;
    top: 1vh;
  }
}
</style>
