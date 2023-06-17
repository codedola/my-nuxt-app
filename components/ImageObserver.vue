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
onMounted(loadImage)
onMounted(loadImage)
onMounted(loadImage)
function loadImage() {
  console.log('load Image run')
}
</script>
