<template>
    <div class="">
        <div class="text-[#000E1F] font-[700] text-[50px] text-center">Top Brands</div>
        <div class="text-[#6B6B6B] font-[400] text-[20px] text-center">Simply place an order and have it delivered to any recipient residential address.</div>
        
        <div class="w-[100vw] sm:px-35 pt-10 space-x-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:justify-center">
            <div class="mt-[12px] flex justify-center" v-for="(item,i) in brands" :key="i">
            <BrandsCard
                :name="item.name"
                :image="item.image"
                :ratings="item.ratings"
                :stars="item.stars"
            /></div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent , ref } from "vue"
import BrandsCard from "@/components/reusables/BrandsCard.vue"
export default defineComponent({
    setup(){
        const brands = ref([
            {
                name:"Amazon",
                image:"amazon-gift-card.png",
                ratings:92,
                stars:5
            },
            {
                name:"iTunes",
                image:"itunes.png",
                ratings:88,
                stars:4
            },
            {
                name:"Sephora",
                image:"sephora.png",
                ratings:102,
                stars:5
            },
            {
                name:"Walmart",
                image:"walmart.png",
                ratings:76,
                stars:3
            },
            {
                name:"Spotify",
                image:"spotify.png",
                ratings:23,
                stars:1
            },
            {
                name:"Playstation",
                image:"playstation.png",
                ratings:99,
                stars:5
            },
            {
                name:"AppStore",
                image:"appstore.png",
                ratings:92,
                stars:2
            },
        ])
        return { brands }
    },
    name:"SectionThree",
    components:{
       BrandsCard
    }
})
</script>
