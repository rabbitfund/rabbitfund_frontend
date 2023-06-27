<script setup>
const props = defineProps({
  label: {
    type: Array,
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
  value: {
    type: [String, Object, Number],
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
      v-if="props.type == 'file'"
      :type="type"
      :id="id"
      :name="name"
      accept="image/*, image/heic, image/heif, video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv" :value="value" />
    <Field v-else :type="type" :id="id" :name="name" :placeholder="placeholder" :value="value" />
    <ErrorMessage :name="name" class="mt-2 block text-sm text-primary" />
  </div>
</template>
