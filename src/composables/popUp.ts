import { ref } from "vue";

const isPopUpActive = ref<boolean>(false);

export function getStatus() {
  return isPopUpActive;
}

export function showPopUp() {
  isPopUpActive.value = true;
  return isPopUpActive;
}

export function closePopUp() {
  isPopUpActive.value = false;
  return isPopUpActive;
}
