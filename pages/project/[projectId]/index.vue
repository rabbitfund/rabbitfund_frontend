<template>
  <h1>{{ projectId }} 專案介紹</h1>
  <h2>{{ title }}</h2>
  <h2>{{ summary }}</h2>
  <h4>{{ info }}</h4>
</template>

<script setup>
const route = useRoute();
const { getProject } = useApi();
const { projectId } = route.params;
const title = ref("")
const summary = ref("")
const info = ref("")

onMounted(() => {
  getProject(projectId)
    .then((res) => {
      const project = res.data.value.data

      title.value = project.project_title
      summary.value = project.project_summary
      info.value = project
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>