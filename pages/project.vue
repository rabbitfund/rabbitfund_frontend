<script setup>
import { useProjectStore } from '~/stores/project';
const projectStore = useProjectStore();
const { setProject } = projectStore;

const route = useRoute();
const { projectId } = route.params;
try {
  const { getProject } = useApi();
  const { data } = await getProject(projectId);
  const project = data.value.data;
  setProject(project);

  useSeoMeta({
    title: `${project.project_title} - 倍而兔募資平台`,
    ogTitle: `${project.project_title} - 倍而兔募資平台`,
    description: project.project_content,
    ogDescription: project.project_content
  });
} catch (e) {
  console.error(e);
}
</script>
<template>
  <NuxtPage />
</template>
