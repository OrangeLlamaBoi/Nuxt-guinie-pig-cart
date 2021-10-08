<template>
  <ul
    class="
      px-16
      py-16
      grid
      row-auto
      gap-10
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
    "
  >
    <li class="rounded-lg shadow-lg" v-for="breed in breeds" :key="breed.id">
      <NuxtLink :to="`/about/${breed.id}`">
        <img
          class="rounded-md w-screen object-cover max-h-60"
          :src="breed.img"
        />
      </NuxtLink>
      <div class="py-2 px-8 text-gray-600">
        <div class="grid grid-cols-2 mt-10">
          <span class="text-xl font-bold text-left"> {{ breed.title }}</span>
          <span class="text-base font-medium text-right"
            >${{ breed.price }}</span
          >
        </div>
        <button
          :disabled="checkCart(breed.id)"
          :class="
            checkCart(breed.id)
              ? 'bg-red-300 cursor-not-allowed'
              : 'bg-purple-200 hover:bg-purple-300'
          "
          class="
            font-medium
            px-2
            py-2
            mt-10
            text-lg
            mb-4
            w-full
            rounded
            transition-all
          "
          type="button"
          v-on:click="pushToCart(breed)"
        >
          {{ checkCart(breed.id) ? "In Cart" : "Add to Cart" }}
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    breeds() {
      return this.$store.state.breeds;
    },
  },
  methods: {
    pushToCart(breeds) {
      this.$store.dispatch("pushToCart", breeds);
    },
    checkCart(id) {
      return this.$store.getters.checkCart.find((item) => item.id === id);
    },
  },
};
</script>