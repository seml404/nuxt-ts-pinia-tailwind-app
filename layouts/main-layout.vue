<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { cardEl } from "~~/assets/interfaces";
import pagination from "@@/components/pagination.vue";
import "@@/assets/css/styles.css";
import { mainStore } from "@@/store/store";
const store = mainStore();
const totalCost = computed((): number => {
  return store.getTotalCost;
});
const totalCards = computed((): Array<cardEl> => store.getCards);
console.log(totalCost);
</script>

<template>
  <div class="relative flex flex-col h-screen">
    <div class="flex-grow">
      <slot></slot>
    </div>
    <div class="sticky bottom-0 opacity-1 bg-indigo-500 w-full h-60">
      <p>{{ totalCost }}</p>
      <pagination :arr-of-items="totalCards"></pagination>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "main-layout",
};
</script>
