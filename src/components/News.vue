<template>
  <div class="news-container">
    <div class="head-line">
      <h2>News</h2>
      <p class="description">
        Stay informed with the latest updates in medical news.
      </p>
    </div>

    <div class="content-container">
      <div class="top-content box">
        <h3>Top News</h3>
        <p class="news" v-for="(item, index) in topNews" :key="index">
          <strong>{{ item.date }}</strong> - {{ item.title }} <br />
          {{ item.content }}
        </p>
      </div>

      <div class="more-content box">
        <h3>More News</h3>
        <p class="news" v-for="(item, index) in moreNews" :key="index">
          <strong>{{ item.date }}</strong> - {{ item.title }} <br />
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import json_news from "../data/news.json";

interface NewsItem {
  date: string;
  title: string;
  content: string;
}

const topNews = ref<NewsItem[]>(json_news["top-news"]);
const moreNews = ref<NewsItem[]>(json_news["more-news"]);
</script>

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
  width: 100vw;
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

.box {
  min-width: 320px;
}

.top-content {
  max-width: 460px;
  padding: 10vh 20px;
  transition: all 0.2s ease;
}

.top-content:hover {
  transform: translateY(-3px);
}

.top-content h3::after {
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
