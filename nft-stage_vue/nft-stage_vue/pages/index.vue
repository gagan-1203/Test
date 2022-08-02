<template>
  <v-row justify="center" align="center">

    <!-- HERO SECTION -->
    <HeroComponent />
    <!-- HERO SECTION END  -->

    <!-- COUNTER SECTION  -->
    <CounterComponent />
    <!-- COUNTER SECTION END  -->

    <!-- ABOUT US SECTION -->
    <AboutUsComponent />
    <!-- ABOUT US SECTION END -->

    <!-- TRENDING SECTION  -->
    <TrendingComponent />
    <!-- TRENDING SECTION END -->

    <!-- TRENDING SECTION  -->
    <OurTeamsComponent />
    <!-- TRENDING SECTION END -->

  </v-row>
</template>

<script>

import HeroComponent from './partials/landing/heroComponent.vue';
import CounterComponent from './partials/landing/counterComponent.vue';
import AboutUsComponent from './partials/landing/aboutUsComponent.vue';
import TrendingComponent from './partials/landing/trendingComponent.vue';
import OurTeamsComponent from './partials/landing/ourTeamsComponent.vue';

export default {
  name: 'IndexPage',
  components: {
    HeroComponent,
    CounterComponent,
    AboutUsComponent,
    TrendingComponent,
    OurTeamsComponent
  },
  mounted() {
    console.log(this.$store.state.counter)
  }
}

</script>
