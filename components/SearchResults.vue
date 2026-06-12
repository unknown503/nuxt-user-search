<script setup lang="ts">
import { searchBy } from '~/lib/search'
import type { User } from '~/types/user'

const props = defineProps<{
  hasLoaded: boolean
}>()

const store = useSearchStore()
const state = reactive({
  users: [] as User[],
  isLoading: true
})

watchEffect(async () => {
  state.isLoading = true
  if (!props.hasLoaded) return
  const { users, total } = await searchBy(store.page, store.query, store.sortBy, store.country)
  state.users = users
  state.isLoading = false
  store.total = total
})

</script>
<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <template v-if="state.isLoading">
      <li v-for="n in 9" :key="n">
        <SearchLoadingCard />
      </li>
    </template>

    <template v-else-if="state.users.length > 0">
      <li v-for="user in state.users" :key="user.id.value">
        <SearchCard :user="user" />
      </li>
    </template>

    <li v-else class="col-span-full text-center py-10">
      No users found
    </li>
  </ul>
</template>