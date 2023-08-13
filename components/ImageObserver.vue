<template>
   <img 
      ref="imageLazy" 
      :width="width" 
      :height="height" 
      :data-src="src" 
      :data-src-mb="srcMb || src" 
      :alt="alt" 
      :src="src"
      class="lazy-load" 
   />
</template>
<script setup>
import { onMounted, ref } from 'vue'
defineProps({
  src: {
    type: String
  },
  srcMb: {
    type: String
  },
  alt: {
    type: String
  },
  width: {
    type: String,
    default:''
  },
  height: {
    type: String,
    default:''
  }
})
const imageLazy = ref(null);

onMounted(() => {
  registerObserverImage()
})
function loadImage(image) {
    const url = image.getAttribute('data-src')
    image.setAttribute('src', url)
}
function registerObserverImage() {
  if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { isIntersecting, target } = entry
            if (isIntersecting) {
              loadImage(imageLazy.value)
              observer.unobserve(imageLazy.value)
            }
        })
      })
     observer.observe(imageLazy.value)
  } else {
    loadImage(imageLazy.value)
  }
}
</script>
