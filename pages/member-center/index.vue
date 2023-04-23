<script setup>
const { getUserDetail, postUserDetail } = useApi();
const userName = ref('');
const { data } = await getUserDetail();

const res = data.value;
if (res && res.ok) {
  userName.value = res.data.user_name;
}

function handlePostUserDetail() {
  postUserDetail({ name: userName.value });
}

definePageMeta({
  middleware: ['auth']
});
</script>

<template>
  <div class="mx-auto w-full max-w-xs">
    <form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="username"> Username </label>
        <input
          id="username"
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Username"
          v-model="userName"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          @click="handlePostUserDetail"
        >
          修改
        </button>
      </div>
    </form>
  </div>
</template>
