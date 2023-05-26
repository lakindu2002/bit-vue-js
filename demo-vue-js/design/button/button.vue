<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Hello World",
    required: false,
  },
  style: {
    type: Object,
    default: () => ({}),
    required: false,
  },
});

const buttonStyle = computed(() => {
  return props.style;
});
</script>

<template>
  <button :style="buttonStyle">{{ label }}</button>
</template>
