<template>
  <Transition name="msg">
    <div class="msg-box" v-if="props.isOpen">
      <p>{{ title }}</p>
      <p class="note">
        <slot></slot>
      </p>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { watch } from "vue";

const props = defineProps<{
  title: string;
  isOpen: boolean;
}>();

const emits = defineEmits(["close"]);

watch(
  () => props.isOpen,
  () => {
    if (props.isOpen) {
      setTimeout(() => {
        emits("close");
      }, 4500);
    }
  }
);
</script>

<style scoped>
.msg-box {
  position: fixed;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  background: #fafafa;
  box-shadow: 0 0 16px #00000018;
  border-radius: 4px;
  padding: 1.5vh 2vw;
  z-index: 9999;

  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
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

.msg-enter-from,
.msg-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

.msg-enter-to,
.msg-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}

@media (max-width: 350px) {
  .msg-box {
    padding: 2vh 3vw;
    top: 1vh;
  }
}
</style>
