<template>
  <div class="center">
    <p class="note">{{ status }}</p>
    <div class="svg-container" v-if="showContent || showAppointments">
      <infoIcon @click="toggleInfo()" />
    </div>
  </div>

  <div class="content" v-if="showContent">
    <p>Termin hinzufügen</p>
    <div class="input-container">
      <div class="timebox-container">
        <input type="time" v-model="firstTimeInput" class="single-time-input" />
        <input
          type="time"
          v-model="secondTimeInput"
          class="single-time-input"
        />
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
import infoIcon from "../icons/info.vue";

// Info Variable
const showInfo = ref<boolean>(false);
const toggleInfo = (): void => {
  showInfo.value = !showInfo.value;
};

// Confirm Delete Data Removal Modal Variables
const showModal = ref<boolean>(false);

const props = defineProps<{
  day: Date;
  closedDay: boolean;
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

// Appointment Data
const weekdayStatus = [
  "Vormittags geöffnet",
  "Vor- und Nachmittags geöffnet",
  "Vormittags geöffnet",
  "Vor- und Nachmittags geöffnet",
  "Geschlossen - Erreichbar",
  "Geschlossen",
  "Geschlossen",
];

const updateStatus = () => {
  if (props.closedDay) {
    status.value = "Geschlossen";
    showAppointments.value = false;
    showContent.value = false;
    return;
  }

  const currentDay = (props.day.getDay() + 6) % 7;

  if (currentDay <= 4) {
    status.value = weekdayStatus[currentDay] || "Kein Eintrag";
    showContent.value = true;
    showAppointments.value = true;
  } else {
    status.value = weekdayStatus[currentDay] || "Kein Eintrag";
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
  appearance: none;
  border: none;
  outline: none;

  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;

  padding: 0 1rem;
  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 300;

  color: #333;
  background-color: #f3f4f6;

  cursor: pointer;
  user-select: none;

  transition: all 0.15s ease, transform 0.05s ease;
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
  color: #333;
}

.timebox-container {
  display: flex;
  gap: 10px;
  width: 50%;
}

.single-time-input {
  appearance: none;
  border: none;
  outline: none;
  box-sizing: border-box;

  height: 40px;
  flex: 1;

  padding: 0 0.75rem;
  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 300;
  color: #333;

  background-color: #f3f4f6;
  border: 1px solid transparent;

  transition: all 0.2 ease;
}

.single-time-input:hover {
  background-color: #e5e7eb;
  cursor: pointer;
}

.single-time-input:focus {
  background-color: #ffffff;
  border-color: #d1d5db;
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
