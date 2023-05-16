<template>
  <h1>贊助紀錄</h1>
  <div class="flex flex-col gap-4">
    <MemberProjectCard :can-modify="false" v-for="i in 3" :key="i" />
  </div>
</template>
