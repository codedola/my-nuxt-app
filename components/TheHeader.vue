<template>
  <header>
    <div class="container py-3">
      <nav class="flex items-center justify-center space-x-2">
        <NuxtLink to="/" class="px-4 py-2 bg-gray-200 rounded">Homepage</NuxtLink>
        <NuxtLink to="/about" class="px-4 py-2 bg-gray-200 rounded">About</NuxtLink>
        <NuxtLink to="/policy" class="px-4 py-2 bg-gray-200 rounded">Policy</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.router-link-active { 
    @apply bg-blue-500 text-white font-semibold;
}
</style>
