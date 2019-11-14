<!-- =========================================================================================
    File Name: GameCard.vue
    Description: Game Box component
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-col w-full xl:w-1/6 lg:w-1/4 md:w-1/4 sm:w-1/2 mb-base">
        <router-link :to="url" exact :style="{ cursor: 'pointer'}" >
        <img :src="image" :alt="title" class="responsive rounded-lg">
        <div class="flex flex-col justify-between">
            <p class="title font-bold text-center">{{ title }}</p>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'GameCard',
    props: {
        type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    computed: {
        url() {
            return `/game/${this.type}/${this.title.toLowerCase().split(' ').join('-')}`
        }
    }
}
</script>
<style scoped>
.title {
    color: #7367F0;
}
</style>