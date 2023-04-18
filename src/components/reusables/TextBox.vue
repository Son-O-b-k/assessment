<template>
    <span :class="classx">
    <span class="relative flex justify-center items-center">
        <img class="absolute" :src="boxImage"/>
        <img class="absolute" :src="textImage"/>
    </span>
    </span>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
   props:{
       textImage:String,
       boxImage:String,
       classx:String
   }
})  
</script>