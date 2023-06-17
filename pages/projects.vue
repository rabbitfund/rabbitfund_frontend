<script setup>
const route = useRoute();
const page = ref(parseInt(route.query.page) || 1);
const type = ref(route.query.type || '');
const k = ref(route.query.k || '');
const tag = ref(route.query.tag || '');

function createNewRoute(page, type, k, tag) {
  const params = new URLSearchParams();

  if (page !== 1) {
    params.append('page', page);
  }
  if (type) {
    params.append('type', type);
  }
  if (k) {
    params.append('k', k);
  }
  if (tag) {
    params.append('tag', tag);
  }
  if (!params.toString()) return '/projects';

  return '/projects?' + params.toString();
}
watch(
  route,
  (value) => {
    page.value = parseInt(value.query.page) || 1;
    type.value = value.query.type || '';
    k.value = value.query.k || '';
    tag.value = value.query.tag || '';
  },
  { deep: true, immediate: true }
);

watch([page, type, k, tag], () => {
  const newRoute = createNewRoute(page.value, type.value, k.value, tag.value);
  if (newRoute === route.fullPath) return;
  navigateTo(newRoute);

  window && window.scrollTo({ top: 0, behavior: 'smooth' });
});

watch([type, k, tag], () => {
  page.value = 1;
});

const { data: result } = await useAsyncData(
  'projectList' + page.value + '_' + type.value + '_' + k.value + '_' + tag.value,
  () =>
    $fetch(`/projects`, {
      params: {
        page: page.value,
        type: type.value,
        k: k.value,
        tag: tag.value
      }
    }),
  {
    watch: [page, type, k, tag],
    transform: (_projects) => _projects.data,
    server: false
  }
);
</script>
<template>
  <div class="container my-6 flex flex-col justify-between gap-3 sm:flex-row lg:my-12">
    <h2 class="whitespace-nowrap">專案列表</h2>
    <div class="flex gap-6">
      <select v-model="type" class="w-1/2 sm:w-[120px]" value="">
        <option value="">全部分類</option>
        <option value="校園">校園</option>
        <option value="公益">公益</option>
        <option value="市集">市集</option>
      </select>
      <select v-model="tag" class="w-1/2 sm:w-[120px]" value="">
        <option value="">全部主題</option>
        <option value="recent">近期</option>
        <option value="hot">熱門</option>
        <option value="long">長期贊助</option>
      </select>
    </div>
  </div>

  <section
    v-if="result?.projects.length && result.projects.length > 0"
    class="container mb-8 lg:mb-12"
  >
    <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="project in result.projects"
        :key="project._id"
        class="cursor-pointer"
        @click="navigateTo(`/project/${project._id}/info`)"
      >
        <Card :project="project" />
      </li>
    </ul>
  </section>

  <LayoutPagination class="mb-16 lg:mb-20"
    :totalPage="result?.totalPages ? result.totalPages : 1"
    :currentPage="page"
    :handle-page-change="
      (i) => {
        page = i;
      }
    "
  />
</template>
