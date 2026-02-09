<template>
  <div class="text-block">
    <h4>Small Title</h4>
    <h3>Larger title with a bit more content</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt
      est commodi magnam similique impedit sed, dolore consequatur dicta cum
      iure vero in, nostrum blanditiis ipsa vitae quidem? Eos, deserunt.
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.text-block {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;

  width: 100vw;
  max-width: 400px;
  padding: 1rem;
}

.text-block h4 {
  letter-spacing: 1px;
  margin: 0;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
}

.text-block h3 {
  font-family: "Bebas";
  font-weight: 100;
  letter-spacing: 1px;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin: 0.25rem 0;
}

.text-block p {
  font-size: clamp(1rem, 3vw, 1.2rem);
  line-height: 1.6;
  z-index: 9999;
}

@media (max-width: 450px) {
  .text-block {
    max-width: 250px;
  }
}
</style>
