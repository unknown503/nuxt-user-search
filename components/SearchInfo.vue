<script setup lang="ts">
const store = useSearchStore()

const shownResults = computed(() =>
  Math.min(store.page * store.displayLimit, store.total)
)

</script>
<template>
  <div class="flex items-center gap-2">
    <p class="text-md text-muted-foreground">
      {{ shownResults }} results of {{ store.total }}
    </p>
  </div>
</template>