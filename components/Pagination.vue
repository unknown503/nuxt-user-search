<script setup lang="ts">
const store = useSearchStore()
const router = useRouter()
const route = useRoute()

const onUpdate = () => {
  scrollTo({ top: 0, behavior: "smooth" })
  router.push({
    query: {
      ...route.query,
      page: store.page === 1 ? undefined : store.page
    }
  })
}

</script>
<template>
  <div v-if="!!store.displayLimit" class="flex justify-center items-center gap-2">
    <UPagination v-model:page="store.page" @update:page="onUpdate" :items-per-page="store.displayLimit"
      :total="store.total" />
  </div>
</template>