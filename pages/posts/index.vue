<template>
  <main>
     <div class="container">
        <div class="grid grid-cols-4 gap-3">
          <CardPost v-for="(_, index) in 20" :key="index" />
        </div>
      </div>
  </main>
</template>
