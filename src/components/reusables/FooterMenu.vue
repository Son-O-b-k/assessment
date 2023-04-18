<template>
    <div class="flex justify-center flex-col container mx-auto px-4 lg:px-0">

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <FooterBox title="Product" :items="[{name:'Fashion',link:''},{name:'Gadgets',link:''},{name:'Home Appliances',link:''},{name:'Office & Work Tools',link:''}]"/>
        <FooterBox title="Features" :items="[{name:'Customise',link:''},{name:'Delivery',link:''},{name:'Apply Coupon',link:''},{name:'Referral Bonus',link:''}]"/>
        <FooterBox title="Support" :items="[{name:'Get Help',link:''},{name:'FAQ',link:''},{name:'Contact Us',link:''}]"/>
        <FooterBox title="Transparency" :items="[{name:'Terms & Conditions',link:''},{name:'Privacy Policy',link:''},{name:'Cookies',link:''}]"/>
        <FooterBox title="Subscribe to news letter">
        <template v-slot:default>
        <br/>
        <div class="absolute h-[45px] sm:w-[275px] w-[300px] border-[#ECF6F6] items-center rounded-l-[7px] rounded-r-[7px] inline-flex justify-center bg-[#ECF6F6] border-[1.2px]">
        <input class="rounded-l-[7px] w-[100%] sm:w-[180px] outline-0 px-2 bg-[#ECF6F6] py-2" type="text" placeholder="Enter your email"/>
        <button class="rounded-r-[7px] px-[10px] w-auto h-[45px] bg-[#57D4D4] text-[#ffffff] text-[16px] font-[600]">Subscribe</button>
        </div>
        </template>
    
        <template v-slot:socials>
        <div class="inline-flex items-center gap-x-5 absolute -bottom-[5rem] pl-3">
        
        <FacebookIcon/>
        <TwitterIcon/>
        <YoutubeIcon/>
        <LinkedinIcon/>
        <InstagramIcon/>
        </div>
        </template>
        </FooterBox>
        </div>


    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FooterBox from "@/components/FooterBox.vue"
import FacebookIcon from "@/components/icons/FacebookIcon.vue"
import InstagramIcon from "@/components/icons/InstagramIcon.vue"
import TiktokIcon from "@/components/icons/TiktokIcon.vue"
import TwitterIcon from "@/components/icons/TwitterIcon.vue"
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue"
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue"

export default defineComponent({
    components:{
       FooterBox,
       FacebookIcon,
       InstagramIcon,
       TiktokIcon,
       TwitterIcon,
       YoutubeIcon,
       LinkedinIcon,
    }
})
</script>