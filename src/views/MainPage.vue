<template>
  <!-- Hero Section -->
  <Hero />

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

  <!-- Section 5 - Contact Information -->
  <div class="placeholder"></div>

  <!-- Footer -->
  <Footer />
</template>

<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import InformationSection from "../components/InformationSection.vue";
import News from "../components/News.vue";
import AppointmentSelection from "../components/AppointmentSelection.vue";
import Services from "../components/Services.vue";

import Footer from "../components/Footer.vue";
</script>

<style scoped>
section {
  scroll-margin-top: 30vh;
}

.start {
  scroll-margin-top: 25vh;
}

.placeholder {
  height: 80vh;
}
</style>
