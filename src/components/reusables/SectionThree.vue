<template>
    <div class="lg:inline-flex lg:justify-between lg:gap-5 items-center bg-[#F2F9FD] py-5 px-4 lg:pa-4 rounded-[10px]">

        <div class="inline-flex lg:gap-2 gap-1">
            <a href="#"><AppleIcon :classx="'w-[64px] lg:w-[115px] h-auto'"/></a>
            <a href="#"><AmazonIcon :classx="'w-[64px] lg:w-[115px] h-auto'"/></a>
            <a href="#"><MicrosoftIcon :classx="'w-[64px] lg:w-[115px] h-auto'"/></a>
            <a href="#"><TiktokIcon :classx="'w-[64px] lg:w-[115px] h-auto'"/></a>
        </div>

        <div class="mt-6 lg:mt-0">
            <div class="flex justify-center"><StarFull/></div>
            <div class="mt-2 flex justify-center"><div class="w-[220px] md:w-auto h-auto font-[400] text-[14px]">Highest brands from our market of over 100,000+ products</div></div>
        </div>

        <div class="mt-10 lg:mt-0">
            <div class="flex justify-center">
                <div class="justify-center inline-flex items-center"><img src="@/assets/giftcard02.png"/>Apple</div>
            </div>

            <div class="flex justify-center"><StarBoxed/></div>
            
            <div class="text-center lg:text-left mt-1">Top Brand <strong>4.9</strong></div>
            <div class="text-center lg:text-left"><strong>915</strong> reviews</div>
            

        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AmazonIcon from "@/components/icons/AmazonIcon.vue" 
import AppleIcon from "@/components/icons/AppleIcon.vue"
import TiktokIcon from "@/components/icons/TiktokIcon.vue"
import MicrosoftIcon from "@/components/icons/MicrosoftIcon.vue"
import StarFull from "@/components/icons/StarFull.vue"
import StarBoxed from "@/components/icons/StarBoxed.vue"
export default defineComponent({
    name:"SectionThree",
    components:{
        AmazonIcon,
        AppleIcon,
        TiktokIcon,
        MicrosoftIcon,
        StarFull,
        StarBoxed
    }
})
</script>
