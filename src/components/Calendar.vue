<template>
  <div class="title">
    <div class="title-wrapper">
      <h2>Kalender</h2>
    </div>
  </div>

  <div class="calendar-container">
    <div class="calendar">
      <table>
        <caption>
          {{
            months[calendarView.getMonth()]
          }}
          -
          {{
            calendarView.getFullYear()
          }}
        </caption>

        <thead>
          <tr>
            <th v-for="(day, index) in weekdays" :key="index">{{ day }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(week, index) in calendarMonth" :key="index">
            <td
              v-for="(day, index) in week"
              :key="index"
              class="day"
              :class="{
                today: checkToday(day),
                'last-month': checkLastMonth(day),
                closed: checkWeekend(day) || checkClosed(day),
                'special-day': checkSpecialDay(day),
                appointment: checkLocalStorage(day),
              }"
              @click="openModal(day)"
            >
              {{ day.getDate() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="arrow-container">
      <div class="arrow-hit-box" @click="goLastMonth()">
        <div class="arrow left"></div>
      </div>

      <button class="btn-reset" @click="reset()">Heute</button>

      <div class="arrow-hit-box" @click="nextMonth()">
        <div class="arrow right"></div>
      </div>
    </div>

    <p class="note">
      Die Angaben zu den Öffnungszeiten könnten ungenau sein. Feiertage sind
      regulär geschlossen und nicht eingetragen.
    </p>
  </div>

  <Modal :title="modalTitle" :is-open="isOpen" @close="isOpen = false">
    <CalendarSlot
      :day="modalDay"
      :closed-day="checkClosed(modalDay)"
      @recalculate="recalculateMonth()"
      @invalidInput="showInvalidInputError()"
      @deletedLocalstorage="showDeleteLocalStorageMessage()"
    />
  </Modal>

  <PopUp :title="popUpTitle" :is-open="popUpIsOpen" @close="closePopUp()">
    {{ popUpContent }}
  </PopUp>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import base from "../data/base.json";

import Modal from "./UI/Modal.vue";
import PopUp from "./UI/PopUp.vue";
import CalendarSlot from "./Calendar/CalendarSlot.vue";

// Calendar JSON interface
type DateRange = [Date, Date];

interface Calendar {
  "closed-days": Date[];
  "closed-periods": DateRange[];
}
const closed = ref<Calendar>({
  "closed-days": [],
  "closed-periods": [],
});

// PopUp Variables
const popUpIsOpen = ref<boolean>(false);

const popUpTitle = ref<string>("Fehlgeschlagen");
const popUpContent = ref<string>("Es muss ein Zeitraum eingegeben werden.");

const closePopUp = () => {
  popUpIsOpen.value = false;
};

const showInvalidInputError = (): void => {
  popUpTitle.value = "Fehlgeschlagen";
  popUpContent.value = "Es muss ein Zeitraum eingegeben werden.";
  popUpIsOpen.value = true;
};

const showDeleteLocalStorageMessage = () => {
  popUpTitle.value = "Gespeicherte Einträge gelöscht.";
  popUpContent.value =
    "Die Termine wurden erfolgreich aus dem Speicher Ihres Browsers gelöscht.";
  popUpIsOpen.value = true;
  isOpen.value = false;
};

// General Variables
const weekdaysFullDevEnv = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const FIVE_WEEK_CALENDAR = true;

// MODAL - VARIABLES
const isOpen = ref<boolean>(false);
const modalTitle = ref<string>("");
const modalDay = ref<Date>(new Date());

const openModal = (day: Date): void => {
  modalDay.value = day;
  modalTitle.value = `
  ${weekdaysFullDevEnv[day.getDay()]},
  ${day.getDate()}.
  ${months[day.getMonth()]}
    ${day.getFullYear()}`;
  isOpen.value = true;
};

// This variable tracks the number of months
// we skipped from todays dates month.
const monthCount = ref<number>(0);

// This variable defines a limit of
// skips a user is allowed to do.
const skipLimit = 6;

// calendarMonth stores the current
// calculated month.
const calendarMonth = ref<Date[][]>([[]]);

// Well... today
const today = new Date();

// Used to show the month
// the user wants to see
const calendarView = ref<Date>(
  new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  )
);

// This function generates the current month.
// Each time, the user switches to a new month,
// this function is executed and calculates the
// new month.
const recalculateMonth = (): void => {
  // Current Month
  const month = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth() + 1,
    0
  );

  // Last Month
  const lastMonth = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth(),
    0
  );

  // Get the first weekday of the month
  // to know where to start counting from.
  // Adding 1 to move monday to the first place
  const firstDayInMonthUnformatted = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth(),
    1
  ).getDay();

  // Mapped from 0: Sunday, 1: Monday etc.
  // to 0: Monday, 1: tuesday etc.
  const firstDayInMonth = (firstDayInMonthUnformatted + 6) % 7;

  // Get the length of the current month
  // to iterate through each day of the
  // current month.
  const currentMonthLength = month.getDate();

  // Get the length of the last month to show the last days
  // of the month in the beginning of each month.
  const lastMonthLength = lastMonth.getDate();

  // To get the first day of the week at the beginning of the month
  const monthStart = lastMonthLength - firstDayInMonth + 1;

  const week_iteration = ref<Date[]>([]);
  let i = 0;

  calendarMonth.value = [];

  // Pushes the last few days of the last month
  // to fillup the first week
  for (let day = monthStart; day <= lastMonthLength; day++) {
    week_iteration.value.push(
      new Date(lastMonth.getFullYear(), lastMonth.getMonth(), day)
    );
    i++;
  }

  // Pushes all the days in the curernt month
  for (let day = 1; day <= currentMonthLength; day++) {
    if (i % 7 == 0) {
      calendarMonth.value.push(week_iteration.value);
      week_iteration.value = [];
    }
    week_iteration.value.push(
      new Date(
        calendarView.value.getFullYear(),
        calendarView.value.getMonth(),
        day
      )
    );
    i++;
  }

  calendarMonth.value.push(week_iteration.value);

  if (calendarMonth.value.length == 6 && FIVE_WEEK_CALENDAR)
    calendarMonth.value.shift();
};

