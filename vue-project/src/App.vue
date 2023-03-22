<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Todolist/Header.vue';

let count=ref(0);

const emit=defineEmits(['increaseCount']);
console.log("emit:",emit);
</script>

<template>
  <!-- <h1>{{ count }}</h1> -->
  <Header message="Greeting message" @increaseCount="(n)=>(count+=n)" />
  <RouterView /> 
</template>


