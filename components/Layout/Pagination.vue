<script setup>
const props = defineProps({
  totalPage: {
    type: [Number],
    default: 1
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
  <nav aria-label="Page navigation example" class="mx-auto">
    <ul class="inline-flex items-center gap-x-5">
      <li class="h-6 w-6 text-center">
        <button
          @click="handlePageChange(props.currentPage - 1)"
          class="group hover:disabled:cursor-not-allowed"
          :disabled="props.currentPage === 1"
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="group-disabled:fill-grey-200"
              d="M6.31107 0.710007C6.40377 0.80252 6.47732 0.912409 6.5275 1.03338C6.57769 1.15436 6.60352 1.28404 6.60352 1.41501C6.60352 1.54598 6.57769 1.67566 6.5275 1.79663C6.47732 1.9176 6.40377 2.02749 6.31107 2.12001L2.43107 6.00001L6.31107 9.88001C6.49805 10.067 6.60309 10.3206 6.60309 10.585C6.60309 10.8494 6.49805 11.103 6.31107 11.29C6.12409 11.477 5.8705 11.582 5.60607 11.582C5.34165 11.582 5.08805 11.477 4.90107 11.29L0.311071 6.70001C0.218368 6.60749 0.14482 6.4976 0.0946388 6.37663C0.0444574 6.25566 0.0186281 6.12598 0.0186281 5.99501C0.0186281 5.86404 0.0444574 5.73436 0.0946388 5.61338C0.14482 5.49241 0.218368 5.38252 0.311071 5.29001L4.90107 0.700007C5.28107 0.320007 5.92107 0.320007 6.31107 0.710007Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
      </li>
      <li v-for="i in props.totalPage" :key="i">
        <button
          @click="handlePageChange(i)"
          class="h-8 w-8 rounded-full text-grey-400"
          :class="{
            'bg-primary text-white': props.currentPage === i,
            'hover:bg-primary-light hover:text-primary': props.currentPage !== i
          }"
        >
          {{ i }}
        </button>
      </li>
      <li class="h-6 w-6 text-center">
        <button
          @click="handlePageChange(props.currentPage + 1)"
          class="group hover:disabled:cursor-not-allowed"
          :disabled="props.currentPage === props.totalPage"
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="group-disabled:fill-grey-200"
              d="M0.310022 0.710007C0.217319 0.80252 0.143771 0.912409 0.0935898 1.03338C0.0434083 1.15436 0.0175781 1.28404 0.0175781 1.41501C0.0175781 1.54598 0.0434083 1.67566 0.0935898 1.79663C0.143771 1.9176 0.217319 2.02749 0.310022 2.12001L4.19002 6.00001L0.310022 9.88001C0.123045 10.067 0.0180016 10.3206 0.0180016 10.585C0.0180016 10.8494 0.123045 11.103 0.310022 11.29C0.497 11.477 0.750596 11.582 1.01502 11.582C1.27945 11.582 1.53304 11.477 1.72002 11.29L6.31002 6.70001C6.40273 6.60749 6.47627 6.4976 6.52645 6.37663C6.57664 6.25566 6.60247 6.12598 6.60247 5.99501C6.60247 5.86404 6.57664 5.73436 6.52645 5.61338C6.47627 5.49241 6.40273 5.38252 6.31002 5.29001L1.72002 0.700007C1.34002 0.320007 0.700022 0.320007 0.310022 0.710007Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
