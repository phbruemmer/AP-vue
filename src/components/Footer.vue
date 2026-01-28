<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>Kontakt</h4>
        <ul>
          <li>
            <p>Hanh Phuoc Hua</p>
          </li>
          <li>
            <p>25560 Hohner Straße 12</p>
          </li>
          <li>
            <p><a href="tel:+49123456789">+49 123 456789</a></p>
          </li>
          <li>
            <p><a href="mailto:hohn@hohn.de">hohn@hohn.de</a></p>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Rechtliches</h4>
        <ul>
          <li class="clickable" @click="goTo('/legal')">Informationen</li>

          <li class="clickable" @click="goTo('/legal')">Impressum</li>

          <li class="clickable" @click="goTo('/legal')">Datenschutz</li>

          <li class="clickable" @click="goTo('/legal')">Haftungsausschluss</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      &copy; {{ new Date().getFullYear() }} Hohn GmbH. Alle Rechte vorbehalten.
    </div>
  </footer>

  <pageTransition
    type="close"
    :destination="destination"
    v-if="startTransition"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import pageTransition from "./transition/pageTransition.vue";

const destination = ref<string>("");
const startTransition = ref<boolean>(false);

const goTo = (dest: string) => {
  destination.value = dest;
  startTransition.value = true;
};
</script>

<style scoped>
.footer {
  background-color: #2c3f50;
  color: #333;
  font-family: "Poppins", Arial, sans-serif;
  width: 100vw;
  padding: 3rem 0;
  margin-top: 15vh;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h4 {
  font-family: "Bebas";
  font-weight: 700;
  font-size: 1.3rem;

  color: #fff;
  text-align: left;
  letter-spacing: 1px;

  margin-bottom: 0.8rem;
}

.footer-section p,
.footer-section a,
.footer-section li {
  font-size: 0.9rem;

  color: #eee;
  text-decoration: none;
  margin: 0;
  text-align: left;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.75rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  color: #fff;
  font-size: 0.8rem;
}

.clickable:hover {
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
  }
}
</style>
