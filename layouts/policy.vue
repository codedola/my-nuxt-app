<template>
 <div class="container flex">
    <!-- Nav -->
    <div class="w-[280px]">
      <nav class="sticky flex flex-col p-3 space-y-2 bg-gray-100 rounded top-1">
        <NuxtLink 
          v-for="(policy, index) in policies" 
          key="index" 
          :href="`/policy/${policy.slug}`" 
          class="btn"
        >
         {{ policy.title }}
        </NuxtLink>
      </nav>
    </div>
    <!-- Content -->
    <div class="flex-1 ml-2">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    policies: {
      type: Array,
      default: () => []
    }
  })
</script>
<style lang="scss" scoped>
.router-link-exact-active {
  @apply bg-gray-300
}
</style>
