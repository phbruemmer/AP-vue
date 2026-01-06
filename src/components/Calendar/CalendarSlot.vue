<template>
  <div class="center">
    <p class="note">{{ status }}</p>
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

      <button class="btn-save" @click="saveInLocalStorage()">Speichern</button>
    </div>
  </div>

  <div class="content" v-else>
    <div class="appointment-card">
      <div class="appointment-info">
        <span class="appointment-label">Termin</span>
        <span class="appointment-time">{{ appointmentText }}</span>
      </div>

      <button class="btn-remove" @click="removeAppointment">Entfernen</button>
    </div>
  </div>

  <PopUp title="Fehlgeschlagen" :is-open="popUpIsOpen" @close="closePopUp()">
    Es muss ein Zeitraum eingegeben werden.
  </PopUp>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import PopUp from "../UI/PopUp.vue";

// PopUp Variables
const popUpIsOpen = ref<boolean>(false);
const closePopUp = () => {
  popUpIsOpen.value = false;
};

const props = defineProps<{
  day: Date;
}>();

const status = ref<string>("");

const firstTimeInput = ref<string>("");
const secondTimeInput = ref<string>("");

const showContent = ref<boolean>(true);

const appointmentText = ref<string>("Keine Termine.");

const updateStatus = () => {
  const currentDay = (props.day.getDay() + 6) % 7;

  if (currentDay == 0 || currentDay == 2) {
    status.value = "Vormittags geöffnet";
    showContent.value = true;
  } else if (currentDay == 1 || currentDay == 3) {
    status.value = "Vor- und Nachmittags geöffnet";
    showContent.value = true;
  } else if (currentDay == 4) {
    status.value = "Geschlossen - Erreichbar";
    showContent.value = true;
  } else {
    status.value = "Geschlossen";
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
  } else {
    popUpIsOpen.value = true;
  }
};

const removeAppointment = () => {
  localStorage.removeItem(props.day.toDateString());

  appointmentText.value = "Keine Termine.";
  firstTimeInput.value = "";
  secondTimeInput.value = "";
  showContent.value = true;
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

.btn-save {
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

.btn-save:hover {
  background-color: #e5e7eb;
}

.btn-save:active {
  transform: translateY(1px);
}

.btn-save:disabled,
.btn-save[aria-disabled="true"] {
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
</style>
