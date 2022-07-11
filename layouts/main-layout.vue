<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import "@@/assets/css/styles.css";
import { mainStore } from "@@/store/store";
const store = mainStore();
const totalCost = computed((): number => {
  return store.getTotalCost;
});

console.log(totalCost);
</script>

<template>
  <div class="relative flex flex-col h-screen">
    <div class="flex-grow">
      <slot></slot>
    </div>
    <div class="sticky bottom-0 opacity-1 bg-indigo-500 w-full h-60px">
      <p>{{ totalCost }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "main-layout",
};
</script>
