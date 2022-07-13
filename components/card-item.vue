<script setup lang="ts">
import { mainStore } from "@@/store/store";
const store = mainStore();
const props = defineProps({
  cardDetails: {
    required: true,
    type: Object,
  },
});

// navigate to separate tab for user details
const router = useRouter();
const switchToProfile = () => {
  let routeData = router.resolve({
    name: "profile",
    query: { authorRequested: props.cardDetails.user?.username },
  });
  window.open(routeData.href, "_blank");
};
</script>

<template>
  <div>
    <div class="flex justify-start p-10px">
      <div class="mr-10px">
        <p>user photo</p>
      </div>
      <div>
        <p @click="switchToProfile">
          {{ cardDetails.user?.name || "no data" }}
        </p>
        <p>@{{ cardDetails.user?.instagram_username || "no data" }}</p>
      </div>
    </div>
    <div class="">
      <img :src="cardDetails.urls.small" alt="img" class="w-full" />
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

<script lang="ts">
export default {
  name: "cardItem",
};
</script>
