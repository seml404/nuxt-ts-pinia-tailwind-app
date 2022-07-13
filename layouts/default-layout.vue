<script setup lang="ts">
import { mainStore } from "@@/store/store";
const store = mainStore();
</script>

<template><slot></slot></template>

<script lang="ts">
export default {
  name: "default-layout",
};
</script>
