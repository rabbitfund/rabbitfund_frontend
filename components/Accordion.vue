<script setup lang="ts">
import { initAccordions } from 'flowbite';

onMounted(() => {
  initAccordions();
});

const props = defineProps({
  data: {
    type: [Object],
  }
});
</script>

<template>
  <ul id="accordion-collapse" data-accordion="collapse">
    <li v-for="(item, index) in props.data" :key="`${index}`" class="mb-3 rounded border">
      <h3 :id="`accordion-collapse-heading-${index + 1}`">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 p-4 text-left text-lg font-bold hover:bg-primary-light"
          :data-accordion-target="`#accordion-collapse-body-${index + 1}`"
          aria-expanded="true"
          :aria-controls="`accordion-collapse-body-${index + 1}`"
        >
          <span>{{ item.title }}</span>
          <svg
            data-accordion-icon
            class="h-6 w-6 shrink-0 rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h3>
      <div
        :id="`accordion-collapse-body-${index + 1}`"
        class="hidden"
        :aria-labelledby="`accordion-collapse-heading-${index + 1}`"
      >
        <div class="flex flex-col gap-4 p-4">
          <p>
            {{ item.content }}
          </p>
          <span class="text-sm text-grey-500">最後更新於 {{ item.create_date }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
