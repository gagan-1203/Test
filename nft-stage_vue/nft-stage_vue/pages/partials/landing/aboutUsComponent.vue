<template>
    <v-row justify="center" align="center">
        <!-- HERO SECTION -->
        <div class="w-full px-4">
            <div class="row">
                <div class="flex flex-wrap my-60px">
                    <div class="w-auto flex align-center justify-center">
                        <img class="img-fluid lg:min-w-400px xl:min-w-585px" src="~/static/img/landing/about-us.svg" alt="about-img">
                    </div>
                    <div class="w-full lg:w-6/12 py-0 px-6">
                        
                        <h2 class="font-20 font-md-25 font-lg-30 mt-10 about-text-gradient">
                            About Millionaire
                        </h2>

                        <h2 class="font-30 font-md-35 font-lg-40 mt-0">
                            Let’s Drive into the world<br/>
                            of NFT
                        </h2>

                        <p class="font-15 font-lg-20 text-white opacity-75 mt-6 mb-8">Facilisi ipsum nunc dolor, viverra ornare.
                            Odio
                            commodo auctor nulla id et, quisque eu. Diam, nulla leo lectus arcu neque, aliquam. Tortor
                            ut proin nibh rhoncus phasellus mattis.</p>

                        <p class="font-15 font-lg-20 text-white opacity-75 mt-6 mb-8">Facilisi ipsum nunc dolor, viverra ornare.
                            Odio
                            commodo auctor nulla id et, quisque eu.
                            Diam, nulla leo lectus arcu neque, aliquam. Tortor ut proin nibh rhoncus phasellus mattis.
                            nulla leo lectus arcu neque, aliquam. Tortor ut proin nibh rhoncus phasellus mattis.</p>

                        <div class="w-auto flex align-center mt-12">
                            <v-btn class="px-1 py-1 btn-grad rounded-lg w-150px lg-w-196px mt-2" height="auto">
                                <span
                                    class="capitalize font-16 font-lg-20 py-1 bg-1a2146 w-full h-full px-3 px-lg-5 py-2 py-lg-3 rounded-lg">Explore</span>
                            </v-btn>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- HERO SECTION END  -->
    </v-row>
</template>

<script>
export default {
    name: 'AboutUsComponent'
}
</script>
