<template>
  <header>
    <div class="container">
      <nav class="flex items-center justify-center space-x-2">
        <NuxtLink to="/" class="px-4 py-2 bg-gray-200 rounded">Homepage</NuxtLink>
        <NuxtLink to="/about" class="px-4 py-2 bg-gray-200 rounded">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
</script>
<style lang="scss" scoped>
  .router-link-exact-active{ 
    @apply bg-blue-500;
  }
</style>
