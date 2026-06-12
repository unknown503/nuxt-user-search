<script lang="ts" setup>
import { initialResultsSearch } from '~/lib/search';
const store = useSearchStore()

onBeforeMount(() => {
  initialResultsSearch()
  const route = useRoute()
  store.query = (route.query.q as string) || ""
  store.page = Number(route.query.page) || 1
})
</script>
<template>
  <div class="space-y-8">
    <h1 class="text-4xl">User Search</h1>
    <SearchBox :initial="store.query" />
    <SearchInfo />
    <USeparator />
    <SearchResults />
    <Pagination />
  </div>
</template>
