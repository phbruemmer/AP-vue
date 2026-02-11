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
  <section>
    <StickySectionNotes />

    <!-- General Info -->
    <Stats id="info" />

    <ExpandableContent />
  </section>

  <!-- Section 5 - News Section -->
  <section id="news">
    <News />
  </section>

  <!-- Footer -->
  <Footer />

  <NavigationBar />
  <pageTransition type="open" />
</template>

<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import InformationSection from "../components/InformationSection.vue";
import News from "../components/News.vue";
import Services from "../components/Services.vue";
import Footer from "../components/Footer.vue";
import pageTransition from "../components/transition/pageTransition.vue";
import StickySectionNotes from "../components/StickySectionNotes.vue";
import ExpandableContent from "../components/templates/ExpandableContent.vue";
import Stats from "../components/Stats.vue";
import NavigationBar from "../components/templates/NavigationBar.vue";
</script>

<style scoped>
section {
  margin-bottom: 20vh;
}
</style>
