<script setup>
import { useProposalStore } from '~~/stores/proposal/options.ts';
import { storeToRefs } from 'pinia';

const proposalStore = useProposalStore();
const {
  回饋方案名稱,
  回饋金額,
  回饋數量限制,
  預計出貨時間,
  開始時間,
  結束時間,
  問題1,
  答案選項1,
  問題2,
  答案選項2
} = storeToRefs(proposalStore);

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
  <section class="mb-6">
    <div class="mb-6 grid grid-cols-12 gap-4">
      <section class="col-span-12 md:col-span-8">
        <FormInput
          :label="['回饋方案名稱', '*']"
          type="text"
          id="name"
          name="回饋方案名稱"
          :value="回饋方案名稱"
          placeholder="請輸入回饋方案名稱"
        />
        <FormInput
          :label="['回饋金額', '*']"
          type="number"
          id="price"
          name="回饋金額"
          :value="回饋金額"
        />
        <FormInput
          :label="['回饋數量限制', '*']"
          type="number"
          id="quantity"
          name="回饋數量限制"
          :value="回饋數量限制"
        />
        <FormInput
          :label="['預計出貨時間']"
          type="month"
          id="deliveryDate"
          name="預計出貨時間"
          :value="預計出貨時間"
        />

        <div class="border-b border-grey-200 md:border-0">
          <h3 class="mb-2 flex items-center text-md font-bold">
            <span class="mr-2"
              ><img src="~/assets/images/icons/time-fill.svg" alt="time" class="w-6"
            /></span>
            <span>回饋時間限制</span>
          </h3>
          <div class="gap-6 sm:flex">
            <FormInput
              class="flex-1"
              :label="['開始時間']"
              type="date"
              id="start"
              name="開始時間"
              :value="開始時間"
            />
            <FormInput
              class="flex-1"
              :label="['結束時間']"
              type="date"
              id="end"
              name="結束時間"
              :value="結束時間"
            />
          </div>
        </div>
      </section>
      <aside class="col-span-12 md:col-span-4">
        <p>回饋方案預覽</p>
        <div class="h-1/2 rounded-lg border border-grey-300 bg-white">這是還沒做的卡片喔</div>
      </aside>
    </div>

    <div class="rounded-lg bg-light px-3 py-6">
      <h3 class="mb-2 flex items-center text-md font-bold">
        <span class="mr-2"
          ><img src="~/assets/images/icons/book.svg" alt="book" class="w-6"
        /></span>
        <span>規格</span>
      </h3>

      <ul>
        <li
          v-for="(item, index) in specifications"
          :key="item.question"
          class="gap-6 border-t border-grey-200 pt-3 lg:flex"
        >
          <FormInput
            :label="[`問題 ${index + 1}`, '*']"
            type="text"
            :id="`Q${index + 1}`"
            :name="`問題${index + 1}`"
            :value="問題1"
            placeholder="問題範例：請選擇您的尺寸"
            class="flex-1"
          />
          <FormInput
            :label="[`答案選項 ${index + 1}`, '*']"
            type="text"
            :id="`A${index + 1}`"
            :name="`答案選項${index + 1}`"
            :value="答案選項1"
            placeholder="答案範例：XL, L, M, S, XS"
            class="flex-1"
          />
        </li>
      </ul>
      <button class="btn btn-primary" @click="createNewSpecification">新增問題</button>
    </div>
  </section>
</template>
