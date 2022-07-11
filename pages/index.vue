<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import "@@/assets/css/styles.css";
import cardItem from "@@/components/card-item.vue";
import { mainStore } from "@@/store/store";
const layout = "main-layout";
const store = mainStore();
store.getInitializationData();
const cards = computed((): array => store.getCards);
</script>

<template>
  <NuxtLayout :name="layout">
    <div>
      <div>main</div>
      <cardItem
        v-for="card in cards"
        :key="card.id"
        :card-details="card"
      ></cardItem>
      <nuxt-link to="/profile">to profile</nuxt-link>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
