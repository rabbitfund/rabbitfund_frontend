<script setup>
const FAQs = reactive([
  {
    question: '',
    answer: ''
  }
]);
function createNewFAQ() {
  FAQs.push({
    question: '',
    answer: ''
  });
}
</script>
<template>
  <section class="">
    <div class="mb-6">
      <label for="summary">專案內容</label>
      <textarea id="summary" type="text" name="summary"></textarea>
    </div>
    <div class="mb-6">
      <label for="risks">風險與變數</label>
      <textarea id="risks" type="text" name="risks"></textarea>
    </div>
    <div class="mb-6">
      <label>常見問答</label>
      <div v-for="item in FAQs" :key="item.question">
        <div class="mb-6">
          <input type="text" placeholder="請輸入常見問題" />
          <input type="text" placeholder="請輸入上述問題的正確回覆答案" />
        </div>
      </div>
      <button class="btn btn-primary mt-6 px-4 py-2" @click="createNewFAQ">新增問題</button>
    </div>
  </section>
</template>
