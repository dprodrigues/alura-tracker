<template>
  <button class="button" @click="onClick" :disabled="disabled">
    <span class="icon">
      <i :class="icon"></i>
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TimeTrackerButton",
  emits: ['onClick'],
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
    }
  },
  methods: {
    onClick(): void {
      this.$emit("onClick")
    }
  }
})
</script>