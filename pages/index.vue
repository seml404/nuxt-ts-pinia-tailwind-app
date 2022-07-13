<script setup lang="ts">
import { cardEl } from "~~/assets/interfaces";
import { computed, ComputedRef } from "vue";
import "@@/assets/css/styles.css";
import cardItem from "@@/components/card-item.vue";
import { mainStore } from "@@/store/store";
const layout = "main-layout";
const store = mainStore();
store.getInitializationData();
const cardsDisplayed = computed(
  (): Array<cardEl> => store.getCardsListDisplayed
);
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <div>
        <div>main</div>
        <div v-if="cardsDisplayed && cardsDisplayed.length">
          <cardItem
            v-for="card in cardsDisplayed"
            :key="card.id"
            :card-details="card"
          ></cardItem>
        </div>
        <div v-else>
          <p>карточки отсутствуют</p>
        </div>
        <nuxt-link to="/profile">to profile</nuxt-link>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped></style>
