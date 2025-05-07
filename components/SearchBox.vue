<script lang="ts" setup>
const store = useSearchStore()
const state = reactive({
  query: ""
})

const onSubmit = () => {
  store.query = state.query.trim()
  console.log("search", store.query)
}

watchDebounced(
  state,
  () => onSubmit(),
  { debounce: 350, maxWait: 5000 },
)

</script>
<template>
  <UForm :state="state" @submit.prevent="onSubmit" class="flex gap-5">
    <UInput v-model="state.query" color="secondary" variant="subtle" placeholder="Search" class="w-full" size="xl">
      <template v-if="state.query" #trailing>
        <UButton color="neutral" variant="link" size="sm" icon="i-lucide-x" aria-label="Clear input"
          class="cursor-pointer" @click="state.query = ''; onSubmit()" />
      </template>
    </UInput>
    <UButton color="secondary" variant="solid" icon="i-lucide-search" size="xl" class="shrink-0 cursor-pointer"
      type="submit">
      Search post
    </UButton>
  </UForm>
</template>