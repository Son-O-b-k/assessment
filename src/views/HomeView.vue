<template>
<div class="relative">

<HeaderSection/>

<br/>
<div class="pt-[4rem] grid grid-rows-[auto_auto] gap-y-[1rem] sm:grid sm:grid-cols-[50%_50%] max-w-[100vw] sm:overflow-x-hidden sm:min-h-[450px]">
    
    <div class="mx-[2rem] sm:mx-[3rem]">
        <div class="text-[#061818] w-[200px] font-[700] text-[24px] sm:text-[64px] sm:w-[500px] sm:leading-[64px]">Get digital Gifts Cards at Ease</div>
        <div class="mt-5 text-[#6B6B6B] w-[250px] font-[400] text-[14px] sm:text-[20px] sm:w-[500px] sm:leading-[32px]">Express love to friends and family all over the world, with special memories of gifts.</div>
        <SearchBox/>
    </div>

    <div class="pt-[1rem] h-[300px] lg:h-[420px] overflow-hidden lg:overflow-visible">
    <AnimatedCards/>
    </div>
</div>


<div class="lg:mt-0 flex justify-center">
<SectionThree/>
</div>


<div class="pt-[3rem]"></div>
<TopBrands/>

<FeaturesPage/>


<div class="mt-[2rem]">
<ContentSlider/>
</div>

<br/><br/>
<CustomizeBox/>

<br/><br/>
<FooterMenu/>


<div class="pb-[2rem] mt-[6rem] sm:flex sm:flex-row sm:items-center sm:justify-between px-[1rem]">
    <div class="sm:flex sm:flex-row sm:items-center sm-gap-x-4 gap-y-10">
    <LogoC :classx="'text-[24px] font-[600] text-[#286593]'"/>
    <div class="sm:hidden"><br/></div>
    <div class="pl-3">© 1995 - 2023 GiftCard Inc. All Rights Reserved.</div>
    </div>
    
    <div class="sm:hidden"><br/><br/></div>

    <div class="pl-3 flex justify-between gap-5 sm:inline-flex">
        <ul class="inline-flex gap-3">
        <li class="font-[400] text-[#6B6B6B] text-[12px]" v-for="(item,i) in menuItems" :key="i">{{item.name}}</li>
        </ul>
    </div>
</div>
</div>
</template>

<script lang="ts">
import HeaderSection from "@/components/reusables/HeaderSection.vue"
import { defineComponent } from "vue"
import AnimatedCards from "@/components/AnimatedCards.vue"
import SearchBox from "@/components/SearchBox.vue"
import SectionThree from "@/components/reusables/SectionThree.vue"
import TopBrands from "@/components/TopBrands.vue"
import BrandsCard from "@/components/reusables/BrandsCard.vue"
import FeaturesPage from "@/components/FeaturesPage.vue"
import ContentSlider from "@/components/ContentSlider.vue"
import CustomizeBox from "@/components/CustomizeBox.vue"
import FooterMenu from "@/components/reusables/FooterMenu.vue"
import LogoC from "@/components/LogoC.vue"
import TopMenu from "@/components/TopMenu.vue"
import {useDataStore} from "@/stores/data"
export default defineComponent({
    setup(){
        const store = useDataStore();
        const menuItems = store.menu;
        return { menuItems }
    },
    name:"HomeView",
    components:{
        HeaderSection,
        AnimatedCards,
        SearchBox,
        SectionThree,
        TopBrands,
        BrandsCard,
        FeaturesPage,
        ContentSlider,
        CustomizeBox,
        FooterMenu,
        TopMenu,
        LogoC
    },
   
})
</script>