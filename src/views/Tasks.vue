<template>
  <Form @onSaveTask="saveTask" />

  <div class="list">
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />

    <Box v-if="isListEmpty">Não possui nenhuma tarefa na sua lista.</Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/Form.vue';
import Task from '@/components/Task.vue';
import Box from '@/components/Box.vue';
import { ITask } from '@/interfaces/ITask';

export default defineComponent({
  name: 'Tasks',
  data() {
    return {
      tasks: [] as ITask[],
    }
  },
  computed: {
    isListEmpty(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    }
  },
  components: {
    Form,
    Task,
    Box,
  },
});

</script>
