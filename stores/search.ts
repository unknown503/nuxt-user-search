import { defineStore } from "pinia"
import type { SortBy } from "~/types/search"

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: "",
    page: 1,
    sortBy: "RELEVANCE" as SortBy,
  })
})