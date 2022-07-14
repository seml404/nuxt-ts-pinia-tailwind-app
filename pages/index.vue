<script setup lang="ts">
import { cardEl } from "~~/assets/interfaces";
import { computed } from "vue";
import "@@/assets/css/styles.css";
import cardItem from "@@/components/card-item.vue";
import { mainStore } from "@@/store/store";

const layout = "main-layout";
const store = mainStore();

const cardsDisplayed = computed(
  (): Array<cardEl> => store.getCardsListDisplayed
);
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <div
        v-if="cardsDisplayed && cardsDisplayed.length"
        class="ml-auto mr-auto w-auto max-w-440px lg:max-w-660px flex flex-col gap-8px lg:grid lg:grid-cols-2 lg:gap-x-20px"
      >
        <cardItem
          v-for="card in cardsDisplayed"
          :key="card.id"
          :card-details="card"
        ></cardItem>
      </div>
      <div v-else>
        <p>карточки отсутствуют</p>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped></style>
