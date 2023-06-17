<template>
  <main>
    <section>
      <div class="container">
        <div class="grid grid-cols-4 gap-3">
          <CardPost v-for="(_, index) in 100" :key="index" />
        </div>
      </div>
    </section>
  </main>
</template>
