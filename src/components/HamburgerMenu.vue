<template>
    <div
        id="menu"
        class="absolute bottom-0 left-0 top-0 hidden min-h-screen w-full flex-col space-y-3 self-end bg-palermo1 py-1 pl-12 pt-20 text-lg uppercase text-palermo2 md:hidden"
    >
        <a href="/" class="font-poppins" :style="{ color: stylesNav.home }">Home</a>
        <a href="/publications/" :style="{ color: stylesNav.publications }"
            >Publications</a
        >
        <a href="/projects/" :style="{ color: stylesNav.projects }">Projects</a>
        <a class="hover:text-palermo5">CV</a>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const props = defineProps({
    urlName: { type: String, required: true },
});
const stylesNav = reactive({
    home: '',
    publications: '',
    projects: '',
});
const changeColor = () => {
    if (props.urlName === 'home') {
        stylesNav.home = 'hsla(204.375, 100%, 19%, 1)';
        stylesNav.publications = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.projects = 'hsla(197.095, 100%, 35%, 1)';
    }
    if (props.urlName === 'publications') {
        stylesNav.home = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.publications = 'hsla(204.375, 100%, 19%, 1)';
        stylesNav.projects = 'hsla(197.095, 100%, 35%, 1)';
    }
    if (props.urlName === 'projects') {
        stylesNav.home = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.publications = 'hsla(197.095, 100%, 35%, 1)';
        stylesNav.projects = 'hsla(204.375, 100%, 19%, 1)';
    }
};
changeColor()

//TODO: try to fix menu hamburger (update state).
</script>
