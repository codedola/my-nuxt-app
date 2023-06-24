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
import { computed, inject } from 'vue'
const { params } = useRoute()

const policies = inject('policies')
const staticPolicies = inject('staticPolicies')
const reactivePolicies = inject('reactivePolicies')

console.log('policies ref = ', policies)
console.log('policies reactive = ', reactivePolicies)
console.log('policies static  = ', staticPolicies)

const policy = computed(() => {
  return  policies.value.find((policy) => {
    return policy.slug ===  params.slug
  })

})
</script>
