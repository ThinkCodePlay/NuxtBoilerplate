<script setup lang="ts">

import type {Post} from "~/interfaces/Post";

const route = useRoute()
const params = route.params

const id = ref<number>(+params.id)
const post = ref<Post>()

const fetchPool = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id.value}`
  post.value = await $fetch(url);
};


onMounted(async () => {
  await fetchPool()
})
</script>

<template>
  <div class="title">
    <h1>Post Details</h1>
  </div>

  <div class="table-container">
    <!--  column1  -->
    <v-table>
      <tbody>
      <tr>
        <td>userId</td>
        <td>{{ post?.userId }}</td>
      </tr>
      <tr>
        <td>id</td>
        <td>{{post?.id}}</td>
      </tr>
      <tr>
        <td>title</td>
        <td>{{post?.title}}</td>
      </tr>
      <tr>
        <td>body</td>
        <td>{{post?.body}}</td>
      </tr>
      </tbody>
    </v-table>

  </div>
</template>

<style scoped>
@import "../../styles.css";

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>