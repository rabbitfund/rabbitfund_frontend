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
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="mb-6">
    <label :for="id">
      {{ props.label[0] }}
      <span v-if="props.label[1]" class="ml-1 text-primary">*</span>
    </label>
    <Field
      :id="id"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      rows="3"
      as="textarea"
    >
    </Field>
    <ErrorMessage :name="name" as="span" class="mt-2 inline-block text-sm text-primary" />
  </div>
</template>
