<template>
  <section class="flex h-full min-h-screen flex-col overflow-hidden">
    <LayoutNavbar />
    <div class="flex w-screen items-center justify-center py-12">
      <CardBlockRabbit :title="'發生了一點錯誤'" :btn="'回到首頁'" :link="'/'" />
    </div>
    <LayoutFooter />
  </section>
</template>
