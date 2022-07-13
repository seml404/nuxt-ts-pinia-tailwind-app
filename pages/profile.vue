<script setup lang="ts">
import { computed } from "vue";
import { mainStore } from "@@/store/store";
const route = useRoute();
const store = mainStore();
const layout = "default-layout";
console.log(route.query.authorRequested);

// if (route.query.authorRequested) {
//   console.log(route.query.authorRequested);
//   store.getAuthorDetails(route.query.authorRequested);
// }

// const userDetails = computed(() => {
//   console.log(store.getMockAuthorDetails(route.query.authorRequested));
//   return store.getMockAuthorDetails(route.query.authorRequested);
// });

const authorName = route.query.authorRequested;
</script>

<template>
  <NuxtLayout :name="layout">
    <div>
      <p class="font-medium">profile</p>
      <div v-if="authorName">
        <p class="font-medium">{{ authorName }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
