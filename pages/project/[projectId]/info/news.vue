<script setup lang="ts">
const news = ref([
  {
    news_title: "感謝支持，5/29 起專案將轉為「長期集資」",
    news_content: `親愛的贊助者 您好，
    感謝每一位支持《XXXX》的贊助者，集資計畫將在 5/29 (一) 完成第一階段，接下來我們會將專案轉為「長期集資」，長期集資是開放在未來如有更多善心人士願意持續支持我們。讓我們持續運作這項計畫，提升服務規格、幫助更多人。
    再次感謝每一位贊助者的支持，如有任何專案的相關疑問，請隨時來信、來訊倍而兔團隊！

    聯絡資訊：
    倍而兔團隊
    service@rabbit.org`,
    news_create_date: '2023-05-22'
  }
]);

const modifiedNews: any = ref([]);

modifiedNews.value = news.value.map(item => {
  return {
    title: item.news_title,
    content: item.news_content,
    create_date: item.news_create_date,
  }
});
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">最新消息</h2>
  <Accordion :data="modifiedNews"></Accordion>
</template>
