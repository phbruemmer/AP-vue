<template>
  <!-- Hero Section -->
  <Hero />

  <!-- Section 1 - General Information -->
  <section id="start" class="start">
    <InformationSection />
  </section>

  <!-- Section 2 - Services -->
  <section id="services">
    <Services />
  </section>

  <!-- Section 3 - Appointments and More -->
  <section id="placeholder">
    <StickySectionNotes />
  </section>

  <!-- Section 4 - Calendar Section -->
  <section id="calendar">
    <Calendar />
  </section>

  <!-- Section 5 - News Section -->
  <section id="news">
    <News />
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
import StickySectionNotes from "../components/StickySectionNotes.vue";
</script>

<style scoped>
section {
  margin-bottom: 16vh;
}
</style>
