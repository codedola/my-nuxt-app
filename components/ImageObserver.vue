<template>
   <img :data-src="src" :data-src-mb="srcMb || src" :alt="alt" class="lazy-load" />
</template>
<script setup>
import { onMounted } from 'vue'
defineProps({
  src: {
    type: String
  },
  srcMb: {
    type: String
  },
  alt: {
    type: String
  }
})
onMounted(() => {
  registerObserver()
})

function loadImage(image) {
  console.log('load Image run', image)
}
function registerObserver(selector) {
  const elements = document.querySelectorAll(selector)
  console.log('elements = ', elements)
}
</script>
