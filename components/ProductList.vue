<template>
  <section class="text-center">
    <div class="p-16 text-5xl font-bold text-gray-600">
      <h2>Guinea Pigs Breeds</h2>
      <product-cards />
    </div>
  </section>
</template>

<script>
import ProductCards from "./ProductCards.vue";
export default {
  components: { ProductCards },
};
</script>

<style scoped>
</style>