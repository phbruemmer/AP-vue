<template>
  <div class="modal-wrapper" v-if="isOpen">
    <div class="modal-container">
      <div class="modal-navigation">
        <h3 class="title">{{ props.title }}</h3>
        <button class="close" @click="closeModal()"></button>
      </div>

      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  isOpen: boolean;
}>();

const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: #fafafa;
  box-shadow: 0 0 16px #00000022;
  border-radius: 2px;
  width: 90%;
  max-width: 500px;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #ccc;
  flex-shrink: 0;
}

.title {
  font-size: 1.2rem;
  color: #2c3f50;
  margin: 0;
}

.close {
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
}

.close::before,
.close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: #333;
  transform-origin: center;
}

.close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close:hover::before,
.close:hover::after {
  background-color: #000;
}

.close:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.close:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
}

.modal-content {
  padding: 1rem 1.5rem;
  overflow-y: auto;
  flex: 1;
}

@media (max-width: 600px) {
  .modal-container {
    width: 95%;
    max-height: 90%;
  }

  .modal-content {
    padding: 0.5rem 1rem;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
