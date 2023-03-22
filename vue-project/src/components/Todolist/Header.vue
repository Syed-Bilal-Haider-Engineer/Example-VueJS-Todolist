<script setup>

import { emit } from 'process';
import { RouterLink } from 'vue-router';
const props=defineProps(['message']);
console.log(props.message);

</script>
<template>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <router-link class="nav-link text-white" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="/Preview">Preview</router-link>
                </li>
                <li>
                    <button @click="$emit('increaseCount',11)">click here</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>



