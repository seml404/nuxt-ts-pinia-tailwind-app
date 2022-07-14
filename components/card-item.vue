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
    <div @click="switchToProfile" class="flex justify-start p-10px cursor-pointer">
      <div class="mr-10px">
        <div class="w-30px h-30px">
          <img
            class="block w-30px h-30px rounded-50pc"
            :src="cardDetails.user?.profile_image?.small || ''"
            alt="user-img"
          />
        </div>
      </div>
      <div class="flex flex-col gap-3px">
        <p class=" ">
          {{ cardDetails.user?.name || "no data" }}
        </p>
        <p class="text-gray">
          @{{ cardDetails.user?.instagram_username || "no data" }}
        </p>
      </div>
    </div>
    <div class="max-w-full">
      <img :src="cardDetails.urls.small" alt="img" class="w-full" />
    </div>
    <div class="flex p-10px justify-between items-center">
      <div class="flex">
        <div class="mr-10px font-normal">
          <button @click="store.addToCart(cardDetails)">
            <div class="flex w-5 h-5 justify-center items-center">+</div>
          </button>
          <button @click="store.removeFromCart(cardDetails)">
            <div class="flex w-5 h-5 justify-center items-center">-</div>
          </button>
        </div>
        <div class="flex justify-center items-center">
          <p>{{ store.defineAmountInCart(cardDetails) }}</p>
        </div>
      </div>
      <p>{{ cardDetails.price.toLocaleString() }} руб.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
export default {
  name: "cardItem",
};
</script>
