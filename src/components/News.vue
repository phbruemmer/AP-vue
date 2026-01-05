<template>
  <div class="news-container">
    <div class="head-line">
      <h2>News</h2>
      <p class="description">
        Stay informed with the latest updates in medical news.
      </p>
    </div>

    <div class="content-container box">
      <div class="text-content">
        <h3>Top News</h3>
        <p class="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
          impedit, ducimus temporibus accusamus repudiandae atque tempore ab,
          quam vitae, architecto animi eum nihil necessitatibus dolore sunt!
          Unde, quaerat exercitationem.
        </p>
      </div>

      <div class="more-content box">
        <h3>More News</h3>
        <p class="news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          excepturi deleniti quaerat ipsam quia necessitatibus, similique
          tempore quos iusto nesciunt nisi rem iste, aliquid mollitia odit.
          Voluptatibus dicta nisi nesciunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
h2 {
  color: #333;
}

h3 {
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
}

.news-container {
  margin-top: 5vh;
}

.head-line {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5vh;
}

.description {
  width: 320px;
}

.content-container {
  display: flex;
  justify-content: center;
}

.text-content {
  max-width: 460px;
  padding: 10vh 20px;
  transition: all 0.2s ease;
}

.text-content:hover {
  transform: translateY(-3px);
}

.text-content h3::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #42b883, #ffffff00);
  border-radius: 2px;
}

.more-content {
  max-width: 460px;
  background: #2c3f50;
  color: #fff;
  padding: 10vh 20px;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.more-content:hover {
  transform: translateY(-3px);
}

.more-content h3::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: linear-gradient(-90deg, #42b883, #ffffff00);
  border-radius: 4px;
}
</style>
