<template>
  <section>
    <strong class="time-tracker">{{ elapsedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TimeTracker",
  props: {
    time: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    elapsedTime(): string {
      return new Date(this.time * 1000).toISOString().substr(11, 8)
    }
  },
})
</script>

<style>
.time-tracker {
  color: var(--text-primary);
}
</style>