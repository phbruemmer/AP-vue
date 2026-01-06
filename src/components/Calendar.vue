<template>
  <div class="calendar-container">
    <div @click="lastMonth()">
      <div class="arrow left"></div>
    </div>

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
          <td v-for="(day, index) in week" :key="index">{{ day }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="arrow right" @click="nextMonth()"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

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

const monthCount = ref<number>(4);

const calendarMonth = ref<[number[]]>([[]]);

const today = new Date();

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
const generateMonth = () => {
  const month = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth() + 1,
    0
  );
  const lastMonth = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth(),
    0
  );

  // Get the first weekday of the month
  // to know where to start counting from.
  const firstDayInMonth = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth(),
    1
  ).getDay();

  // Get the length of the current month
  // to iterate through each day of the
  // current month.
  const currentMonthLength = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth() + 1,
    0
  ).getDate();

  // Get the length of the last month to show the last days
  // of the month in the beginning of each month.
  const lastMonthLength = lastMonth.getDate();

  // Get the last weekday of the month to fillup the week
  // at the end of the month.
  const lastDayInMonth = month.getDay();

  // To get the first day of the week at the beginning of the month
  const monthStart = lastMonthLength - firstDayInMonth + 1;

  const week_iteration = ref<number[]>([]);
  let i = 0;

  calendarMonth.value = [[]];

  for (let day = monthStart; day <= lastMonthLength; day++) {
    week_iteration.value.push(day);
    i++;
  }

  for (let day = 1; day <= currentMonthLength; day++) {
    if (i % 7 == 0) {
      calendarMonth.value.push(week_iteration.value);
      week_iteration.value = [];
    }
    week_iteration.value.push(day);
    i++;
  }

  for (let day = 1; day <= 6 - lastDayInMonth; day++) {
    week_iteration.value.push(day);
  }
  calendarMonth.value.push(week_iteration.value);

  console.log(calendarMonth.value);
};

const nextMonth = () => {
  monthCount.value++;
  calendarView.value = new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  );
  console.log(monthCount.value);
  generateMonth();
};

const lastMonth = () => {
  monthCount.value--;
  calendarView.value = new Date(
    today.getFullYear(),
    today.getMonth() + monthCount.value,
    today.getDate()
  );
  console.log(monthCount.value);
  generateMonth();
};

onMounted(() => {
  generateMonth();
});
</script>

<style scoped>
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  min-height: 40vh;
}

.arrow {
  height: 20px;
  width: 20px;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  border-radius: 1px;
}

.left {
  rotate: 45deg;
}

.right {
  rotate: -135deg;
}
</style>
