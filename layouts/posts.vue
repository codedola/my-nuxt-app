<template>
  <div >
    <nav class="flex items-center space-x-4">
      <NuxtLink href="/posts/recent" class="p-3">Recent</NuxtLink>
      <NuxtLink href="/posts/popular" class="p-3">Popular</NuxtLink>
    </nav>
   <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>
