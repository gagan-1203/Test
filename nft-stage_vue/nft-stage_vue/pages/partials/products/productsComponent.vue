<template>
  <div class="w-full my-5 px-3">
    <!-- HEADING SECTION  -->
    <v-row justify="center" align="center">
      <div class="w-full px-3 flex justify-center">
        <div class="text-center">
          <h2 class="font-20 font-lg-30 mt-10 about-text-gradient">
            Trending
          </h2>
          <h2 class="font-30 font-lg-40 font-xl-46 font-md-35 mt-0">
            Biggest Sale
          </h2>
          <p class="font-15 font-lg-20 text-white opacity-75 mt-6 mb-8">Facilisi ipsum nunc dolor, viverra ornare. Odio commodo
            auctor nulla id</p>
        </div>
      </div>
    </v-row>
    <!-- CARDS SECTION -->
    <v-row justify="center" align="center">
      <div class="w-full px-3  flex flex-wrap">
        <ProductComponent v-for="card in 4" :key="card" />
      </div>
    </v-row>
    <!-- BTN SECTION -->
    <v-row justify="center" align="center">
      <div class="w-full px-3 flex justify-center mt-10">
        <v-btn class="px-3 px-lg-6 py-2 py-lg-3 btn-grad rounded-lg w-150px lg-w-196px " height="auto">
          <span class="capitalize font-14 font-lg-20 py-1">View all</span>
        </v-btn>
      </div>
    </v-row>
  </div>

</template>

<script>
import ProductComponent from './productComponent.vue';
export default {
  name: 'ProductsComponent',
  components: {
    ProductComponent
  }
}

</script>
