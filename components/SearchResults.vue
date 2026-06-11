<script setup lang="ts">
import { searchBy } from '~/lib/search'
import type { User } from '~/types/user'

const store = useSearchStore()
const state = reactive({
  users: [] as User[],
  isLoading: true
})

watchSyncEffect(async () => {
  store.page = 1
  const users = await searchBy(store.page, store.query, store.sortBy)
  state.users = users
  state.isLoading = false
})

</script>
<template>
  <ul class="grid grid-cols-3 gap-5">
    <li v-if="state.isLoading" v-for="n in 9" :key="n">
      <SearchLoadingCard />
    </li>
    <li v-for="user in state.users" :key="user.phone" v-else>
      <SearchCard :user="user" />
    </li>
    <h3 v-if="!state.isLoading && state.users.length === 0">
      No users
    </h3>
  </ul>
</template>