<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import type {Comment} from "~/interfaces/Comment";

const comments = ref<Comment[]>([]);
const headers = [
  {title: 'postId', value: 'postId'},
  {title: 'ID', value: 'id'},
  {title: 'Name', value: 'name'},
  {title: 'Email', value: 'email'},
  {title: 'Body', value: 'body'},
];

const fetchApps = async () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  console.log('fetching posts', url);
  const res = await $fetch(url);
  comments.value = res as Comment[];
};

onMounted(async () => {
  await fetchApps();
});
</script>

<template>
  <div>
    <v-data-table :headers="headers" :items="comments" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Comments</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }">
        <NuxtLink :to="`/comments/${item.id}`" class="nuxt-link">{{ item.id }}</NuxtLink>
      </template>
    </v-data-table>
  </div>
</template>

<style scoped>
@import "../styles.css";
</style>