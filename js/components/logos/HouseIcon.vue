<script setup lang="ts">
import {ComponentProps} from "../components";
import {computed} from "vue";
import {Fill, useLogo} from "../../composables/useLogo";

const props = defineProps<ComponentProps>()
const logo = useLogo({color: 'foundation'})
const post = computed<Fill>((): Fill => logo.color(props))
const roof = computed<Fill>((): Fill => logo.text(props))
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774.65 486.33">
        <path :class="post.class" :style="post.css"
              d="M244.75,219.6v230.92c0,19.77-16.05,35.81-35.84,35.81h0v-230.92c0-19.77,16.05-35.81,35.84-35.81h0Z"/>
        <path :class="roof.class" :style="roof.css"
              d="M0,196.76l181.94-70.78-.06-86.3c0-4.34,3.51-7.86,7.86-7.87l107.56-.19c4.46,0,8.03,3.68,7.88,8.13l-1.31,39.18L497.14,2.74c9.36-3.69,19.77-3.66,29.1.08l248.4,99.56h0c-6.92,18.15-27.39,27.11-45.44,19.89l-201.56-80.24c-9.23-3.67-19.51-3.73-28.77-.15L45.6,217.04C27.4,224.07,6.95,214.97,0,196.76h0Z"/>
    </svg>
</template>

<style scoped>

</style>
