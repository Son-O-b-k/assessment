<template>
<div class="mx-[4rem] sm:ml-[5rem]">
    <div class="relative">
    <div class="giftimg sm:w-[350px] sm-h-[300px] absolute sm:translate-y-[4rem] translate-y-[2rem]"><img src="/giftcards/Group1000001952.png" class="w-[100%] h-[100%]"/></div>
    <div class="giftimg sm:w-[350px] sm-h-[300px] absolute rotate-[5deg]"><img src="/giftcards/Group1000001953.png" class="w-[100%] h-[100%]"/></div>
    <div class="giftimg sm:w-[350px] sm-h-[300px] absolute translate-x-[4px]"><img src="/giftcards/Group1000001954.png" class="w-[100%] h-[100%]"/></div>
    <div class="giftimg sm:w-[350px] sm-h-[300px] absolute"><img src="/giftcards/Group1000001955.png" class="w-[100%] h-[100%]"/></div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent , ref } from "vue"
import GiftCard from "@/components/reusables/GiftCard.vue"
export default defineComponent({
    setup(){
        const slide_interval = ref<any>();
        return { slide_interval };
    },
    props:{
        classx:{type:String , default:""},
        name:String,
        banner:String
    },
    components:{
        
    },
    data:()=>({
        slided_index:0,
        total_slides:0,
    }),
    methods:{
        transition(){
            
            if( this.slided_index === 0){
               
                //REMOVE ALL THE CLASSES
                for(let i= 1; i < this.total_slides; i++){
                    document.getElementsByClassName('giftimg')[i].classList.remove("giftimg1")
                }

                this.slided_index = this.total_slides - 1;

            }else{
                
                //ADD THE ANIMAION CLASS
                document.getElementsByClassName('giftimg')[this.slided_index].classList.add("giftimg1");
                this.slided_index -= 1;
            }

        }
    },
    mounted(){
        this.slided_index = document.getElementsByClassName('giftimg').length - 1;
        this.total_slides = this.slided_index + 1;
        this.slide_interval = window.setInterval(this.transition,3000);
    },
    unmounted(){
        if(this.slide_interval){
            window.clearInterval(this.slide_interval)
        }
    }
})
</script>

<style scoped>
.giftimg1{
   transform:translateX(27rem);
   transition-property: all;
   transition-duration: 3s;
   transition-delay:1s;
}  

</style>