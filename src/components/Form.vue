<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário de criação de tarefas">
        <input type="text" class="input" placeholder="Tarefa a iniciar" v-model="description">
      </div>

      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o Projeto</option>

            <option v-for="project in projects" :key="project.id" :value="project.id">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="column">
        <Timer @timer-finished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { key } from '@/store';
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
  },
  setup() {
    const store = useStore(key)

    return {
      projects: computed(() => store.state.projects),
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
