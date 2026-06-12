import { defineStore } from "pinia"
import { PAGESIZE, RESULTS } from "~/lib/search"
import type { SortBy } from "~/types/search"

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: "",
    page: 1,
    sortBy: "RELEVANCE" as SortBy,
    country: "all",
    total: RESULTS
  }),
  getters: {
    displayLimit: (state) => Math.min(state.total, PAGESIZE),
  }
})