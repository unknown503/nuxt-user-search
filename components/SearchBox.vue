<script lang="ts" setup>
const props = defineProps({
  initial: String,
})
const { handleQueryParams } = useQuerySearch()
const state = reactive({
  query: ""
})

watchEffect(() => {
  state.query = props.initial || ""
})

const handleClearQuery = () => {
  state.query = ""
  handleQueryParams("", 1, "RELEVANCE")
}

</script>
<template>
  <UForm :state="state" @submit.prevent="handleQueryParams(state.query, 1, 'RELEVANCE')" class="flex gap-2 md:gap-5">
    <UInput v-model.trim="state.query" color="secondary" variant="subtle" placeholder="Search" class="w-full" size="xl">
      <template v-if="state.query" #trailing>
        <UButton color="neutral" variant="link" size="sm" icon="i-lucide-x" aria-label="Clear input"
          class="cursor-pointer" @click="handleClearQuery" />
      </template>
    </UInput>
    <UButton color="secondary" variant="solid" icon="i-lucide-search" size="xl" class="shrink-0 cursor-pointer"
      type="submit">
      <span class="hidden md:block">Search post</span>
    </UButton>
  </UForm>
</template>