<template>
    <div :class="`${classx} w-[250px] h-[200px] rounded-[10px] py-[1rem]`">
        <div>{{name}}</div>
        <div class="w-[80%] h-[80%] mx-auto">
        <img :src="banner" class="w-[100%] h-[100%]"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    props:{
        classx:{type:String , default:""},
        name:String,
        banner:String
    }
})
</script>