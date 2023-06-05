<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeOn }">
    <div class="column is-one-quarter">
      <SideBar @onChangeTheme="changeTheme" />
    </div>

    <div class="column is-three-quarter content">
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      isDarkModeOn: false,
    }
  },
  methods: {
    changeTheme(newDarkMode: boolean) {
      this.isDarkModeOn = newDarkMode
    }
  },
  components: {
    SideBar,
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
