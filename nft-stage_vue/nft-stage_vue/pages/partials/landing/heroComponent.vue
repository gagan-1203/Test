<template>
  <v-row justify="center" align="center">
    <!-- HERO SECTION -->
    <div class="w-full px-7">
      <div class="row">
        <div class="flex flex-wrap my-60px">
          <div class="lg:w-6/12 sm:w-12/12 py-12">
            <h2 class="font-25 font-md-40 font-lg-60 font-xl-80 mt-12">
              Welcome to the<br />
              <span class="font-40 font-md-50 font-lg-60 font-xl-82 font-bold banner-text-gradient">Millionaire</span>
              <span class="font-40 font-md-50 font-lg-60 font-xl-82  font-bold">Club</span> 
            </h2>
            <p class="font-15 font-lg-20 text-white opacity-75 my-3">Facilisi ipsum nunc dolor, viverra ornare. Odio commodo auctor nulla id et, quisque eu. Diam, nulla leo lectus arcu neque, aliquam. Tortor ut proin nibh rhoncus phasellus mattis.</p>
            <div class="w-auto flex align-center mt-12">
             <v-btn class="px-3 px-lg-6 py-2 py-lg-3 btn-grad rounded-lg w-150px lg-w-196px " height="auto">
              <span class="capitalize font-16 font-lg-20 py-1">Explore</span>
             </v-btn>
            </div>
          </div>
          <div class="w-auto flex align-center justify-center">
            <img class="img-fluid lg:min-w-400px xl:min-w-470px" src="~/static/img/landing/hero-section-1.svg" alt="hero-img">
          </div>
        </div>
      </div>
    </div>

    <!-- HERO SECTION END  -->
  </v-row>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>
