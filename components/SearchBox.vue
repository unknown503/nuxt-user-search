<script lang="ts" setup>
const props = defineProps({
  initial: String,
})
const store = useSearchStore()
const router = useRouter()
const state = reactive({
  query: props.initial || ""
})

const onSubmit = () => {
  store.query = state.query.trim()
  router.push({
    query: {
      ...(store.query.length > 1 && { q: store.query }),
      ...(store.page > 1 && { page: store.page })
    }
  })
  console.log("search", store.query)
}

const handleClearQuery = () => {
  state.query = ""
  store.query = ""
  onSubmit()
}

</script>
<template>
  <UForm :state="state" @submit.prevent="onSubmit" class="flex gap-2 md:gap-5">
    <UInput v-model="state.query" color="secondary" variant="subtle" placeholder="Search" class="w-full" size="xl">
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