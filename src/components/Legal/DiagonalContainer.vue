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
            <div class="label">Telefon</div>
            <div class="value">+49 123 456789</div>
          </div>

          <div class="content">
            <div class="label">E-Mail</div>
            <div class="value">info@email.de</div>
          </div>

          <div class="content">
            <div class="label">Website</div>
            <div class="value">www.website.de</div>
          </div>

          <div class="content">
            <div class="label">Vertreten durch</div>
            <div class="value">Hans Nachname</div>
          </div>

          <div class="content">
            <div class="label">Umsatzsteuer ID:</div>
            <div class="value">123 456 789</div>
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
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.section-container {
  position: relative;
  z-index: 100;
  padding: 4rem 0;
  text-align: left;
  background: linear-gradient(180deg, #fafafa, #f4f6f8);
}

.container-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 5vw;
}

.container {
  max-width: 620px;
  padding: 2.5rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}

.container:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.left {
  margin-right: auto;
  border-left: 4px solid #2a816e;
}

.right {
  margin-left: auto;
  text-align: right;
  border-right: 4px solid #2a816e;
}

.container h2 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #111;
}

.container b {
  color: #222;
}

.info-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 0.75rem;
  column-gap: 1.5rem;
  margin-top: 1.5rem;
}

.label {
  font-weight: 600;
  color: #333;
}

.value {
  color: #555;
}

.info-grid .content {
  display: contents;
}

.info-grid .content div:first-child {
  font-weight: 600;
  color: #333;
}

.info-grid .content div:last-child {
  color: #555;
}

@media (max-width: 600px) {
  .section-container {
    text-align: left;
  }

  .right {
    text-align: left;
    border-right: none;
    border-left: 4px solid #2a816e;
  }

  .container {
    padding: 2rem;
  }
}
</style>
