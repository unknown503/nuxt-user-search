<script setup lang="ts">
import { pages, PAGESIZE, RESULTS } from '~/lib/search';

</script>
<template>
  <div class="flex items-center gap-2">
    <p class="text-md text-muted-foreground">
      {{ PAGESIZE }} results of {{ RESULTS }}
    </p>
  </div>
</template>