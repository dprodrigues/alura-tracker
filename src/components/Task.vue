<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Tarefa sem descrição' }}</div>

      <div class="column">
        <TimeTracker :time="task.time" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TimeTracker from './TimeTracker.vue';
import Box from './Box.vue';
import { ITask } from '@/interfaces/ITask';

export default defineComponent({
  name: "Task",
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  },
  components: {
    TimeTracker,
    Box,
  }
})

</script>
