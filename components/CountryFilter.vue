<script setup lang="ts">
import { getCountries } from '~/lib/search';
import { slugify } from '~/lib/util';


const props = defineProps<{
  hasLoaded: boolean
}>()
const { handleQueryParams } = useQuerySearch()
const store = useSearchStore()

const countries = ref<{ label: string, value: string }[]>([])

watchEffect(() => {
  if (!props.hasLoaded) return
  countries.value = [
    { label: "All", value: "all" },
    ...getCountries().map(country => ({ label: country, value: slugify(country) }))
  ]
})
</script>

<template v-if="store.total > 0">
  <div class="flex items-center gap-1">
    <span>Country:</span>
    <USelect v-model="store.country" @change="handleQueryParams(undefined, 1)" :items="countries" class="w-40"
      placeholder="Select country" />
    <UButton class="ml-auto sm:ml-4" color="secondary" variant="solid" icon="i-lucide-brush-cleaning"
      @click="handleQueryParams(undefined, 1, undefined, 'all')">
      <span class="hidden sm:block">Clear filters</span>
    </UButton>
  </div>
</template>
