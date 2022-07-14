<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { cardEl } from "~~/assets/interfaces";
import pagination from "@@/components/pagination.vue";
import "@@/assets/css/styles.css";
import { mainStore } from "@@/store/store";
const store = mainStore();
store.getInitializationData();
const totalCost = computed((): number => {
  return store.getTotalCost;
});
const totalCards = computed((): Array<cardEl> => store.getCards);
console.log(totalCost);
</script>

<template>
  <div class="relative flex flex-col h-screen">
    <div class="flex-grow"><slot></slot></div>
    <div class="sticky bottom-0 opacity-09 w-full bg-black h-60px">
      <div
        class="flex items-center h-60px ml-auto mr-auto w-auto max-w-440px lg:max-w-660px"
      >
        <div class="basis-2/3 flex h-full items-center justify-center">
          <pagination :arr-of-items="totalCards"></pagination>
        </div>
        <div class="basis-1/3 flex justify-end">
          <p class="text-white font-bold">
            {{ totalCost.toLocaleString() }} руб.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "main-layout",
};
</script>
