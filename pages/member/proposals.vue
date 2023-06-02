<script setup>
const { getOwnerProject } = useApi();

const project = ref([]);
onMounted(async () => {
  await nextTick();

  getOwnerProject()
    .then((res) => {
      console.log(res.data.value.data);
      const projectData = res.data.value.data;
      project.value = projectData;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <h1>提案紀錄</h1>
  <div class="flex flex-col gap-4">
    <CardMemberProject
      v-for="i in project"
      :key="project._id + i"
      :can-modify="false"
      :title="project.project_title"
      :cover="project.project_cover"
      :project="project"
    />
    <!-- TODO: 待研究傳入參數不知為何沒反應 -->
    <ul>
      <li v-for="i in project" :key="project._id + i">
        <p>{{ i.project_title }}</p>
        <p>{{ i._id }}</p>
      </li>
    </ul>
  </div>
  <!-- { "_id": "646c9798a7b29374a883d34b", "project_title": "讓孩子不再挨餓受凍 《弱勢天使拯救計畫》", "project_summary": "無法選擇出身、小小年紀的孩子就得忍受飢寒交迫，甚至從小活在家暴、性剝削等不見天日的地獄裡。弱勢家庭中的孩子，往往是黑暗中最令人心疼的畫面。中宣社福每年約服務7000人次，幫助弱勢孩童與脆弱家庭邁向光明；然而，據統計，只有50%的弱勢孩童有機會被幫助。我們也需要妳的支持，與我們一起，為他們的人生帶來改變的機會。", "project_content": "無法選擇出身、小小年紀的孩子就得忍受飢寒交迫，甚至從小活在家暴、性剝削等不見天日的地獄裡。弱勢家庭中的孩子，往往是黑暗中最令人心疼的畫面。中宣社福每年約服務7000人次，幫助弱勢孩童與脆弱家庭邁向光明；然而，據統計，只有50%的弱勢孩童有機會被幫助。我們也需要妳的支持，與我們一起，為他們的人生帶來改變的機會。", "project_category": "公益", "project_target": 9540000, "project_progress": 0, "project_status": 2, "project_start_date": "2023-05-23T00:00:00.000Z", "project_end_date": "2023-08-23T00:00:00.000Z", "project_create_date": "2023-05-23T10:38:16.435Z", "project_update_date": "2023-05-31T15:10:45.649Z", "project_update_final_member": "646c95950be970c601abe753", "project_cover": "https://storage.googleapis.com/rabbitfund01.appspot.com/images/ff11bb06-dc05-4c78-9434-999ec4b5934f.png?GoogleAccessId=firebase-adminsdk-1xnh8%40rabbitfund01.iam.gserviceaccount.com&Expires=16756646400&Signature=Qtzv3muBlIjuBx0yGdnU6JnVePxD8OR3fYa9NAaZog5GQ3k7BksO%2FTKZXe3l5YB3UCNkR4mg7PDB5D%2FsyB428Wwc%2BnmJudpvxiNVrYv8ZPDGSKGAS876Di5eFy3i0fmIgaD%2BPSOl%2FPfkaOhyPUdjCMHfW0fKNntP%2Ft9eTx23SMue%2BbP2RWMAVoXzYOFllBJPqWHX%2BCCG4ctF0ZFKTEVT4h625VapPUtofQI4imkrQA6c4r4w8%2BclWczK%2FakWmTdr%2BRiLEonD0Kx3oHMXy0X4UlQJnIYr5IIpTwFWJwZCmBlEzI0jX2tfk3r6Y4S9ivW9dEt0h6lTM8SEexjNshoD8A%3D%3D", "project_video": "https://www.youtube.com/embed/bSZ7GsCTTiM?controls=0&modestbranding=1&rel=0&showinfo=0&loop=0&fs=0&hl=zh&enablejsapi=1&origin=https%3A%2F%2Fhandhand.org&widgetid=1", "project_risks": "the risks", "project_tag": "recent", "ownerInfo": "646c9c68c2958c4ecd83d25f", "delete": false, "delete_member": null, "option": [ "646c98faa7b29374a883d356", "646c9adca7b29374a883d37c", "646c9a7ca7b29374a883d376", "646c9854a7b29374a883d350" ], "news": [], "order": [] } -->
</template>
