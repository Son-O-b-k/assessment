<template>
 <div class="relative w-[95%] mx-auto h-auto flex flex-row">
    
    <div class="flex-none">
    <button @click="slideTopBottom" class="translate-y-[6.5rem] bg-[#F2F9FD] w-[35px] sm:w-[60px] h-[35px] sm:h-[60px] rounded-[100%] shadow-[0px_2px_4px_rgba(196,196,196,0.2)] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
     </button>
     </div>


     <div class="grow h-[240px] sm:h-[350px] overflow-hidden">
    
     <SlideBox 
     v-for="(content,i) in contents" 
     :key="i"
     :title="content.title"
     :content="content.content"
     :profile="content.profile"
     :fullname="content.fullname"
     />
     </div>

    <div class="flex-none">
     <button @click="slideRight" class="translate-y-[6.5rem] bg-[#F2F9FD] w-[35px] sm:w-[60px] h-[35px] sm:h-[60px] rounded-[100%] shadow-[0px_2px_4px_rgba(196,196,196,0.2)] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
     </button>
    </div>

    </div>
</template>

<script lang="ts">
import { defineComponent , ref} from "vue"
import SlideBox from "@/components/reusables/SlideBox.vue"
export default defineComponent({
    components:{
        SlideBox
    },
    setup(){
        const contents = ref([
            {
                title:"APP STORE",
                content:"I gifted the family package to my younger brother, and he could download all mobile applications at ease.",
                profile:"profile/Ellipse438.png",
                fullname:"Eniola Salami"
            },
            {
                title:"PLAYSTATION",
                content:"Gifted my boyfriend this gift card, glad to see all his preferences as I customised it. He loves it so much.",
                profile:"profile/Ellipse439.png",
                fullname:"Maryann James"
            },
            {
                title:"SPOTIFY",
                content:"Now my gym instructor can play music during exercises, without any interruption from social adverts.",
                profile:"profile/Ellipse437.png",
                fullname:"Peter Raymond"
            },
            {
                title:"JUMIA",
                content:"This has to be a life saver. Getting a birthday gift for my boss was such a difficult task. Thanks to this.",
                profile:"profile/Ellipse436.png",
                fullname:"Chimsidi Ogo"
            }
        ])

        const current_slide = ref(0)

        return { contents , current_slide}
    },
    methods:{
        slideTopBottom(){
            const doc = document.getElementsByClassName("image-slides") as HTMLCollectionOf<HTMLElement>;

            if(this.current_slide === doc.length-1){

                this.current_slide = 0;

                for(let i = 0; i < doc.length; i++ ){
                    doc[i].style.display = 'none';
                }

                doc[this.current_slide].style.display='block';

            }else{

                this.current_slide = doc.length - 1;

                for(let i = 0; i < doc.length; i++ ){
                    doc[i].style.display = 'none';
                }

                doc[ doc.length - 1 ].style.display='block';
            }
        },
        slideRight(){

            const doc = document.getElementsByClassName("image-slides") as HTMLCollectionOf<HTMLElement>;
            this.current_slide += 1
            if( this.current_slide === doc.length){

                for(let i = 0; i < doc.length; i++ ){
                    doc[i].style.display = 'none';
                }

                doc[0].style.display = 'block';
                this.current_slide = 0;
            }else{
                for(let i = 0; i < doc.length; i++ ){
                    doc[i].style.display = 'none';
                }
                doc[this.current_slide].style.display = 'block';
            }
    
        }
    }
})
</script>