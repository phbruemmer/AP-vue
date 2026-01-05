<template>
  <div class="section-container">
    <div class="container-wrapper">
      <!-- Impressum -->
      <div class="container left" id="impressum">
        <h2>Impressum</h2>

        <b>Angaben gemäß § 5 TMG:</b>
        <p>
          Max Mustermann<br />
          Musterstraße 1<br />
          12345 Musterstadt<br />
          Deutschland
        </p>

        <div class="info-grid">
          <div class="content">
            <div><b>Telefon:</b></div>
            <div>+49 123 456789</div>
          </div>

          <div class="content">
            <div><b>E-Mail:</b></div>
            <div>info@musterfirma.de</div>
          </div>

          <div class="content">
            <div><b>Website:</b></div>
            <div>www.musterfirma.de</div>
          </div>

          <div class="content">
            <div><b>Vertreten durch:</b></div>
            <div>Max Mustermann</div>
          </div>

          <div class="content">
            <div><b>Umsatzsteuer-ID:</b></div>
            <div>DE123456789</div>
          </div>
        </div>
      </div>

      <!-- Haftungsausschluss -->
      <div class="container right" id="haftungsausschluss">
        <h2>Haftung</h2>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
          wir jedoch keine Gewähr. Die Nutzung der Inhalte erfolgt auf eigene
          Gefahr des Nutzers.
        </p>
        <p>
          Links zu externen Websites Dritter liegen außerhalb unseres
          Verantwortungsbereichs. Für den Inhalt dieser verlinkten Seiten ist
          ausschließlich der jeweilige Anbieter verantwortlich.
        </p>
      </div>

      <!-- Datenschutz -->
      <div class="container left" id="datenschutz">
        <h2>Datenschutz</h2>
        <p>
          Wir erheben, verarbeiten oder speichern auf dieser Website
          <b>keine personenbezogenen Daten</b>. Jegliche Nutzung der Website
          erfolgt anonym und ohne Datenerfassung.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
p {
  color: #444;
}

.section-container {
  position: relative;
  z-index: 100;
}

.container-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 110;
  padding: 0 4vw;
}

.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.right {
  text-align: right;
  margin-left: auto;
  margin-right: 0;
}

.left {
  text-align: left;
  margin-right: auto;
  margin-left: 0;
}

.container h1 {
  font-size: clamp(2rem, 6vw, 5rem);
}

.info-grid {
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: 2vh;
}

.info-grid div b {
  display: inline-block;
}
</style>
