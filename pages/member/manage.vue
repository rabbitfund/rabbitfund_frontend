<script setup>
import { storeToRefs } from 'pinia';
import avatar from '@/assets/images/avatar.png';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const { uploadImage } = useApi();

const { getUserDetail, putUserDetail } = useApi();
const userName = ref('');
const userEmail = ref('');
const userPhone = ref('');
const userCover = ref('');
const userIntro = ref('');
const userWebsite = ref('');
const { data } = await getUserDetail();

const res = data.value;
const userdata = res.data;

if (res && res.ok) {
  console.log(userdata);
  userName.value = userdata.user_name;
  userEmail.value = userdata.user_email;
  userPhone.value = userdata.user_phone;
  userCover.value = userdata.user_cover;
  userIntro.value = userdata.user_intro;
  userWebsite.value = userdata.user_website;
  // user_interests: [];
}

function handlePostUserDetail() {
  putUserDetail({
    name: userName.value,
    phone: userPhone.value,
    cover: userCover.value,
    intro: userIntro.value,
    website: userWebsite.value
  }).then((res) => {
    if (res.error.value) {
      return;
    }
    userInfo.value.user_name = userName.value;
    userInfo.value.user_cover = userCover.value;
  });
}

definePageMeta({
  middleware: ['auth']
});

const doUploadImage = async (event) => {
  if (event.target.files.length === 0) {
    return;
  }
  const image = event.target.files[0];
  const data = new FormData();
  data.append('', image);
  const res = await uploadImage(data);
  userCover.value = res.data.value.file.file_url;
};
</script>

<template>
  <div class="mx-auto w-full">
    <h2>管理個人資料</h2>
    <form class="shadow-md mb-4 rounded bg-white px-8 pb-8 pt-6">
      <div class="md:flex md:gap-6">
        <div class="mb-6 md:w-1/2">
          <div class="mb-6">
            <label for="name">姓名</label>
            <input id="name" v-model="userName" type="text" name="name" placeholder="姓名" />
          </div>
          <div class="mb-6">
            <label for="cellphone">手機</label>
            <input
              id="cellphone"
              v-model="userPhone"
              type="tel"
              name="cellphone"
              placeholder="手機"
            />
          </div>
        </div>
        <div class="mb-6 md:w-1/2">
          <div class="mb-6">
            <label for="cover">大頭照</label>
            <input id="cover" type="file" name="cover" accept="image/*" @change="doUploadImage" />
          </div>
          <img class="h-[100px]" :src="userCover || avatar" />
        </div>
      </div>

      <div class="mb-6">
        <label for="email">登入帳號</label>
        <input id="email" v-model="userEmail" type="email" name="email" disabled />
      </div>
      <div class="mb-6">
        <label for="summary">自我介紹</label>
        <textarea
          id="summary"
          v-model="userIntro"
          type="text"
          name="summary"
          placeholder="自我介紹"
        ></textarea>
      </div>
      <div class="mb-6">
        <label for="website">相關網站</label>
        <input
          id="website"
          v-model="userWebsite"
          type="text"
          name="website"
          placeholder="相關網站"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="btn btn-primary mt-6 px-4 py-2" type="button" @click="handlePostUserDetail">
          修改
        </button>
      </div>
    </form>
  </div>
</template>
