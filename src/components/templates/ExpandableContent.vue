<template>
  <div class="main-container">
    <h1>Weitere Informationen</h1>

    <ListBox title="Big Title for this">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro
      asperiores quaerat similique totam natus error. Voluptatum maiores
      reprehenderit vel doloremque ab error, quasi aspernatur recusandae nam
      nesciunt. Ad, saepe.
    </ListBox>

    <ListBox title="Big Title for this">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro
      asperiores quaerat similique totam natus error. Voluptatum maiores
      reprehenderit vel doloremque ab error, quasi aspernatur recusandae nam
      nesciunt. Ad, saepe.
    </ListBox>

    <ListBox title="Big Title for this">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro
      asperiores quaerat similique totam natus error. Voluptatum maiores
      reprehenderit vel doloremque ab error, quasi aspernatur recusandae nam
      nesciunt. Ad, saepe.
    </ListBox>

    <ListBox title="Big Title for this">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro
      asperiores quaerat similique totam natus error. Voluptatum maiores
      reprehenderit vel doloremque ab error, quasi aspernatur recusandae nam
      nesciunt. Ad, saepe.
    </ListBox>
  </div>
</template>

<script lang="ts" setup>
import ListBox from "../TextBoxes/ListBox.vue";
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
}

.main-container h1 {
  font-family: "Tasa-Bold";
  color: #222;
}
</style>
