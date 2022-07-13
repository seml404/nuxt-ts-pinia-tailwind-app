import { defineStore } from "pinia";
import { gettersComposition } from "@/store/mainStore/getters";
import { actionsComposition } from "@/store/mainStore/actions";
import { state } from "@/store/mainStore/state";
export const mainStore = defineStore({
  id: "mainStore",
  state: state,
  actions: actionsComposition(),
  getters: gettersComposition(),
});
