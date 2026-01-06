<template>
  <div class="section-title">
    <h2>Leistungen</h2>
  </div>

  <div class="content-wrapper">
    <div class="block">
      <h3 class="title">Service 1</h3>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        harum esse temporibus ea nesciunt modi commodi.
      </p>
    </div>

    <div class="block">
      <h3 class="title">Service 2</h3>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eveniet
        aliquid quisquam neque porro reprehenderit.
      </p>
    </div>

    <div class="block">
      <h3 class="title">Service 3</h3>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        harum esse temporibus ea nesciunt modi commodi.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.section-title {
  text-align: center;
  margin: 15vh 0 3vh 0;
  color: #222;
  font-weight: 500;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 4rem;
  flex-wrap: wrap;
}

.block {
  text-align: center;
  max-width: 280px;
  padding: 15px;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.block:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.048);
}

.block .title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
}

.block .content {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}
</style>
