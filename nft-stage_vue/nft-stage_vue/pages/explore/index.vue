<template>
    <v-main>
        <v-row justify="center" align="center">
            <v-container>
                <div class="d-flex justify-center px-4 mx-5">
                    <div class=" w-1/2">
                        <v-text-field prepend-inner-icon="mdi-magnify" label="Search by name or attributes" solo light
                            type="search" single-line>
                            <!-- <v-icon slot="prepend " color="black" class="p-3 bg-white mt-0 mr-0">
                                mdi-magnify
                            </v-icon> -->
                        </v-text-field>
                    </div>
                </div>
            </v-container>
        </v-row>
        <v-row justify="center" align="center">
            <v-container>
                <div class="w-full">
                    <div>
                        <div class="py-0 text-center">
                            <h2 class="font-36 font-semibold mt-0 ">
                                Explore All blockchains
                            </h2>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-row>
        <v-row justify="center" align="center">
            <v-container fluid class="mt-5">
                <div class="d-flex justify-space-between align-center flex-wrap">
                    <div class="row d-flex">
                        <div class="w-6/12 sm:w-4/12 xl:w-2/12 px-3">
                            <v-select :menu-props="{ light: true }" :items="blockChain" label="Blockchain" solo light>
                            </v-select>
                        </div>

                        <div class="w-6/12 sm:w-4/12 xl:w-2/12 px-3">
                            <v-select :menu-props="{ light: true }" :items="category" label="Category" solo light>
                            </v-select>
                        </div>

                        <div class="w-6/12 sm:w-4/12 xl:w-2/12 px-3">
                            <v-select :menu-props="{ light: true }" :items="status" label="Status" solo light>
                            </v-select>
                        </div>

                         <div class="w-6/12 sm:w-4/12 xl:w-2/12 px-3 xl:ml-auto">
                            <v-select :menu-props="{ light: true }" :items="sortBy" label="Sort By" solo light>
                            </v-select>
                        </div>

                        <div class="w-auto px-3">
                           <div class="d-flex border border-white rounded">
                            <div class="nft-active-grid h-12 d-flex align-center p-3 rounded ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M10 2H2V10H10V2Z" fill="#fff" />
                                    <path d="M22 2H14V10H22V2Z" fill="#fff" />
                                    <path d="M22 14H14V22H22V14Z" fill="#fff" />
                                    <path d="M10 14H2V22H10V14Z" fill="#fff" />
                                </svg>
                            </div>
                            <div class=" h-12 d-flex align-center p-3 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M7 3H3V7H7V3Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14 3H10V7H14V3Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14 10H10V14H14V10Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7 10H3V14H7V10Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14 17H10V21H14V17Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7 17H3V21H7V17Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M21 10H17V14H21V10Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M21 17H17V21H21V17Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M21 3H17V7H21V3Z" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                           </div>
                        </div>

                         

                    </div>

                    <div class="d-flex justify-space-between align-start">
                       

                     

                    </div>

                </div>
            </v-container>
        </v-row>
        <v-row justify="space-between" align="center">
            <v-col col="12" md="4">
                <v-card class="nft-explore-card" light>
                    <v-img class="align-end nft-explore-card-img"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    </v-img>

                    <v-card-title class="nft-card-category btn-grad text-white py-2 px-6">Photography</v-card-title>
                    <div class="nft-card-body p-3 pb-0 pt-7 mb-5">
                        <div class="d-flex items-center">
                            <v-card-text class="d-flex items-center pr-0">
                                <div class="d-flex w-10 h-10 overflow-hidden rounded-full">
                                    <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                    </v-img>
                                </div>
                                <div class="font-16 font-semibold ms-3">User Name</div>
                            </v-card-text>

                            <v-card-text class="text-end pl-0">
                                <p class="font-16 font-semibold mb-0 nft-duration">12 Days 7hrs
                                    <span>Left</span>
                                </p>
                            </v-card-text>

                        </div>

                        <v-card-text class="d-flex pt-1 pb-3">
                            <p class="pb-0 font-20 font-bold mb-0">
                                The Rusty Robots
                            </p>
                        </v-card-text>

                        <div class="px-4">
                            <p class="pb-0 font-16 font-medium mb-0 text-slate-500">Highest bid</p>
                            <div class="d-flex justify-space-between align-center">
                                <div class="font-16 font-semibold">1.05 ETH</div>
                                <div class="d-flex justify-space-between align-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"
                                            viewBox="0 0 22 20" fill="none">
                                            <path
                                                d="M19.84 2.61012C19.3292 2.09912 18.7228 1.69376 18.0553 1.4172C17.3879 1.14064 16.6725 0.998291 15.95 0.998291C15.2275 0.998291 14.5121 1.14064 13.8446 1.4172C13.1772 1.69376 12.5707 2.09912 12.06 2.61012L11 3.67012L9.93997 2.61012C8.90827 1.57842 7.509 0.998826 6.04997 0.998826C4.59093 0.998826 3.19166 1.57842 2.15997 2.61012C1.12827 3.64181 0.548676 5.04108 0.548676 6.50012C0.548676 7.95915 1.12827 9.35842 2.15997 10.3901L3.21997 11.4501L11 19.2301L18.78 11.4501L19.84 10.3901C20.351 9.87936 20.7563 9.27293 21.0329 8.60547C21.3094 7.93801 21.4518 7.2226 21.4518 6.50012C21.4518 5.77763 21.3094 5.06222 21.0329 4.39476C20.7563 3.7273 20.351 3.12087 19.84 2.61012Z"
                                                fill="#9825B7" />
                                        </svg>
                                    </div>
                                    <div class="font-16 font-semibold ms-2">
                                        40
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </v-card>
            </v-col>
            <v-col col="12" md="4">
                <v-card class="nft-explore-card" light>
                    <v-img class="align-end nft-explore-card-img"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    </v-img>

                    <v-card-title class="nft-card-category btn-grad text-white py-2 px-6">Photography</v-card-title>
                    <div class="nft-card-body p-3 pb-0 pt-7 mb-5">
                        <div class="d-flex items-center">
                            <v-card-text class="d-flex items-center pr-0">
                                <div class="d-flex w-10 h-10 overflow-hidden rounded-full">
                                    <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                    </v-img>
                                </div>
                                <div class="font-16 font-semibold ms-3">User Name</div>
                            </v-card-text>

                            <v-card-text class="text-end pl-0">
                                <p class="font-16 font-semibold mb-0 nft-duration">12 Days 7hrs
                                    <span>Left</span>
                                </p>
                            </v-card-text>

                        </div>

                        <v-card-text class="d-flex pt-1 pb-3">
                            <p class="pb-0 font-20 font-bold mb-0">
                                The Rusty Robots
                            </p>
                        </v-card-text>

                        <div class="px-4">
                            <p class="pb-0 font-16 font-medium mb-0 text-slate-500">Highest bid</p>
                            <div class="d-flex justify-space-between align-center">
                                <div class="font-16 font-semibold">1.05 ETH</div>
                                <div class="d-flex justify-space-between align-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"
                                            viewBox="0 0 22 20" fill="none">
                                            <path
                                                d="M19.84 2.61012C19.3292 2.09912 18.7228 1.69376 18.0553 1.4172C17.3879 1.14064 16.6725 0.998291 15.95 0.998291C15.2275 0.998291 14.5121 1.14064 13.8446 1.4172C13.1772 1.69376 12.5707 2.09912 12.06 2.61012L11 3.67012L9.93997 2.61012C8.90827 1.57842 7.509 0.998826 6.04997 0.998826C4.59093 0.998826 3.19166 1.57842 2.15997 2.61012C1.12827 3.64181 0.548676 5.04108 0.548676 6.50012C0.548676 7.95915 1.12827 9.35842 2.15997 10.3901L3.21997 11.4501L11 19.2301L18.78 11.4501L19.84 10.3901C20.351 9.87936 20.7563 9.27293 21.0329 8.60547C21.3094 7.93801 21.4518 7.2226 21.4518 6.50012C21.4518 5.77763 21.3094 5.06222 21.0329 4.39476C20.7563 3.7273 20.351 3.12087 19.84 2.61012Z"
                                                fill="#9825B7" />
                                        </svg>
                                    </div>
                                    <div class="font-16 font-semibold ms-2">
                                        40
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </v-card>
            </v-col>
            <v-col col="12" md="4">
                <v-card class="nft-explore-card" light>
                    <v-img class="align-end nft-explore-card-img"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    </v-img>

                    <v-card-title class="nft-card-category btn-grad text-white py-2 px-6">Music</v-card-title>
                    <div class="nft-card-body p-3 pb-0 pt-7 mb-5">
                        <div class="d-flex items-center">
                            <v-card-text class="d-flex items-center pr-0">
                                <div class="d-flex w-10 h-10 overflow-hidden rounded-full">
                                    <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                    </v-img>
                                </div>
                                <div class="font-16 font-semibold ms-3">User Name</div>
                            </v-card-text>

                            <v-card-text class="text-end pl-0">
                                <p class="font-16 font-semibold mb-0 nft-duration">12 Days 7hrs
                                    <span>Left</span>
                                </p>
                            </v-card-text>

                        </div>

                        <v-card-text class="d-flex pt-1 pb-3">
                            <p class="pb-0 font-20 font-bold mb-0">
                                The Rusty Robots
                            </p>
                        </v-card-text>

                        <div class="px-4">
                            <p class="pb-0 font-16 font-medium mb-0 text-slate-500">Highest bid</p>
                            <div class="d-flex justify-space-between align-center">
                                <div class="font-16 font-semibold">1.05 ETH</div>
                                <div class="d-flex justify-space-between align-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"
                                            viewBox="0 0 22 20" fill="none">
                                            <path
                                                d="M19.84 2.61012C19.3292 2.09912 18.7228 1.69376 18.0553 1.4172C17.3879 1.14064 16.6725 0.998291 15.95 0.998291C15.2275 0.998291 14.5121 1.14064 13.8446 1.4172C13.1772 1.69376 12.5708 2.09912 12.06 2.61012L11 3.67012L9.94 2.61012C8.9083 1.57842 7.50903 0.998826 6.05 0.998826C4.59096 0.998826 3.19169 1.57842 2.16 2.61012C1.1283 3.64181 0.548706 5.04108 0.548706 6.50012C0.548706 7.95915 1.1283 9.35842 2.16 10.3901L3.22 11.4501L11 19.2301L18.78 11.4501L19.84 10.3901C20.351 9.87936 20.7563 9.27293 21.0329 8.60547C21.3095 7.93801 21.4518 7.2226 21.4518 6.50012C21.4518 5.77763 21.3095 5.06222 21.0329 4.39476C20.7563 3.7273 20.351 3.12087 19.84 2.61012V2.61012Z"
                                                stroke="#9825B7" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="font-16 font-semibold ms-2">
                                        40
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
export default {
    name: 'IndexPage',
    components: {
    },
    data: () => ({
        blockChain: ['Polygon', 'Ethereum', 'Cardano'],
        category: ['Art', 'Music', 'Sports', 'Games', 'Photography'],
        status: ['All', 'Buy', 'Auction'],
        sortBy: ['Recently added', 'Price: low to high', 'Price: high to low'],
    }),
    mounted() {
        console.log(this.$store.state.counter)
    }
}
</script>
