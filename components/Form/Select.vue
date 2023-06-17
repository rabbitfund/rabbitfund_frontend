<script setup>
const props = defineProps({
  label: {
    type: Array,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="mb-6">
    <label :for="id">
      {{ props.label[0] }}
      <span v-if="props.label[1]" class="ml-1 text-primary">*</span>
    </label>
    <Field :id="id" :name="name" as="select" :value="value">
      <option value="" disabled>--- 請選擇 ---</option>
      <option v-for="(item, index) in options" :key="index" :value="index + 1">
        {{ item }}
      </option>
    </Field>
    <ErrorMessage :name="name" as="span" class="mt-2 inline-block text-sm text-primary" />
  </div>
</template>
