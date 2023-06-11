<template>
  <div v-if="policy" class="container p-3">
    <h1 class="font-semibold text-[2rem]">
      {{ policy.title }}
    </h1>
    <div class="mt-3">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ullam dolor et doloremque laboriosam voluptatum illo animi quis at totam ab doloribus, nostrum ad culpa recusandae dolorem repellendus, officia facilis?</p>
    </div>
  </div>
  <div v-else>
    Chính sách đang update
  </div>
</template>
<script setup>
import { computed } from 'vue'
  const route = useRoute()
  const props = defineProps({
    policies: {
      type: Array,
      default: () => []
    }
  })
const policy = computed(() => {
  const policy =  props.policies.find((policy) => {
    return policy.slug ===  route.params.slug
  })
  return policy || null
})


  // import { reactive } from 'vue'
  // const title = reactive({
  //   'chinh-sach-thanh-toan': ' Chính sách thanh toán',
  //   'chinh-sach-van-chuyen': 'Chính sách vận chuyển',
  //   'chinh-sach-tich-diem': 'Chính sách tích điểm',
  //   'chinh-sach-bao-mat-thong-tin': 'Chính sách bảo mật thông tin',
  // })
</script>
