<template>
    <div class="container mx-auto max-w-6xl px-6 py-12">
        <nav class="container relative mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-20">
                    <img src="/images/yhonatan.svg" alt="" />
                    <div class="hidden space-x-8 text-lg md:flex">
                        <a
                            href="/"
                            class="font-poppins"
                            :style="{ color: stylesNav.home }"
                            >Home</a
                        >
                        <a
                            href="/publications/"
                            class="font-poppins"
                            :style="{ color: stylesNav.publications }"
                            >Publications</a
                        >
                        <a
                            href="/projects/"
                            class="font-poppins"
                            :style="{ color: stylesNav.projects }"
                            >Projects</a
                        >
                        <a
                            href="#"
                            class="font-poppins text-palermo2 hover:text-palermo5"
                            >CV</a
                        >
                    </div>
                </div>
                <div class="right-0 top-0 md:hidden">
                    <button
                        id="menu-btn"
                        type="button"
                        class="hamburger z-40 block focus:outline-none md:hidden"
                    >
                        <span class="hamburger-top"></span>
                        <span class="hamburger-middle"></span>
                        <span class="hamburger-bottom"></span>
                    </button>
                </div>
                <HamburgerMenu :url-name="navName" />
            </div>
        </nav>
        <h1>{{ navName }}</h1>
    </div>
</template>
<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue';

import { defineProps, reactive } from 'vue';

const props = defineProps({ navName: { type: String, required: true } });
const stylesNav = reactive({
    home: '',
    publications: '',
    projects: '',
});
const changeColor = () => {
    if (props.navName === 'home') {
        stylesNav.home = 'hsla(204.375, 100%, 19%, 1)';
        stylesNav.publications = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.projects = 'hsla(197.095, 100%, 35%, 1)';
    }
    if (props.navName === 'publications') {
        stylesNav.home = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.publications = 'hsla(204.375, 100%, 19%, 1)';
        stylesNav.projects = 'hsla(197.095, 100%, 35%, 1)';
    }
    if (props.navName === 'projects') {
        stylesNav.home = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.publications = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.projects = 'hsla(204.375, 100%, 19%, 1)';
    }
};
changeColor();
</script>
