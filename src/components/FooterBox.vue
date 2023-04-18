<template>
    <div class="relative">
      <div class="text-[16px] font-[800] text-[#0C7E7E]">{{title}}</div> 
      
      <div v-for="(item,i) in items" :key="i" class="pb-4">
      <a class="text-[14px] font-[400] text-[#6B6B6B]" :href="item.link">{{item.name}}</a>
      </div> 
      <slot></slot>
      <div><slot name="socials"></slot></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export interface Menu {
    name : string,
    link : string
}

export default defineComponent({
    components:{
       
    },
    props:{
        title : {type:String , default:""},
        items:Array<Menu>
    }
})
</script>