<script setup lang="ts">

const title = ref("Modernize - Nuxt3 Typescript based Free Admin Dashboard Template");
useHead({
  meta: [{ content: title }],
  titleTemplate: "User Search",
});

</script>

<template>
    <UContainer class="py-20">
      <slot />
    </UContainer>
</template>