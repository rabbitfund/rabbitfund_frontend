<script setup>
import { useProposalStore } from '~~/stores/proposal/outline.ts';
import { storeToRefs } from 'pinia';

const formSchema = {
  專案標題: 'required',
  內容摘要: 'required',
  專案封面: 'image',
  開始時間: 'required',
  結束時間: 'required',
  專案類別: 'required',
  募資目標金額: 'required'
};

const categories = ref(['校園', '公益', '市集']);

const proposalStore = useProposalStore();
const { 專案標題, 內容摘要, 專案封面, 開始時間, 結束時間, 專案類別, 募資目標金額, 專案影片 } =
  storeToRefs(proposalStore);
const { setProposal } = proposalStore;

const router = useRouter();
const url = '/proposal/content';

const handleSubmit = (values) => {
  console.log('values:', values);
  setProposal(values);
  router.push(url);
};
</script>

<template>
  <div>
    <NuxtLayout name="proposal">
      <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
        <FormInput
          :label="['專案標題', '*']"
          type="text"
          id="title"
          name="專案標題"
          :value="專案標題"
          placeholder="請輸入專案標題"
        />
        <FormTextarea
          :label="['內容摘要', '*']"
          id="summary"
          name="內容摘要"
          :value="內容摘要"
          placeholder="請輸入內容摘要"
        />
        <FormInput :label="['專案封面']" type="file" id="cover" name="專案封面" />
        <div class="mb-6 border-b border-grey-200">
          <h3 class="mb-2 flex items-center text-md font-bold">
            <span class="mr-2"
              ><img src="~/assets/images/icons/time-fill.svg" alt="time" class="w-6"
            /></span>
            <span>募資開始與結束時間</span>
          </h3>
          <div class="gap-6 sm:flex">
            <FormInput
              class="flex-1"
              :label="['開始時間', '*']"
              type="date"
              id="startDate"
              name="開始時間"
              :value="開始時間"
            />
            <FormInput
              class="flex-1"
              :label="['結束時間', '*']"
              type="date"
              id="endDate"
              name="結束時間"
              :value="結束時間"
            />
          </div>
        </div>
        <div class="gap-6 sm:flex">
          <FormSelect
            class="flex-1"
            :label="['專案類別', '*']"
            id="category"
            name="專案類別"
            :value="專案類別"
            :options="categories"
          />
          <FormInput
            class="flex-1"
            :label="['募資目標金額', '*']"
            type="number"
            id="target"
            name="募資目標金額"
            :value="募資目標金額"
          />
        </div>
        <FormInput
          :label="['專案影片']"
          type="text"
          id="video"
          name="專案影片"
          :value="專案影片"
          placeholder="http://example.com, https://example.com"
        />

        <div class="mt-12 flex justify-center">
          <button class="btn btn-primary" :disabled="!meta.valid" type="submit">
            儲存並前往下一頁
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>
</template>
