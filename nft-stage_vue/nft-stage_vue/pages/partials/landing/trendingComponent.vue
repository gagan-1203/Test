<template>
  <v-row justify="center" align="center">
      <ProductsComponent />
  </v-row>
</template>

<script>

import ProductsComponent from '../products/productsComponent.vue';

export default {
  name: 'TrendingComponent',
  components: {
    ProductsComponent
  }
}
</script>
