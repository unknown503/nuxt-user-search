<script lang="ts" setup>
import { initialResultsSearch } from '~/lib/search';

onMounted(() => {
  initialResultsSearch()
})
</script>
<template>
  <div class="space-y-8">
    <h1 class="text-4xl">User Search</h1>
    <SearchBox />
    <SearchInfo />
    <USeparator />
    <SearchResults />
  </div>
</template>
