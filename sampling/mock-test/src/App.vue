<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:3100';
const listData = ref(undefined);
const data = ref(undefined);

onMounted(()=> {
  axios.get(`${BASE_URL}/v1/api/test/list`)
    .then(function(response) {
      listData.value = response.data;
    })
    .catch(function(error) {
      console.log('ERROR!! occurred in Backend.')
    });
  axios.get(`${BASE_URL}/v1/api/test/one`)
    .then(function(response) {
      data.value = response.data;
    })
    .catch(function(error) {
      console.log('ERROR!! occurred in Backend.')
    });
})

</script>

<template>
  <div v-if="listData">
    <h2>List Data</h2>
    <div v-for="item in listData">
      <ul>
        <li>id: {{ item.id }}</li>
        <li>name: {{ item.name }}</li>
        <li>status: {{ item.status }}</li>
      </ul>
    </div>
  </div>

  <div v-if="data">
    <h2>Data</h2>
    <ul>
      <li>id: {{ data.id }}</li>
      <li>name: {{ data.name }}</li>
      <li>status: {{ data.status }}</li>
    </ul>
  </div>

</template>

<style scoped>

</style>
