<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <Field :name="name" v-slot="{ field }" as="div" class="mb-6">
    <label :for="id">{{ props.label }}</label>
    <input
      v-bind="field"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
    />
    <ErrorMessage :name="name" as="span" class="text-sm text-primary mt-2 inline-block" />
  </Field>
</template>
