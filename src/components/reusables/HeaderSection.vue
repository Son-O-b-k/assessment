<template>
    <div class="bg-[#ffffff] pb-5 fixed top-0 left-0 right-0 z-10 px-5 pt-[2rem] sm:pa-20 w-[100vw] flex justify-between items-center">
        <LogoC :classx="'text-[24px] font-[600] text-[#286593]'"/>
        <TopMenu :items="menuItems" :hideButton="false"/>
        <MenuIcon/>
    </div>
</template>

<script lang="ts">
import { defineComponent , ref } from "vue"
import LogoC from "@/components/LogoC.vue"
import TopMenu from "@/components/TopMenu.vue"
import MenuIcon from "@/components/icons/MenuIcon.vue"
import { useDataStore } from "@/stores/data"
export default defineComponent({
    setup(){
        const store = useDataStore();
        const menuItems = store.menu;

        return {
            menuItems
        }
    },
    name:"HeaderSection",
    components:{
        LogoC,
        TopMenu,
        MenuIcon
    }
})
</script>

