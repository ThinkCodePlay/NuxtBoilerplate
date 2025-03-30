<!-- pages/index.vue -->
<template>
  <Posts />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Posts from "~/pages/Posts.vue";

export default defineComponent({
  name: 'HomePage',
  components: {Posts}
});
</script>

<style scoped>
/* Add your styles here */
</style>