<template>
<div class="border-[1.2px] border-[#DCD9D9] border-solid w-[250px] rounded-[10px]">
    <div class="w-[250px] h-[150px] bg-[#57D4D4] relative rounded-tr-[15px] rounded-tl-[15px]">
    <img :src="image" class="w-[100%] h-[100%] object-contain"/>

    <svg class="absolute bottom-0 max-w-[100%]" width="285" height="15" viewBox="0 0 285 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M285 0L0 12.8431V15H285V0Z" fill="#57D4D4"/>
    </svg>

    </div>
    
    <div class="mt-2">
    &nbsp;&nbsp;&nbsp;<StarRating :rating="stars"/>
    {{`(${ratings} verified ratings)`}}
    </div>

    <div class="pl-2 font-[400] text-[22px] text-[#000E1F]">{{name}}</div>
    <div class="pl-2 font-[400] text-[22px] text-[#000E1F]">Gift Cards</div>

</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import StarRating from "@/components/reusables/StarRating.vue"
export default defineComponent({
    name:"BrandCard",
    components:{
       StarRating
    },
    props:{
        image:{type:String , default:""},
        ratings:{type:Number , default:0},
        stars:{type:Number , default:0},
        name:String
    }
})
</script>