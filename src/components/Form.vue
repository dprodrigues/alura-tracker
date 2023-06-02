<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário de criação de tarefas">
        <input type="text" class="input" placeholder="Tarefa a iniciar" v-model="description">
      </div>

      <div class="column">
        <Timer @timer-finished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from './Timer.vue';

export default defineComponent({
  name: "Form",
  components: {
    Timer
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
