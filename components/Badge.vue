<script setup lang="ts">
const props = defineProps({
  type: {
    type: [String],
    default: '校園',
    validator: (value: string) => {
      return ['校園', '公益', '市集'].includes(value);
    }
  }
});

const classes = computed(() => {
  return [
    'px-5 py-2 rounded-full',
    'cursor-pointer',
    'font-bold text-center',
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
