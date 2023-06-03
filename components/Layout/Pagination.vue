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
    <ul class="inline-flex space-x-4">
      <li>
        <button
          @click="handlePageChange(props.currentPage - 1)"
          class="li"
          :class="{ 'li--disabled': props.currentPage === 1 }"
          :disable="props.currentPage === 1"
        >
          <img src="@/assets/images/icons/arrow-left.svg" alt="" />
        </button>
      </li>
      <li v-for="i in props.totalPage" :key="i">
        <button
          @click="handlePageChange(i)"
          class="li"
          :class="{
            'li--active': props.currentPage === i,
            'li--default': props.currentPage !== i
          }"
        >
          {{ i }}
        </button>
      </li>
      <li>
        <button
          class="li"
          :class="{ 'li--disabled': props.currentPage === props.totalPage }"
          :disable="props.currentPage === props.totalPage"
        >
          <img src="@/assets/images/icons/arrow-right.svg" alt="" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scope>
.li {
  @apply h-8 w-8 rounded-full;
  @apply flex items-center justify-center;
}
.li--default {
  @apply hover:bg-gray-100 hover:text-gray-700;
}
.li--active {
  @apply bg-primary text-white;
}
.li--disabled {
  @apply cursor-not-allowed opacity-40;
}
</style>
