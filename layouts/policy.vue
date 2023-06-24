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
import { ref, reactive, provide } from 'vue'
const policies = ref([
  {
    title: 'Chính sách thanh toán',
    slug: 'chinh-sach-thanh-toan'
  },
  {
    title: 'Chính sách vận chuyển',
    slug: 'chinh-sach-van-chuyen'
  },
  {
    title: 'Chính sách tích điểm',
    slug: 'chinh-sach-tich-diem'
  },
  {
    title: 'Chính sách bảo mật thông tin',
    slug: 'chinh-sach-bao-mat-thong-tin'
  },
])
const reactivePolicies = reactive([{title:'Reactive Title', slug: 'reactive-title'}])
// static provide
provide('staticPolicies', [{ title: 'Policy title', slug: 'policy-slug' }])
// ref object provide
provide('policies', policies)
// reactive object provide
provide('reactivePolicies', reactivePolicies)
</script>
<style lang="scss" scoped>
.router-link-exact-active {
  @apply bg-gray-300
}
</style>
