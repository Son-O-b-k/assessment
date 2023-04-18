<template>
    <div class="pt-[1rem] image-slides">
       <div class="text-center font-[700] text-[12px] sm:text-[28px] text-[#000E1F]">{{title}}</div> 
       <br/>
       <div class="flex justify-center">
       <div class="text-center w-[200px] sm:w-[350px] text-[#6B6B6B] text-[12px] sm:text-[22px] font-[600]">{{content}}</div>
       </div>
        <br/><br/>
       
       <div class="flex justify-center">
        <div class="inline-flex justify-center items-center gap-1">
            <div class="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-[100%]">
            <img :src="profile" class="w-[100%] h-[100%] object-cover"/>
            </div>
            <span class="font-[600] text-[10px] sm:text-[16px] text-[#000E1F]">{{fullname}}</span>
        </div>
       </div>
    
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    props:{
        title:String,
        content:String,
        profile:String,
        fullname:String
    }
})
</script>