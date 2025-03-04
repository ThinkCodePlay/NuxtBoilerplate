<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import type {Post} from "~/interfaces/Post";

const posts = ref<Post[]>([]);
const headers = [
  {title: 'userId', value: 'userId'},
  {title: 'id', value: 'id'},
  {title: 'title', value: 'title'},
  {title: 'body', value: 'body'},
];

const fetchApps = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  console.log('fetching posts', url);
  const res = await $fetch(url);
  posts.value = res as Post[];
};

onMounted(async () => {
  await fetchApps();
});
</script>

<template>
  <div>
    <v-data-table :headers="headers" :items="posts" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Posts</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }">
        <NuxtLink :to="`/posts/${item.id}`" class="nuxt-link">{{ item.id }}</NuxtLink>
      </template>
    </v-data-table>
  </div>
</template>

<style scoped>
@import "../styles.css";
</style>