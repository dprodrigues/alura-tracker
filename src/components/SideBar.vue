<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo" class="">
    </h1>

    <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>
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

@media only screen and (max-width: 768px) {
  header {
    height: auto;
    padding: 2.5rem;
  }
}
</style>
