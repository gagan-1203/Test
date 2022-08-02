<template>
  <v-row justify="center" align="center">
    
    <!-- NAVBAR -->
    <div class="w-full flex flex-col md:flex-row my-5 py-5 px-2 mx-5">
      <div class="w-full px-0 py-3 flex flex-col md:flex-row">
        <!-- LOGO -->
        <div class="w-auto flex flex-col md:flex-row align-center">
          <p class="font-42 my-0">Logo</p>
        </div>
        <!-- LOGO END -->
        <!-- TABS -->
        <div class="w-full md:ml-24">
          <v-tabs fixed-tabs background-color="transparent" dark hideSlider>
            <NuxtLink to="/w">
              <v-tab>
                About us
              </v-tab>
            </NuxtLink>
            <NuxtLink to="/e">
              <v-tab>
                Biggest Sale
              </v-tab>
            </NuxtLink>
            <NuxtLink to="/r">
              <v-tab>
                Road map
              </v-tab>
            </NuxtLink>
            <NuxtLink to="/t">
              <v-tab>
                Team
              </v-tab>
            </NuxtLink>
            <NuxtLink to="/y">
              <v-tab>
                Blog
              </v-tab>
            </NuxtLink>
          </v-tabs>
        </div>
        <!-- TABS END  -->
        <!-- ACTION BTN -->
        <div class="w-auto flex flex-col md:flex-row align-center">
          <v-btn class="px-6 py-3 btn-grad rounded-lg" height="auto">
            <span class="capitalize font-20 py-1">Join Discord</span>
          </v-btn>
        </div>
        <!-- ACTION BTN END  -->
      </div>
    </div>
    <!-- NAVBAR END -->

  </v-row>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script> 