// Resets the current CalendarView back to Today
const reset = (): void => {
  monthCount.value = 0;
  calendarView.value = new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  );
  recalculateMonth();
};

// Increments the month
const nextMonth = (): void => {
  if (monthCount.value < skipLimit) monthCount.value++;
  calendarView.value = new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  );
  recalculateMonth();
};

// Decrements the month
const goLastMonth = (): void => {
  if (monthCount.value > -skipLimit) monthCount.value--;
  calendarView.value = new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  );

  recalculateMonth();
};

// Calendar Run Functions - These functions
// check if specific Date characteristics are met.
// For instance: Last Month Days or Today, etc.
// This way we don't make a mess in the template
// and can mark the correct date.
const checkToday = (day: Date): boolean => {
  return (
    day.getDate() == today.getDate() &&
    today.getMonth() == calendarView.value.getMonth() &&
    today.getFullYear() == calendarView.value.getFullYear()
  );
};

const checkLastMonth = (day: Date): boolean => {
  return day.getMonth() != calendarView.value.getMonth();
};

const checkWeekend = (day: Date): boolean => {
  return day.getDay() == 0 || day.getDay() == 6;
};

const checkSpecialDay = (day: Date): boolean => {
  const specialDay = 5;
  return day.getDay() == specialDay;
};

const checkLocalStorage = (day: Date): boolean => {
  const data = localStorage.getItem(day.toDateString());
  return data ? true : false;
};

// This function checks all the closed date ranges
// for instance: 12.12.2025 - 24.12.2025
const checkClosedPeriodsHelper = (day: Date) => {
  return closed.value["closed-periods"].some(([start, end]) => {
    const periodStart = start.getTime();
    const periodEnd = end.getTime();
    const dayTime = day.getTime();

    return periodStart <= dayTime && periodEnd >= dayTime;
  });
};

// This function checks all the closed days.
const checkClosedDayHelper = (day: Date): boolean => {
  return closed.value["closed-days"].some((dayDate) => {
    return day.getTime() == dayDate.getTime();
  });
};

// This function combines the results of the
// helper functions to display the correct status.
const checkClosed = (day: Date): boolean => {
  return checkClosedDayHelper(day) || checkClosedPeriodsHelper(day);
};

