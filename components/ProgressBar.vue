<script setup lang="ts">
const props = defineProps({
  type: {
    type: [String],
    default: '校園'
  },
  minAmount: {
    type: [Number],
    default: 0
  },
  maxAmount: {
    type: [Number],
    default: 100
  },
  currentAmount: {
    type: [Number],
    default: 0
  }
});

const classes = computed(() => {
  return [
    'progress',
    {
      'bg-primary': props.type === '校園',
      'bg-success': props.type === '公益',
      'bg-secondary': props.type === '市集'
    }
  ];
});

const percent = ref(0);

watchEffect(() => {
  percent.value =
    props.currentAmount <= props.minAmount
      ? 0
      : ((props.currentAmount - props.minAmount) * 100) / (props.maxAmount - props.minAmount);
});
</script>

<template>
  <div class="h-3 w-full rounded-full bg-grey-200">
    <div :class="classes" :style="{ width: percent + '%' }"></div>
  </div>
</template>
