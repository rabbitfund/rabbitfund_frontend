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
  },
  showPercent: {
    type: [Boolean],
    default: true
  }
});

const classes = computed(() => {
  return [
    'progress',
    {
      'bg-info': props.type === '校園',
      'bg-warning': props.type === '公益',
      'bg-secondary': props.type === '市集'
    }
  ];
});

const percentStyle = computed(() => {
  return [
    'font-bold',
    'whitespace-nowrap',
    {
      'text-info': props.type === '校園',
      'text-warning': props.type === '公益',
      'text-secondary': props.type === '市集'
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

const formattedPercent = computed(() => {
  return Math.floor(percent.value)?.toLocaleString();
});
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="h-3 w-full overflow-hidden rounded-full bg-grey-200">
      <div :class="classes" :style="{ width: percent + '%' }"></div>
    </div>
    <span v-if="props.showPercent" class="leading-none" :class="percentStyle">{{ formattedPercent }} %</span>
  </div>
</template>
