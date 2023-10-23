<template>
    <div class="container mx-auto max-w-6xl px-6 py-6">
        <nav class="container relative mx-auto p-6">
            <div class="flex items-center justify-between">
                <div
                    class="flex flex-col items-center space-x-2.5 md:flex-row md:space-x-20"
                >
                    <img src="/images/yhonatan.svg" alt="My name" />
                    <div
                        class="space-x-4 py-10 text-base md:w-full md:p-0 md:text-xl"
                    >
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
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

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
