<script setup lang="ts">
const props = defineProps({
  type: {
    type: [String],
    default: ''
  },
  name: {
    type: [String],
    default: ''
  }
});

const classes = computed(() => {
  return [
    'badge',
    {
      'bg-info-emphasis text-info': props.type === '校園',
      'bg-warning-emphasis text-warning': props.type === '公益',
      'bg-secondary-emphasis text-secondary': props.type === '市集'
    }
  ];
});
</script>

<template>
  <span :class="classes">{{ props.name }}</span>
</template>
