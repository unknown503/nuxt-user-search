<script setup lang="ts">
const { handleQueryParams } = useQuerySearch()
const store = useSearchStore()

const items = [
  {
    label: 'Relevance',
    value: 'RELEVANCE'
  },
  {
    label: 'Ascending',
    value: 'ASC'
  },
  {
    label: 'Descending',
    value: 'DESC'
  }
]
</script>

<template>
  <div class="flex items-center gap-1">
    <span>Sort by:</span>
    <USelect v-model="store.sortBy" @change="handleQueryParams()" :items="items" class="w-36" />
  </div>

</template>
