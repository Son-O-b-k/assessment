<template>
    <div class="px-5">
        <br/><br/><br/>
        <div class="flex justify-center"><div class="text-[#000E1F] w-[250px] lg:w-[550px] text-center font-[700] text-[22px] lg:text-[48px]">Amazing features made available to you</div></div>
        <br/><br/>

        <div class="">

        <GiftTypes giftType="CUSTOM GIFTS"  
                   link="" 
                   classx="lg:flex lg:flex-row-reverse lg:justify-evenly"
                   title="Personalise your gift cards to preference" 
                   :features="[]" 
                   description="Tap into the gift bag to share love in the most amazing way. Change preference to suit that special one with no extra cost.">
                    <template v-slot:default>
                        <div class="pb-[2rem] lg:pb-[0rem]">
                            <div class="relative">
                                <div>
                                <div class="bg-blue-300 mx-auto h-[160px] w-[250px] lg:h-[240px] lg:w-[370px] rounded-[10px]"><img class="rounded-[10px] w-[100%] h-[100%] object-cover" src="/pexels-alleksana-64788641.png"/></div>
                                <br/>

                                <div class="flex justify-center">
                                <div class="inline-flex justify-center">
                                <img src="/Customisegiftscardsforfree.png"/>
                                <svg width="57" height="31" viewBox="0 0 57 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1888 24.1742C23.3079 24.1895 20.2225 23.9905 18.2668 23.7645C13.7307 23.2981 9.28703 22.1977 5.2021 20.3475C4.56557 20.0472 3.44639 19.6599 3.99709 18.1909C4.57057 16.6679 5.59667 16.0195 6.66352 16.443C9.26235 17.4438 11.904 18.5315 14.6755 18.7836C18.7109 19.1554 22.6677 19.7009 26.6403 19.4049C28.4106 19.2665 30.1637 19.0307 31.9021 18.7039C33.6391 18.3554 35.3097 17.8624 36.9334 17.2169C39.9667 15.9312 42.6553 14.0177 45.1122 11.9748C47.2426 10.2287 49.4266 8.43101 50.9945 6.10849C51.1737 5.83431 51.3025 5.49119 51.4377 5.14544C51.555 4.79209 51.6517 4.42474 51.8243 4.11597C52.133 3.6102 52.4727 2.70416 52.8238 2.21097C52.9855 2.00357 53.115 1.77198 53.1379 1.51664C53.2083 0.369742 53.8525 0.21212 55.4604 1.0493C55.8141 1.24091 56.3387 1.26615 56.5076 1.64479C56.5128 1.65758 56.5348 1.69336 56.54 1.70616C56.9231 2.31824 56.907 2.84666 56.77 3.33477C56.5971 3.8077 56.2968 4.24292 56.1175 4.71845C54.2681 9.39201 50.9719 13.3493 47.0933 16.3878C44.6904 18.2522 42.0235 19.6872 39.3048 21.0314C38.5683 21.4203 37.853 21.8976 37.0049 22.0487L37.0175 22.0436C36.2013 22.383 35.3619 22.7019 34.5079 22.93C31.2755 23.7077 27.8184 24.2265 24.6642 24.1151C24.541 24.1055 24.3748 24.1731 24.1888 24.1742Z" fill="#B27500"/>
                                <path d="M8.67741 21.0289C8.96623 21.2991 9.94537 22.295 10.6156 22.8798C12.1765 24.2431 13.7041 25.6347 14.8903 27.3964C15.0765 27.671 15.4749 28.0458 14.4132 29.1933C13.3107 30.3871 12.399 30.8399 12.0234 30.4112C11.1211 29.384 10.3588 28.188 9.16852 27.4792C7.43003 26.4492 6.11202 24.9499 4.59659 23.68L4.0798 23.2341L3.18775 22.4339C2.57813 21.9064 2.00919 21.3326 1.66229 20.7729C1.30898 20.2158 1.08908 19.6566 1.01768 19.0594C0.929693 18.4764 1.07819 17.76 1.38411 17.2106L1.41972 17.1514C1.72466 16.6546 2.06757 16.3064 2.54912 15.9689C3.02166 15.6277 3.73059 15.3543 4.50931 15.1792L5.67466 14.8917L6.27136 14.7459L6.61324 14.6516C7.01528 14.5403 7.42516 14.4482 7.83382 14.3715C9.25072 14.1158 10.7429 14.247 12.1837 14.1234C12.5234 14.097 12.8676 13.7334 13.2367 13.6877C13.543 13.6526 14.0453 13.5676 14.374 13.6426C14.514 13.6752 14.6616 13.727 14.7766 13.6429C15.3105 13.2693 15.5701 13.7974 15.7035 15.592C15.7353 15.9817 15.8792 16.4823 15.7885 16.7727C15.7873 16.7881 15.7797 16.8061 15.7721 16.8241C15.544 17.968 15.0183 17.5555 14.5791 17.6671C12.4379 18.1949 10.2769 18.619 8.1251 19.084L7.18737 19.2715C7.11819 19.2848 7.05554 19.2953 6.99797 19.3187C6.88022 19.3592 6.76501 19.406 6.81823 19.5186C6.82864 19.5442 6.88411 19.5887 6.94331 19.6243C7.0283 19.6866 7.11554 19.7182 6.98077 19.6985C7.07217 19.7582 7.24416 19.7778 7.23776 19.7804C7.23657 19.7958 7.28921 19.7967 7.2994 19.7851L7.3058 19.7825L7.71068 20.1546C7.9763 20.4045 8.23162 20.6659 8.47425 20.9326C8.51426 20.9759 8.61681 20.9715 8.67741 21.0289Z" fill="#B27500"/>
                                </svg>
                                </div>
                                </div>

                                </div>

                                <!--TEXTBOX CONTENTS-->
                                <TextBox textImage="noextracost/NoExtraCost.png" boxImage="noextracost/Rectangle40138.png"  classx="-top-[100px] -left-[80px] lg:-left-[130px]"/>

                                <TextBox textImage="rmgspgrn/RemoveGospelgenre.png" boxImage="rmgspgrn/Rectangle40135.png"  classx="-top-[180px] lg:-top-[270px] left-[50px] lg:left-[180px]"/>
                                <!--END-->
                            </div>
                        </div>
                    </template>
        
                    <template v-slot:button>
                    <button class="relative w-auto rounded-[25px] border-1 border-[#33C7C7] border-solid py-[4px] px-[6px] h-[40px] bg-[#33C7C7] text-[#ffffff] text-[16px] font-[600]">
                    <span class="-rotate-[15deg] bg-[#FFD380] text-black text-[10px] px-[3px] absolute -top-[10px] -left-[10px]">New</span>
                    <span class="text-[16px] px-2">Get started for free</span>
                    </button>
                    </template>
        </GiftTypes>
        
        <br/><br/>

        <GiftTypes giftType="SPECIAL GIFTS"  
                   link="" 
                   classx="lg:grid lg:grid-cols-2 gap-x-10"
                   title="Suitable to gift loved ones on special moments" 
                   :features="['Purchase at Discounts','Share to multiple people','Deliver at any location']" 
                   description="">
                    <template v-slot:default>
                        <div class="pb-[7rem] lg:pb-[0rem]">
                            <div class="relative flex justify-center">
                            <div class="w-[250px] h-[160px] lg:h-[240px] lg:w-[370px]"><img class="w-[100%] h-[100%]" src="/Rectangle40140.png"/></div>
                        <div class="top-[80px] left-[150px] lg:top-[120px] lg:left-[260px] absolute w-[180px] h-[155px] lg:w-[280px] lg:h-[250px]"><img class="w-[100%] h-[100%]" src="/Rectangle40134.png"/></div>
                            </div>
                        </div>
                    </template>

                    <template v-slot:button>
                    <button class="flex justify-center items-center w-auto rounded-[25px] border-1 border-[#33C7C7] border-solid py-[6px] px-[10px] h-[40px] bg-[#33C7C7] text-[#ffffff] font-[400]">
                    <span class="text-[16px] px-2">Get Gift Card</span>
                    </button>
                    </template>
        </GiftTypes>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import GiftTypes from "@/components/reusables/GiftTypes.vue"
import TextBox from "@/components/reusables/TextBox.vue"
export default defineComponent({
    components:{
        GiftTypes,
        TextBox
    }
})
</script>