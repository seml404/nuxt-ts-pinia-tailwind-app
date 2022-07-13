<script setup lang="ts">
import { mainStore } from "@@/store/store";
import { computed, ComputedRef, nextTick } from "vue";
import { cardEl } from "~~/assets/interfaces";
const store = mainStore();
const props = defineProps({
  arrOfItems: {
    required: true,
    type: Array<cardEl>,
  },
});
const paginationSettings = {
  firstPage: 1,
  itemsOnPage: 3,
};
const pageNumber = ref(paginationSettings.firstPage);
const itemsOnPage = paginationSettings.itemsOnPage;
const listOfPages: any = ref([]);
const totalPages = computed(() => {
  return props.arrOfItems?.length ? props.arrOfItems.length / itemsOnPage : 0;
});
const displayedItems: ComputedRef<Array<cardEl>> = computed(
  (): Array<cardEl> => {
    if (props.arrOfItems?.length) {
      return props.arrOfItems.slice(0, pageNumber.value * itemsOnPage);
    }
  }
);
const setPageNumber = (num: number | string, idx) => {
  if (typeof num === "number") {
    nextTick(() => {
      console.log(document.body.clientHeight);
      window.scrollTo({
        top: document.body.scrollHeight - document.body.clientHeight,
        behavior: "smooth",
      });
    });
    pageNumber.value = num;
  } else if (idx > pageNumber.value && pageNumber.value < totalPages.value) {
    pageNumber.value += 1;
    nextTick(() =>
      window.scrollTo({
        top: document.body.scrollHeight - document.body.clientHeight,
        behavior: "smooth",
      })
    );
  } else if (idx < pageNumber.value && pageNumber.value > 1) {
    pageNumber.value -= 1;
    nextTick(() =>
      window.scrollTo({
        top: document.body.scrollHeight - document.body.clientHeight,
        behavior: "smooth",
      })
    );
  }
};
watch(
  () => displayedItems.value,
  () => store.setCardsListDisplayed(displayedItems.value)
);
store.setCardsListDisplayed(displayedItems.value);

// обработчик scroll

const scrollHandler = (e) => {
  if (
    Math.ceil(document.documentElement.scrollTop) +
      document.body.clientHeight >=
      document.body.scrollHeight &&
    pageNumber.value < totalPages.value
  ) {
    pageNumber.value += 1;
  }
};

onBeforeMount(() => {
  console.log(process.client);
  if (process.client) {
    document.addEventListener("wheel", (e) => scrollHandler(e));
  }
});
onBeforeUnmount(() => {
  console.log(process.client);
  if (process.client) {
    document.removeEventListener("wheel", scrollHandler);
  }
});

const paginationPrev = ref();

const definePageNumDisplaynig = (num) => {
  if (
    num === 1 ||
    num === totalPages.value ||
    num === pageNumber.value ||
    num - 1 === pageNumber.value ||
    num + 1 === pageNumber.value
  ) {
    return num;
  } else if (
    (num - 2 === 0 && pageNumber.value !== 2) ||
    (num + 2 === totalPages.value && pageNumber.value !== totalPages.value)
  ) {
    return "...";
  }
  return "";
};

const displayedPages = computed(() => {
  if (totalPages) {
    let pagesRange = [];
    for (let i = 0; i <= totalPages.value; i++) {
      definePageNumDisplaynig(i)
        ? pagesRange.push(definePageNumDisplaynig(i))
        : null;
    }
    return pagesRange;
  }
});
</script>

<template>
  <div v-if="totalPages" class="flex cursor-pointer gap-3">
    <div
      v-for="(item, idx) in displayedPages"
      :key="item"
      @click="setPageNumber(item, idx + 1)"
      :class="{ ' text-red-500': item === pageNumber }"
    >
      {{ item }}
    </div>
  </div>
</template>

<style scoped></style>
