<script setup>
const specifications = reactive([
  {
    question: '',
    answer: ''
  }
]);

function createNewSpecification() {
  specifications.push({
    question: '',
    answer: ''
  });
}
</script>
<template>
  <section class="mb-12">
    <div class="mb-6 grid grid-cols-12 gap-4">
      <section class="col-span-12 md:col-span-8">
        <div class="mb-6">
          <label for="name">回饋方案名稱</label>
          <input id="name" type="text" name="name" />
        </div>
        <div class="mb-6">
          <label for="price">回饋金額</label>
          <input id="price" type="number" name="price" />
        </div>
        <div class="mb-6">
          <label for="total">回饋數量限制</label>
          <input id="total" type="number" name="total" />
        </div>
        <div class="mb-6">
          <label for="date">預計出貨時間</label>
          <input id="date" type="month" name="date" />
        </div>
        <div class="mb-6">
          <label for="start_date">回饋時間限制</label>
          <div class="flex gap-2">
            <input id="start_date" type="date" name="start_date" />
            <input id="end_date" type="date" name="end_date" />
          </div>
        </div>
      </section>
      <aside class="col-span-12 md:col-span-4">
        <p>回饋方案預覽</p>
        <div class="h-1/2 rounded-lg border border-grey-300 bg-white">這是還沒做的卡片喔</div>
      </aside>
    </div>

    <div class="rounded-lg bg-grey-100 p-4">
      <p class="mb-6 font-bold">規格</p>

      <div v-for="(item, index) in specifications" :key="item.question" class="mb-6">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-6">
            <label :for="`Q${index}`">問題</label>
            <input
              :id="`Q${index}`"
              type="text"
              :name="`Q${index}`"
              placeholder="問題範例：請選擇您的尺寸"
            />
          </div>
          <div class="col-span-6">
            <label :for="`A${index}`">答案選項</label>
            <input
              :id="`A${index}`"
              type="text"
              :name="`A${index}`"
              placeholder="答案範例：XL, L, M, S, XS"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-primary mt-6 px-4 py-2" @click="createNewSpecification">
        新增問題
      </button>
    </div>
  </section>
</template>
