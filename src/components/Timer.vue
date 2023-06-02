<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimeTracker :time="time" />

    <TimeTrackerButton label="play" icon="fas fa-play" :disabled="timeRunning" @onClick="start" />

    <TimeTrackerButton label="stop" icon="fas fa-stop" :disabled="!timeRunning" @onClick="stop" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeTracker from './TimeTracker.vue';
import TimeTrackerButton from './TimeTrackerButton.vue';

export default defineComponent({
  name: "Timer",
  data() {
    return {
      time: 0,
      intervalId: 0,
      timeRunning: false,
    };
  },
  emits: ['timerFinished'],
  methods: {
    start() {
      this.timeRunning = true

      this.intervalId = setInterval(() => {
        this.time++;
      }, 1000);
    },
    stop() {
      this.$emit("timerFinished", this.time)

      this.timeRunning = false
      this.time = 0

      clearInterval(this.intervalId);
    }
  },
  components: { TimeTracker, TimeTrackerButton }
})
</script>