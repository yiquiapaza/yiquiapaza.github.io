<template>
    <div
        id="menu"
        class="absolute bottom-0 left-0 top-0 hidden min-h-screen w-full flex-col space-y-3 self-end py-1 pl-12 pt-20 text-lg uppercase text-palermo2 md:hidden"
    >
        <div>
            <a href="/" class="hover:text-palermo5">Home</a>
        </div>
        <div>
            <a href="/publications/" class="hover:text-palermo5"
                >Publications</a
            >
        </div>
        <div>
            <a href="/projects/" class="hover:text-palermo5">Projects</a>
        </div>
        <div>
            <a class="hover:text-palermo5">CV</a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    url_nav: { type: String, required: true },
});

console.log('test')
</script>
