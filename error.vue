<template>
  <main>
    <section>
      Error: {{ error.statusCode }}
    </section>
  </main>
</template>
<script setup>
  defineProps(['error'])
</script>