// Loads calendar data from json file
// and pushes it into the designated
// 'closed' array.
const loadCalendarJson = async () => {
  const response = await fetch(`/${base}/data/calendar.json`);
  const data = await response.json();

  data["closed-days"].forEach((element: string) => {
    const dateSplit = element.split(".");

    if (dateSplit.length != 3) return;

    closed.value["closed-days"].push(
      new Date(
        Number(dateSplit[2]),
        Number(dateSplit[1]) - 1, // Js starts counting months from 0...
        Number(dateSplit[0])
      )
    );
  });

  data["closed-periods"].forEach((element: string) => {
    const dateSplit = element.split("-");

    // In case element is an invalid period
    if (!dateSplit[0] || !dateSplit[1]) return;

    const firstDate = dateSplit[0].split(".");
    const secondDate = dateSplit[1].split(".");

    if (firstDate.length != 3) return;

    closed.value["closed-periods"].push([
      // Period Start
      new Date(
        Number(firstDate[2]), // Year
        Number(firstDate[1]) - 1, // Month
        Number(firstDate[0]) // Day
      ),
      // Period End
      new Date(
        Number(secondDate[2]),
        Number(secondDate[1]) - 1,
        Number(secondDate[0])
      ),
    ]);
  });
};

onMounted(async () => {
  // Initial calculation
  recalculateMonth();
  // Load calendar data from json
  await loadCalendarJson();

  // Test env.
  const funny = new Date(2026, 0, 13);
  console.log(checkClosed(funny));
});
</script>

<style scoped>
h2 {
  font-size: 2rem;
}

.title {
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  justify-content: flex-end;
}

.title-wrapper {
  background: #2c3f50;
  border-radius: 2px 0 0 2px;
  width: clamp(20%, 20vw, 100%);
  color: #fff;
  padding: 0.5rem 1rem;
}

.calendar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  padding: 0 1rem;
}

.calendar {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
}

.btn-reset {
  all: unset;
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;
  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1;

  color: #333;
  background-color: #f3f4f6;

  cursor: pointer;
  user-select: none;

  transition: all 0.15s ease, transform 0.05s ease;
}

.btn-reset:hover {
  background-color: #e5e7eb;
}

.btn-reset:active {
  transform: translateY(1px);
}

.btn-reset:disabled,
.btn-reset[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.arrow-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
}

.arrow-hit-box {
  padding: 10px;
  touch-action: manipulation;
  transition: all 0.2s ease;
}

.arrow-hit-box:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.arrow-hit-box:active {
  transform: scale(1.05);
}

.arrow {
  height: 12px;
  width: 12px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.arrow:hover {
  border-color: #2e685b;
}

.left {
  transform: rotate(45deg);
}

.right {
  transform: rotate(-135deg);
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

caption {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

thead th {
  padding: 0.75rem 0;
  width: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
}

.day {
  min-width: 20px;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  color: #111827;
  cursor: pointer;
  transition: all 0.1s ease;
}

.day:hover {
  background-color: #2c3f501a;
}

.day:active {
  transform: scale(0.9);
}

.note {
  font-size: 0.85em;
  padding: 20px;
  max-width: 20rem;
  color: #555;
  line-height: 1.4;
  margin-bottom: 0.5em;
  word-wrap: break-word;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.note:hover {
  box-shadow: 0 0 12px #00000020;
  transform: scale(1.05);
}

.today {
  background-color: #3fa58f38;
}

.appointment {
  background-color: #318fe04a;
}

.special-day {
  background-color: #ff00000f;
  color: #888;
}

.special-day.appointment {
  background-color: #f6c3c3bf;
}

.special-day.today {
  background-color: #ff000049;
}

.special-day.appointment.today {
  background-color: #ff000060;
}

.appointment.today {
  background-color: #318ee08c;
}

.last-month {
  background-color: #0000001c;
  color: #888;
}

.closed {
  background-color: #0000001c;
  color: #888;
}

@media (max-width: 768px) {
  .calendar-container {
    flex-direction: column;
  }

  .arrow-container {
    width: 80%;
    margin: 0 auto 0.5rem auto;
  }

  .title {
    justify-content: center;
  }

  .title-wrapper {
    width: 100%;
  }
}
</style>
