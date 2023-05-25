<script setup lang="ts">
import mockImg from '~/assets/images/mock.png';

const props = defineProps({
  id: {
    type: [String]
  },
  type: {
    type: [String]
  },
  timeLeft: {
    type: [String]
  },
  title: {
    type: [String]
  },
  proposer: {
    type: [String]
  },
  minAmount: {
    type: [Number]
  },
  maxAmount: {
    type: [Number]
  },
  currentAmount: {
    type: [Number]
  },
  cover: {
    type: [String]
  }
});

const formattedAmount = computed(() => {
  return props.currentAmount?.toLocaleString();
});
</script>

<template>
  <div
    class="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white"
    @click="navigateTo(`/project/${props.id}/info`)"
  >
    <div class="overflow-hidden rounded-t-lg">
      <img :src="(props.cover && props.cover !== 'cover URL') ? props.cover : mockImg" class="object-cover" alt="carrot" />
    </div>
    <div class="flex flex-auto flex-col p-4 pb-6">
      <div class="mb-4 flex items-center justify-between">
        <Badge :type="props.type" :name="props.type"></Badge>
        <span class="text-grey-500">{{ props.timeLeft }}</span>
      </div>
      <h3 class="mb-2 line-clamp-2 text-h4 font-bold">
        {{ props.title }}
      </h3>
      <span class="mb-6 mt-auto block text-lg">{{ props.proposer }}</span>
      <ProgressBar
        class="mb-2"
        :type="props.type"
        :minAmount="props.minAmount"
        :maxAmount="props.maxAmount"
        :currentAmount="props.currentAmount"
      />
      <span class="text-lg font-bold">$ {{ formattedAmount }}</span>
    </div>
  </div>
</template>
