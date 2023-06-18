<script setup>
import { useProposalStore } from '~~/stores/proposal/outline.ts';

const formSchema = {
  專案標題: 'required',
  // 內容摘要: 'required',
  專案封面: 'image',
  開始時間: 'required',
  結束時間: 'required',
  專案類別: 'required',
  募資目標金額: 'required',
  專案影片: 'url'
};

const categories = ref(['校園', '公益', '市集']);

const proposalStore = useProposalStore();
const { title, summary, cover, startDate, endDate, category, target, video } = proposalStore;
const { saveData } = proposalStore;

const data = reactive({
  title,
  summary,
  cover,
  startDate,
  endDate,
  category,
  target,
  video
});

const router = useRouter();
const url = '/proposal/content';

const handleSubmit = (values) => {
  saveData(dealWithData(values));
  router.push(url);

  function dealWithData(data) {
    const title = data['專案標題'] || '';
    const summary = data['內容摘要'] || '';
    const cover = data['專案封面'] || '';
    const startDate = data['開始時間'] || '';
    const endDate = data['結束時間'] || '';
    const category = data['專案類別'] || '';
    const target = data['募資目標金額'] || '';
    const video = data['專案影片'] || '';

    return { title, summary, cover, startDate, endDate, category, target, video };
  }
};

let editor;
const editorContainer = ref(null);

onMounted(async () => {
  if (process.client) {
    const ClassicEditor = (await import('@ckeditor/ckeditor5-build-classic')).default;
    const CKEditor = (await import('@ckeditor/ckeditor5-vue')).default;

    editor = await ClassicEditor.create(editorContainer.value);
    CKEditor.watch(editor);
  }
});
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
          :value="data.title"
          placeholder="請輸入專案標題"
        />
        <!-- <FormTextarea
          :label="['內容摘要', '*']"
          id="summary"
          name="內容摘要"
          :value="data.summary"
          placeholder="請輸入內容摘要"
        /> -->
        <div class="mb-6">
          <label>內容摘要</label>
          <div ref="editorContainer"></div>
        </div>
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
              :value="data.startDate"
            />
            <FormInput
              class="flex-1"
              :label="['結束時間', '*']"
              type="date"
              id="endDate"
              name="結束時間"
              :value="data.endDate"
            />
          </div>
        </div>
        <div class="gap-6 sm:flex">
          <FormSelect
            class="flex-1"
            :label="['專案類別', '*']"
            id="category"
            name="專案類別"
            :value="data.category"
            :options="categories"
          />
          <FormInput
            class="flex-1"
            :label="['募資目標金額', '*']"
            type="number"
            id="target"
            name="募資目標金額"
            :value="data.target"
          />
        </div>
        <FormInput
          :label="['專案影片']"
          type="text"
          id="video"
          name="專案影片"
          :value="data.video"
          placeholder="https://www.youtube.com/watch?v=Abcd0e123Fg"
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
