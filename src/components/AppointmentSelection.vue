<template>
  <section class="section-container">
    <div class="content">
      <h2>Termine</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, incidunt
        iure. Aut debitis numquam repellendus, voluptatibus voluptate quae
        aspernatur velit. Ea voluptatum natus corporis tempora eos rem iusto
        enim reprehenderit?
      </p>
    </div>
    <button class="cta-btn">Mehr erfahren</button>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  margin-bottom: 2rem;
  font-size: 14px;
}

.section-container {
  margin-top: 15vh;
  width: 100vw;
  background: #2e685b;
  padding: 5vh 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.content {
  max-width: 640px;
  text-align: left;
  color: #fff;
}

.cta-btn {
  background-color: transparent;
  color: #fff;
  padding: 1rem 1.8rem;
  border: 2px dotted #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-btn:hover {
  background-color: #ffffff25;
}

.cta-btn:active {
  background-color: #ffffff35;
}
</style>
