<script setup>
import mockImg from '~/assets/images/mock.png';

const props = defineProps({
  canModify: {
    type: [Boolean],
    default: true
  },
  project: {
    type: [Object]
  }
});

const { formatTimeLeft } = useSetProjectStatus(props.project);

const formattedAmount = computed(() => {
  return props.project?.project_progress?.toLocaleString();
});

const sponsorDetail = {};
sponsorDetail.value = {
  _id: '647236aadcb8be554f46b385',
  user: {
    _id: '647c838a38e4b9d2a9bea8f7',
    user_phone: '0900-000-000',
    user_name: '歐媚佩',
    user_email: 'hans_rodriguez34@yahoo.com'
  },
  ownerInfo: '6453d211c6ab8c4bfc26717d',
  project: {
    _id: '64637814b8f583fff70452bd',
    project_title: '愛奇兒家庭社區共融中心集資計畫',
    project_cover: 'cover URL'
  },
  option: {
    _id: '6471da154fe1111a089b5324',
    option_name: '貼心套套',
    option_cover: '/img/option.img'
  },
  order_option_quantity: 1,
  order_extra: 0,
  order_total: 2290,
  order_note: '這是備註',
  order_create_date: '2023-05-27T16:57:37.546Z',
  order_status: 0,
  order_shipping_status: 0,
  order_info: {
    _id: '647236aadcb8be554f46b383',
    payment_price: 2290,
    payment_status: 2,
    invoice_type: '電子載具',
    invoice_carrier: '電子發票 - 條碼 (/RES8356)',
    invoice_date: '2023-06-04T14:02:26.851+00:00',
    invoice_number: 'MNW-43430602',
    newebpay_timeStamp: '1685206699',
    newebpay_escrowBank: '809',
    newebpay_payBankCode: '809',
    newebpay_payerAccount5Code: '12345',
    payment_method: 'WEBATM'
  }
};

const modalSponsorDetail = ref(null);

const openModalSponsorDetail = () => {
  modalSponsorDetail.value.openModal();
};
</script>

<template>
  <section
    class="flex flex-col justify-between gap-12 rounded-lg border p-5 lg:flex-row lg:px-8 lg:py-6"
  >
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 overflow-hidden rounded-t-lg xl:col-span-5">
        <img
          :src="
            props.project?.project_cover && props.project?.project_cover !== 'cover URL'
              ? props.project?.project_cover
              : mockImg
          "
          class="object-contain"
          alt="carrot"
        />
      </div>
      <div class="col-span-12 xl:col-span-7">
        <span class="block w-[72px]"
          ><Badge
            :type="props.project?.project_category"
            :name="props.project?.project_category"
          ></Badge
        ></span>

        <h4 class="mt-2">{{ props.project?.project_title }}</h4>
        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p>贊助人次</p>
            <p class="text-[20px] font-bold xl:text-2xl">19</p>
          </div>
          <div>
            <p>提案倒數</p>
            <p class="text-[20px] font-bold xl:text-2xl">{{ formatTimeLeft }}</p>
          </div>
          <div>
            <p>目標金額</p>
            <p class="text-[20px] font-bold xl:text-2xl">{{ formattedAmount }}</p>
          </div>
        </div>
      </div>
      <div class="col-span-12 hidden lg:block">
        {{ props.project?.project_description }}
      </div>
    </div>

    <div class="flex flex-col items-center justify-center lg:min-w-[140px]">
      <div class="mb-11 flex gap-1 lg:block">
        <p class="leading-10 lg:leading-normal">目前募資金額</p>
        <p class="text-2xl font-bold">{{ formattedAmount }}</p>
      </div>
      <div class="flex gap-4 lg:block">
        <button v-if="props.canModify" class="btn btn-primary-outline lg:mb-7">修改提案</button>
        <div class="flex justify-center text-grey-400">
          <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
        </div>
      </div>
    </div>
  </section>
  <a href="#" class="font-bold text-primary underline" @click="openModalSponsorDetail()">贊助者詳細資料</a>
  <ModalSponsorDetail ref="modalSponsorDetail" :detail="sponsorDetail" />
</template>
