<template>
  <BoxBold>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Tarefa sem descrição' }}</div>

      <div class="column">
        <TimeTracker :time="task.time" />
      </div>
    </div>
  </BoxBold>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TimeTracker from './TimeTracker.vue';
import BoxBold from './BoxBold.vue';
import { ITask } from '@/interfaces/ITask';

export default defineComponent({
  name: "TaskItem",
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  },
  components: {
    TimeTracker,
    BoxBold,
  }
})

</script>
