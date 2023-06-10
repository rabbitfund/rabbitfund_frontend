<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const targetModal = ref(null);

const { openModal, closeModal } = useModal(targetModal);

const props = defineProps({
  detail: [Object]
});
console.log('modalOrderDetail', props.detail);

defineExpose({
  openModal
});

const formattedAmount = computed(() => {
  return props.detail?.order_info.payment_price.toLocaleString();
});
</script>

<template>
  <div
    ref="targetModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden p-3 pt-14 md:inset-0 lg:pt-[93px]"
  >
    <div
      class="relative max-h-full lg:w-[calc(theme('screens.lg')*2/3)] xl:w-[calc(theme('screens.xl')*2/3)]"
    >
      <!-- Modal content -->
      <div class="relative bg-white p-5 pb-12 pt-[60px] shadow lg:px-8 lg:py-12">
        <!-- Modal header -->
        <button
          type="button"
          class="absolute right-5 top-5 rounded hover:bg-primary-light"
          @click="closeModal()"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0008 13.4L7.10078 18.3C6.91745 18.4834 6.68411 18.575 6.40078 18.575C6.11745 18.575 5.88411 18.4834 5.70078 18.3C5.51745 18.1167 5.42578 17.8834 5.42578 17.6C5.42578 17.3167 5.51745 17.0834 5.70078 16.9L10.6008 12L5.70078 7.10005C5.51745 6.91672 5.42578 6.68338 5.42578 6.40005C5.42578 6.11672 5.51745 5.88338 5.70078 5.70005C5.88411 5.51672 6.11745 5.42505 6.40078 5.42505C6.68411 5.42505 6.91745 5.51672 7.10078 5.70005L12.0008 10.6L16.9008 5.70005C17.0841 5.51672 17.3174 5.42505 17.6008 5.42505C17.8841 5.42505 18.1174 5.51672 18.3008 5.70005C18.4841 5.88338 18.5758 6.11672 18.5758 6.40005C18.5758 6.68338 18.4841 6.91672 18.3008 7.10005L13.4008 12L18.3008 16.9C18.4841 17.0834 18.5758 17.3167 18.5758 17.6C18.5758 17.8834 18.4841 18.1167 18.3008 18.3C18.1174 18.4834 17.8841 18.575 17.6008 18.575C17.3174 18.575 17.0841 18.4834 16.9008 18.3L12.0008 13.4Z"
              fill="#333333"
            />
          </svg>
        </button>
        <section class="mb-7 border-b border-grey-200 pb-4">
          <h3 class="text-h4 text-primary">
            {{ props.detail?.project.project_title }}
          </h3>
        </section>
        <!-- Modal body -->
        <section class="mb-7 rounded-lg bg-light-emphasis p-5">
          <ul class="flex flex-col flex-wrap gap-y-5 lg:-mx-2 lg:flex-row lg:gap-y-4">
            <li class="basis-1/3 lg:px-2">
              <span class="mb-1 text-grey-400">方案名稱</span>
              <p>{{ props.detail?.option.option_name }}</p>
            </li>
            <!-- NOTE: 這邊所有 user 的資料暫時直接抓 userStore 的，未來資料庫有增加欄位，可以再調整成付款人與會員姓名資料不同 -->
            <li class="basis-1/3 lg:px-2">
              <span class="mb-1 text-grey-400">付款人姓名</span>
              <p>{{ userInfo?.user_name }}</p>
            </li>
            <li v-if="userInfo?.user_phone" class="basis-1/3 lg:px-2">
              <span class="mb-1 text-grey-400">付款人手機</span>
              <p>{{ userInfo?.user_phone }}</p>
            </li>
            <li class="basis-2/3 lg:px-2">
              <span class="mb-1 text-grey-400">E-mail</span>
              <p>{{ userInfo?.user_email }}</p>
            </li>
            <li class="basis-1/3 lg:px-2">
              <span class="mb-1 text-grey-400">備註</span>
              <p>{{ props.detail?.order_note }}</p>
            </li>
          </ul>
        </section>

        <section class="mb-[46px] lg:mb-12">
          <h3 class="mb-3.5 flex items-center gap-2">
            <span>
              <img src="~/assets/images/icons/credit-card.svg" class="w-7" alt="信用卡" />
            </span>
            <span class="text-h4">付款資訊</span>
          </h3>
          <ul class="flex flex-col flex-wrap gap-y-4 lg:-mx-2 lg:flex-row lg:gap-y-5">
            <li class="basis-1/4 lg:px-2">
              <span class="mb-1 text-grey-400">付款總額</span>
              <p>$ {{ formattedAmount }}</p>
            </li>
            <li class="basis-3/4 lg:px-2">
              <span class="mb-1 text-grey-400">付款方式</span>
              <p>{{ props.detail?.order_info.payment_method }}</p>
            </li>
            <li class="basis-1/4 lg:px-2">
              <span class="mb-1 text-grey-400">發票號碼</span>
              <p>{{ props.detail?.order_info.invoice_number }}</p>
            </li>
            <li class="basis-3/4 lg:px-2">
              <span class="mb-1 text-grey-400">發票類型</span>
              <p>{{ props.detail?.order_info.invoice_type }}</p>
            </li>
          </ul>
        </section>
        <!-- Modal footer -->
        <section class="text-center">
          <button type="button" class="btn btn-primary px-12" @click="closeModal()">確定</button>
        </section>
      </div>
    </div>
  </div>
</template>
