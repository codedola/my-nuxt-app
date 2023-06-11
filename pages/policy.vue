<template>
  <NuxtLayout name="policy" :policies="policies">
    <NuxtPage  :policies="policies" />
  </NuxtLayout>
</template>
<script setup>
import { reactive } from 'vue'
// Fake data
const policies = reactive([
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
</script>
