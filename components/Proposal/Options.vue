<script setup>
import { useProposalStore } from '~/stores/proposal/options.ts';

const props = defineProps({
  addSpecSchema: {
    type: Function,
    default: () => {}
  },
  addOptionSchema: {
    type: Function,
    default: () => {}
  }
});

const proposalStore = useProposalStore();
const { options } = proposalStore;

const data = reactive({
  options
});

function createNewSpecification(option, optionIndex) {
  option.specifications.push({
    question: '',
    answer: ''
  });

  props.addSpecSchema(optionIndex + 1, option.specifications.length);
}

function createNewOption() {
  data.options.push({
    name: '',
    price: '',
    quantity: '',
    deliveryDate: '',
    start: '',
    end: '',
    specifications: [
      {
        question: '',
        answer: ''
      }
    ]
  });

  props.addOptionSchema(data.options.length);
}
</script>

<template>
  <ul class="mb-10 flex flex-col gap-6">
    <li
      v-for="(option, index) in data.options"
      :key="index"
      :class="{ 'border-b pb-10': index + 1 !== data.options.length }"
    >
      <h3 class="mb-2 flex items-center text-h4 font-bold">
        <span class="mr-2"><img src="~/assets/images/carrot.png" alt="carrot" class="w-10" /></span>
        <span>方案 {{ index + 1 }}</span>
      </h3>
      <div class="mb-6 grid grid-cols-12 gap-4">
        <section
          class="col-span-12 border-b border-grey-200 md:col-span-7 md:border-0 xl:col-span-8"
        >
          <FormInput
            :label="['回饋方案名稱', '*']"
            type="text"
            id="name"
            :name="`回饋方案名稱${index + 1}`"
            :value="option.name"
            placeholder="請輸入回饋方案名稱"
          />
          <FormInput
            :label="['回饋金額', '*']"
            type="number"
            id="price"
            :name="`回饋金額${index + 1}`"
            :value="option.price"
          />
          <FormInput
            :label="['回饋數量限制', '*']"
            type="number"
            id="quantity"
            :name="`回饋數量限制${index + 1}`"
            :value="option.quantity"
          />
          <FormInput
            :label="['預計出貨時間']"
            type="month"
            id="deliveryDate"
            :name="`預計出貨時間${index + 1}`"
            :value="option.deliveryDate"
          />

          <h4 class="mb-2 flex items-center text-md font-bold">
            <span class="mr-2"
              ><img src="~/assets/images/icons/time-fill.svg" alt="time" class="w-6"
            /></span>
            <span>回饋時間限制</span>
          </h4>
          <div class="gap-6 sm:flex">
            <FormInput
              class="flex-1"
              :label="['開始時間']"
              type="date"
              id="start"
              :name="`開始時間${index + 1}`"
              :value="option.start"
            />
            <FormInput
              class="flex-1"
              :label="['結束時間']"
              type="date"
              id="end"
              :name="`結束時間${index + 1}`"
              :value="option.end"
            />
          </div>
        </section>
        <aside class="col-span-12 md:col-span-5 xl:col-span-4">
          <p class="mb-2 font-bold">回饋方案預覽</p>
          <CardPlan />
        </aside>
      </div>

      <div class="rounded-lg bg-light px-3 py-6">
        <h4 class="mb-2 flex items-center text-md font-bold">
          <span class="mr-2"
            ><img src="~/assets/images/icons/book.svg" alt="book" class="w-6"
          /></span>
          <span>規格</span>
        </h4>
        <ul>
          <li
            v-for="(specification, specIndex) in option.specifications"
            :key="specification.question"
            class="gap-6 border-t border-grey-200 pt-3 lg:flex"
          >
            <FormInput
              :label="[`問題 ${specIndex + 1}`, '*']"
              type="text"
              :id="`Q${index + 1}-${specIndex + 1}`"
              :name="`問題${index + 1}-${specIndex + 1}`"
              :value="specification.question"
              placeholder="問題範例：請選擇您的尺寸"
              class="flex-1"
            />
            <FormInput
              :label="[`答案選項 ${specIndex + 1}`, '*']"
              type="text"
              :id="`A${index + 1}-${specIndex + 1}`"
              :name="`答案選項${index + 1}-${specIndex + 1}`"
              :value="specification.answer"
              placeholder="答案範例：XL, L, M, S, XS"
              class="flex-1"
            />
          </li>
        </ul>
        <button class="btn btn-primary" @click.prevent="createNewSpecification(option, index)">
          新增規格
        </button>
      </div>
    </li>
  </ul>

  <button class="btn btn-primary mb-6" @click="createNewOption()">
    新增回饋項目
  </button>
</template>
