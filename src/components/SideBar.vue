<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo" class="">
    </h1>

    <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>

    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>

        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SideBar",
  computed: {
    buttonText() {
      if (this.darkModeOn) {
        return "Desativar modo escuro"
      }

      return "Ativar modo escuro"
    }
  },
  data() {
    return {
      darkModeOn: false,
    }
  },
  emits: ['onChangeTheme'],
  methods: {
    changeTheme() {
      this.darkModeOn = !this.darkModeOn
      this.$emit('onChangeTheme', this.darkModeOn)
    }
  }
})
</script>

<style scoped>
header {
  background-color: #0d3b66;
  height: 100vh;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.panel li {
  margin: 0.5rem 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #faf0ca;
}

.link.router-link-active {
  color: #faf0ca;
}

@media only screen and (max-width: 768px) {
  header {
    height: auto;
    padding: 2.5rem;
  }
}
</style>
