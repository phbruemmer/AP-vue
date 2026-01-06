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
h3 {
  font-weight: 100;
}

.msg-box {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fafafa;
  box-shadow: 0 0 16px #00000018;
  border-radius: 2px;
  margin-top: 2vh;
  padding: 2vh 2vw;
}

.note {
  font-size: 0.8em;
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
  transition: opacity 0.25s ease, transform 0.25s ease;
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
</style>
