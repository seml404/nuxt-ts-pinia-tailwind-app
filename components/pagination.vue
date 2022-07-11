<script setup lang="ts">
const props = defineProps({
  arrOfItems: {
    required: true,
    type: Array,
  },
});
const pageNumber = ref(0);
const itemsOnPage = 3;

const pageUp = () => {
  pageNumber.value++;
};
const pageDown = () => {
  pageNumber.value--;
};

const totalPages = computed(() => {
  return props.arrOfItems?.length ? props.arrOfItems.length / itemsOnPage : 0;
});

const displayedItems = computed(() => {
  return props.arrOfItems.length
    ? props.arrOfItems.slice(
        pageNumber.value * itemsOnPage,
        pageNumber.value * itemsOnPage + itemsOnPage
      )
    : 0;
});
</script>

<template>
  <div>
    <button @click="pageUp" :disabled="pageNumber === totalPages - 1">
      Next
    </button>
    <button @click="pageDown" :disabled="pageNumber === 0">Previous</button>
  </div>
</template>

<style scoped></style>
