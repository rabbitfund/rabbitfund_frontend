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
    type: [Array, Number],
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  }
});

const selectedValue = ref(props.value);
const emit = defineEmits(['changed']);
const act = (val) => emit('changed', val);

watch(
  () => selectedValue.value,
  (newValue) => {
    act(newValue)
  }
)
</script>

<template>
  <div class="mb-6">
    <label :for="id">
      {{ props.label[0] }}
      <span v-if="props.label[1]" class="ml-1 text-primary">*</span>
    </label>
    <Field :id="id" :name="name" as="select" v-model="selectedValue">
      <option value="" disabled selected>--- 請選擇 ---</option>
      <option v-for="(item, index) in options" :key="index" :value="`${index + 1}`">
        {{ item }}
      </option>
    </Field>
    <ErrorMessage :name="name" as="span" class="mt-2 inline-block text-sm text-primary" />
  </div>
</template>
