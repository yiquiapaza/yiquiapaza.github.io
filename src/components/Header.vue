<template>
    <div class="container mx-auto max-w-6xl px-6 py-12">
        <nav class="container relative mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-20">
                    <img src="/yhonatan.svg" alt="" />
                    <div class="hidden space-x-8 text-lg md:flex">
                        <a
                            href="#"
                            class="font-poppins text-palermo2 hover:text-palermo5"
                            >Home</a
                        >
                        <a
                            href="#"
                            class="font-poppins text-palermo2 hover:text-palermo5"
                            >Publications</a
                        >
                        <a
                            href="#"
                            class="font-poppins text-palermo2 hover:text-palermo5"
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
                <hamburger-menu></hamburger-menu>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue';

//TODO: Create script for hamburger menu when is open change color and create card
</script>
