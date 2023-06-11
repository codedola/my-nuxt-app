<template>
 <div  class="container p-3">
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
 
</template>
<script setup>
import { computed } from 'vue'
  const props = defineProps({
    policies: {
      type: Array,
      default: () => []
    }
  })
const policy = computed(() => {
  const policy = props.policies[0]
  return policy || null
})
</script>
