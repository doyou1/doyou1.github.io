<script setup>
import { ref } from "vue";
const items = ref(["1", "2", "3sad"]);
</script>

<template>
  <div v-for="i in items" :key="i">
    {{ i }}
  </div>
</template>
