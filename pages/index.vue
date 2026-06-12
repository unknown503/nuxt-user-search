<script lang="ts" setup>
import { initialResultsSearch } from '~/lib/search';
import type { SortBy } from '~/types/search';
const store = useSearchStore()
const hasLoaded = ref(false)
const route = useRoute()

onBeforeMount(async () => {
  await initialResultsSearch()
  store.query = (route.query.q as string) || ""
  store.page = Number(route.query.page) || 1
  store.sortBy = (route.query.sort as SortBy) || "RELEVANCE"
  store.country = (route.query.country as string) || "all"
  hasLoaded.value = true
})
</script>
<template>
  <div class="space-y-4 md:space-y-8">
    <h1 class="text-4xl">User Search</h1>
    <SearchBox :initial="store.query" />
    <div class="flex flex-wrap justify-between gap-4">
      <SearchInfo />
      <SortBy />
    </div>
    <USeparator />
    <CountryFilter :hasLoaded="hasLoaded"/>
    <SearchResults :hasLoaded="hasLoaded" />
    <Pagination />
  </div>
</template>
