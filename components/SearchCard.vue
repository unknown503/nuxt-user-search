<script setup lang="ts">
import type { User } from '~/types/user';

const { user } = defineProps<{ user: User }>()

</script>
<template>
  <UCard variant="soft">
    <template #header>
      <div class="flex gap-3">
        <UAvatar :src="user.picture.large" alt="" size="3xl" />
        <div class="flex flex-col">
          <span>{{ user.name.first }} {{ user.name.last }}</span>
          <span>{{ user.email }}</span>
        </div>
      </div>
    </template>
    <div class="flex justify-between py-2">
      <span class="font-medium text-gray-400">Age</span>
      <span class="text-white">{{ user.registered.age }}</span>
    </div>
    <USeparator />
    <div class="flex justify-between py-2">
      <span class="font-medium text-gray-400">Address</span>
      <span class="text-white">{{ user.location.street.name }}, {{ user.location.street.number }}</span>
    </div>
    <template #footer>
      <div class="flex justify-between">
        <span class="font-medium text-gray-400">Location</span>
        <span class="text-white">{{ user.location.country }}, {{ user.location.city }}</span>
      </div>
    </template>
  </UCard>
</template>