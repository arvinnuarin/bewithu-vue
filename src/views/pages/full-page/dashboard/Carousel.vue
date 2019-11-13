<!-- =========================================================================================
    File Name:Carousel.vue
    Description: Carousel Component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="carousel-example">
        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide :key="idx" v-for="(slide, idx) in slides">
              <a :href="slide.url"><img class="responsive" :src="slide.image" :alt="slide.name"></a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Carousel',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                // init: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            }
        }
    },
}
</script>