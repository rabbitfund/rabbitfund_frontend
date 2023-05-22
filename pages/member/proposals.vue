<template>
  <h1>提案紀錄</h1>
  <div class="flex flex-col gap-4">
    <CardMemberProject v-for="i in 3" :key="i" />
  </div>
</template>
