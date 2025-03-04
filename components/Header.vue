<script lang="ts">
import {defineComponent} from 'vue';
import {NuxtLink} from '#components';
import { useTheme } from 'vuetify';

export default defineComponent({
  name: 'Header',
  components: {
    NuxtLink
  },
  data() {
    return {
      drawer: false,
    }
  },
  setup() {
    const theme = useTheme()
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

    const toggleTheme = () => {
      theme.global.current.value.dark = !theme.global.current.value.dark
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      toggleTheme
    }
  },
});
</script>

<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Nuxt Boilerplate</v-toolbar-title>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item link to="/posts">
        <v-list-item-title>Posts</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/comments">
        <v-list-item-title>Comments</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<style scoped>
nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}
</style>