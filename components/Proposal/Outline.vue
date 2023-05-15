<template>
  <section class="">
    <div class="mb-6">
      <label for="title">專案標題</label>
      <input id="title" type="text" name="title" />
    </div>
    <div class="mb-6">
      <label for="summary">內容摘要</label>
      <textarea id="summary" type="text" name="summary"></textarea>
    </div>
    <div class="mb-6">
      <label for="cover">專案封面</label>
      <input id="cover" type="file" name="cover" />
    </div>
    <div class="mb-6">
      <label for="title">募資開始與結束時間</label>
      <div class="flex gap-2">
        <input id="title" type="date" name="title" />
        <input id="title" type="date" name="title" />
      </div>
    </div>
    <div class="mb-6">
      <label for="category">專案類別</label>
      <select id="category" name="category">
        <option value="1">校園</option>
        <option value="2">公益</option>
        <option value="3">市集</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="target">專案目標</label>
      <input id="target" type="number" name="target" />
    </div>
    <div class="mb-6">
      <label for="video">專案影片</label>
      <input id="video" type="file" name="video" />
    </div>
  </section>
</template>
