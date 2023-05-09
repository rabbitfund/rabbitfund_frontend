<script setup lang="ts">
const props = defineProps({
  type: {
    type: [String],
    default: '校園'
  }
});

const classes = computed(() => {
  return [
    'badge',
    {
      'bg-primary-light text-primary': props.type === '校園',
      'bg-success-emphasis text-success': props.type === '公益',
      'bg-secondary-emphasis text-secondary': props.type === '市集'
    }
  ];
});
</script>

<template>
  <div :class="classes">{{ props.type }}</div>
</template>
