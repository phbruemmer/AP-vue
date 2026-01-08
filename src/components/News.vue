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
import { onMounted, ref } from "vue";
import base from "../data/base.json";

interface NewsItem {
  date: string;
  title: string;
  content: string;
}

const topNews = ref<NewsItem[]>([]);
const moreNews = ref<NewsItem[]>([]);

const getNews = async () => {
  const response = await fetch(`/${base}/data/news.json`);
  const data = await response.json();

  topNews.value = data["top-news"];
  moreNews.value = data["more-news"];
};

onMounted(() => {
  getNews();
});
</script>

<style scoped>
h2 {
  font-size: 2rem;
  color: #333;
  text-align: center;
}

h3 {
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
}

.news-container {
  margin-top: 10vh;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.head-line {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.description {
  max-width: 320px;
  text-align: center;
}

.content-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.box {
  flex: 1 1 320px;
  box-sizing: border-box;
}

.top-content,
.more-content {
  max-width: 460px;
  padding: 8vh 4rem;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.top-content:hover,
.more-content:hover {
  transform: translateY(-3px);
}

.top-content h3::after,
.more-content h3::after {
  content: "";
  position: absolute;
  bottom: -6px;
  width: 100%;
  height: 3px;
  border-radius: 2px;
}

.top-content h3::after {
  left: 0;
  background: linear-gradient(90deg, #42b883, #ffffff00);
}

.more-content {
  background: #2c3f50;
  color: #fff;
}

.more-content h3::after {
  right: 0;
  background: linear-gradient(-90deg, #42b883, #ffffff00);
}

@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .top-content,
  .more-content {
    padding: 4vh 15px;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .top-content {
    padding: 3vh 2rem;
  }

  .more-content {
    display: none;
  }
}
</style>
