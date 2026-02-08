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

  width: 400px;
}

.text-block h4 {
  letter-spacing: 1px;
  margin: 0;
}

.text-block h3 {
  font-family: "Bebas";
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 0;
}

.text-block p {
  font-size: 1.2rem;
}
</style>
