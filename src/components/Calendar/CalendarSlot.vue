<template>
  <div class="center">
    <p class="note">{{ status }}</p>
    <div class="svg-container" v-if="showContent || showAppointments">
      <svg
        width="18px"
        height="18px"
        stroke-width="1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        @click="toggleInfo()"
      >
        <path
          d="M12 11.5V16.5"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 7.51L12.01 7.49889"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  </div>

  <div class="content" v-if="showContent">
    <p>Termin hinzufügen</p>
    <div class="input-container">
      <div class="timebox-container">
        <div class="time-input">
          <input type="time" v-model="firstTimeInput" />
        </div>
        <div class="time-input">
          <input type="time" v-model="secondTimeInput" />
        </div>
      </div>

      <button class="btn" @click="saveInLocalStorage()">Speichern</button>
    </div>
  </div>

  <div class="content" v-if="!showContent && showAppointments">
    <div class="appointment-card">
      <div class="appointment-info">
        <span class="appointment-label">Termin</span>
        <span class="appointment-time">{{ appointmentText }}</span>
      </div>

      <button class="btn-remove" @click="removeAppointment">Entfernen</button>
    </div>
  </div>

  <div class="info-container" v-if="showInfo">
    <p class="note">
      Die Termine sind nur auf Ihrem Gerät sichtbar und gelten nicht als
      Terminvereinbarung.
    </p>
    <a @click="showModal = true">Alle Einträge löschen</a>
  </div>

  <Modal
    title="Löschen bestätigen."
    :is-open="showModal"
    @close="showModal = false"
  >
    <p class="note">
      Drücken Sie 'Bestätigen', um alle im Browser gespeicherten Termine zu
      löschen.
    </p>
    <button
      :style="{ margin: '1vh 0' }"
      class="btn-remove"
      @click="deleteLocalStorage()"
    >
      Bestätigen
    </button>
  </Modal>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import Modal from "../UI/Modal.vue";

// Info Variable
const showInfo = ref<boolean>(false);
const toggleInfo = (): void => {
  showInfo.value = !showInfo.value;
};

// Confirm Delete Data Removal Modal Variables
const showModal = ref<boolean>(false);

const props = defineProps<{
  day: Date;
}>();

const emits = defineEmits<{
  (e: "recalculate"): void;
  (e: "invalidInput"): void;
  (e: "deletedLocalstorage"): void;
}>();

const status = ref<string>("");

const firstTimeInput = ref<string>("08:00");
const secondTimeInput = ref<string>("09:00");

const showContent = ref<boolean>(true);
const showAppointments = ref<boolean>(true);

const appointmentText = ref<string>("Keine Termine.");

const updateStatus = () => {
  const currentDay = (props.day.getDay() + 6) % 7;

  if (currentDay == 0 || currentDay == 2) {
    status.value = "Vormittags geöffnet";
    showContent.value = true;
    showAppointments.value = true;
  } else if (currentDay == 1 || currentDay == 3) {
    status.value = "Vor- und Nachmittags geöffnet";
    showContent.value = true;
    showAppointments.value = true;
  } else if (currentDay == 4) {
    status.value = "Geschlossen - Erreichbar";
    showAppointments.value = true;
    showContent.value = true;
  } else {
    status.value = "Geschlossen";
    showAppointments.value = false;
    showContent.value = false;
  }
};

const saveInLocalStorage = () => {
  if (firstTimeInput.value && secondTimeInput.value) {
    localStorage.setItem(
      props.day.toDateString(),
      `${firstTimeInput.value};${secondTimeInput.value}`
    );
    checkLocalStorage();
    emits("recalculate");
  } else {
    emits("invalidInput");
  }
};

const removeAppointment = () => {
  localStorage.removeItem(props.day.toDateString());

  appointmentText.value = "Keine Termine.";
  firstTimeInput.value = "";
  secondTimeInput.value = "";
  showContent.value = true;
  emits("recalculate");
};

const checkLocalStorage = () => {
  const dayData = localStorage.getItem(props.day.toDateString());
  if (dayData) {
    let data = dayData.split(";");
    appointmentText.value = `${data[0]} - ${data[1]}`;
    showContent.value = false;
  } else {
    appointmentText.value = "Keine Termine.";
  }
};

const deleteLocalStorage = () => {
  localStorage.clear();
  showModal.value = false;
  emits("recalculate");
  emits("deletedLocalstorage");
};

watch(
  () => props.day,
  () => {
    updateStatus();
  },
  { immediate: true }
);

onMounted(() => {
  checkLocalStorage();
});
</script>

<style scoped>
.note {
  font-size: 0.8em;
  color: #555;
  line-height: 1.4;
  margin-bottom: 0.5em;
  word-wrap: break-word;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.content {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
  margin-top: 4vh;
}

.input-container {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.btn {
  all: unset;
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  height: 40px;

  padding: 0.5rem 1rem;
  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1;

  color: #333;
  background-color: #f3f4f6;

  cursor: pointer;
  user-select: none;

  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease, transform 0.05s ease;
}

.btn:hover {
  background-color: #e5e7eb;
}

.btn:active {
  transform: translateY(1px);
}

.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.timebox-container {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.time-input {
  display: flex;
  flex-direction: column;
  font-size: 0.85em;
  color: #333;
}

.time-input input[type="time"] {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.disabled {
  background-color: #000;
}

.appointment-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 16px;
  margin-top: 2vh;

  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.appointment-label {
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.appointment-time {
  font-size: 0.95rem;
  font-weight: 500;
  color: #111827;
}

.btn-remove {
  all: unset;
  box-sizing: border-box;

  padding: 6px 10px;
  border-radius: 6px;

  font-size: 0.8rem;
  font-weight: 500;

  color: #b91c1c;
  background-color: #fee2e2;

  cursor: pointer;
  user-select: none;

  transition: background-color 0.15s ease, color 0.15s ease,
    transform 0.05s ease;
}

.btn-remove:hover {
  background-color: #fecaca;
}

.btn-remove:active {
  transform: translateY(1px);
}

.info-container {
  margin-top: 2vh;
}

.info-container a {
  font-weight: 100;
  font-size: 0.8rem;
  text-decoration: underline;
}

.info-container a:hover {
  cursor: pointer;
}

.svg-container svg {
  transition: all 0.2s ease;
}

.svg-container svg:hover {
  transform: scale(0.9);
  cursor: pointer;
}
</style>
