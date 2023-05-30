<script setup>
const props = defineProps({
  totalPage: {
    type: [Number]
  },
  currentPage: {
    type: [Number]
  },
  handlePageChange: {
    type: [Function]
  }
});
</script>
<template>
  <nav aria-label="Page navigation example" class="mx-auto my-4">
    <ul class="inline-flex -space-x-px">
      <li>
        <button
          class="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Previous
        </button>
      </li>
      <li v-for="i in props.totalPage" :key="i">
        <button
          @click="handlePageChange(i)"
          class="border border-gray-300 px-3 py-2 leading-tight"
          :class="{
            'border border-gray-300 bg-blue-50 text-blue-600 hover:bg-blue-100':
              props.currentPage === i,
            'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700': props.currentPage !== i
          }"
        >
          {{ i }}
        </button>
      </li>
      <li>
        <button
          class="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
