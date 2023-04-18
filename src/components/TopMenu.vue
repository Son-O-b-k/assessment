<template>
    <div class="flex justify-between gap-5 sm:inline-flex hidden">
        <ul class="inline-flex gap-3">
        <li class="font-[400] text-[#6B6B6B] text-[18px]" v-for="(item,i) in items" :key="i">{{item.name}}</li>
        </ul>

        <button v-if="hideButton===false" class="rounded-[25px] border-1 border-[#33C7C7] border-solid w-auto py-[4px] px-[16px] h-[35px] bg-[#33C7C7] text-[#ffffff] text-[16px] font-[600]">Get Gift Card</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export interface Menu {
    link:string,
    name:string
}

export default defineComponent({

    name:"HeaderSection",
    props:{
        items:{type:Array<Menu> , default:[] , required:true},
        hideButton:{type:Boolean , default:false}
    }

})
</script>

