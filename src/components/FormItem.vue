<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário de criação de tarefas">
        <input type="text" class="input" placeholder="Tarefa a iniciar" v-model="description">
      </div>

      <div class="column">
        <TimerItem @timer-finished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerItem from './TimerItem.vue';

export default defineComponent({
  name: "FormItem",
  components: {
    TimerItem
  },
  data() {
    return {
      description: ''
    }
  },
  emits: ['onSaveTask'],
  methods: {
    finishTask(time: number): void {
      this.$emit('onSaveTask', {
        time,
        description: this.description
      })

      this.description = ''
    }
  }
})
</script>

<style>
.form {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>
