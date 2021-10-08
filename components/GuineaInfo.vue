<template>
  <div class="flex px-32 py-8 justify-center items-center">
    <img class="rounded shadow-lg" :src="breed.img" alt="" />
    <div class="px-10">
      <h1 class="text-5xl text-center font-bold text-gray-600">
        {{ breed.title }}
      </h1>
      <p class="mt-8">{{ breed.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    breed() {
      return this.$store.getters.getPiggyById(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
</style>