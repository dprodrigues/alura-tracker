<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeOn }">
    <div class="column is-one-quarter">
      <SideBar @onChangeTheme="changeTheme" />
    </div>

    <div class="column is-three-quarter content">
      <FormItem @onSaveTask="saveTask" />

      <div class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />

        <BoxBold v-if="isListEmpty">Não possui nenhuma tarefa na sua lista.</BoxBold>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue'
import FormItem from './components/FormItem.vue';
import TaskItem from './components/TaskItem.vue';
import BoxBold from './components/BoxBold.vue';
import { ITask } from './interfaces/ITask';

export default defineComponent({
  name: 'App',
  data() {
    return {
      tasks: [] as ITask[],
      isDarkModeOn: false,
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
    },
    changeTheme(newDarkMode: boolean) {
      this.isDarkModeOn = newDarkMode
    }
  },
  components: {
    SideBar,
    FormItem,
    TaskItem,
    BoxBold,
  },
});

</script>

<style>
.list {
  padding: 1rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
