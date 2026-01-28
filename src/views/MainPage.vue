<template>
  <!-- Hero Section -->
  <section>
    <Hero />
  </section>

  <!-- Section 1 - General Information -->
  <section id="start" class="start">
    <InformationSection />
  </section>

  <!-- Section 2 - News Section -->
  <section id="news">
    <News />
  </section>

  <!-- Section 3 - Appointment Selection -->
  <section id="appointments">
    <AppointmentSelection />
  </section>

  <!-- Section 4 - Services -->
  <section id="services">
    <Services />
  </section>

  <!-- Section 5 - Calendar Section -->
  <section id="calendar">
    <Calendar />
  </section>

  <!-- Footer -->
  <Footer />

  <pageTransition type="open" />
</template>

<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import InformationSection from "../components/InformationSection.vue";
import News from "../components/News.vue";
import AppointmentSelection from "../components/AppointmentSelection.vue";
import Services from "../components/Services.vue";
import Calendar from "../components/Calendar.vue";
import Footer from "../components/Footer.vue";
import pageTransition from "../components/transition/pageTransition.vue";
</script>

<style scoped></style>
