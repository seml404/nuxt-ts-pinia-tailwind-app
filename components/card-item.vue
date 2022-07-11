<script setup>
import { mainStore } from "@@/store/store";
const store = mainStore();
const props = defineProps({
  cardDetails: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="">
    <p>{{ cardDetails.author }}</p>
    <p>@{{ cardDetails.authorContact }}</p>
    <div class="">
      <img :src="cardDetails.smallPhotoUrl" alt="img" class="w-full" />
    </div>
    <div class="flex">
      <div>
        <button @click="store.addToCart(cardDetails)">+</button>
        <button @click="store.removeFromCart(cardDetails)">-</button>
        <p>amount in cart {{ store.defineAmountInCart(cardDetails) }}</p>
      </div>
      {{ cardDetails.price }} руб.
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: "cardItem",
};
</script>
