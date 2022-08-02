<template>
  <v-app class="bg-1a2146">
    <v-main>
      <v-container>
         <!-- NAVBAR -->
    <NavbarComponent v-if="false" />
    <!-- NAVBAR END -->
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from '../pages/partials/landing/navbarComponent.vue';
export default {
  name: 'DefaultLayout',
   components: {
    NavbarComponent
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
