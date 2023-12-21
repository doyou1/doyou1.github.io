<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { Task as RequestTask } from "@/shared/request/task";
import { Task as ResponseTask } from "@/shared/response/task";

const tasks: Ref<ResponseTask[]> = ref([]);

const title = ref();
const complete = ref(false);

const send = () => {
  const result: RequestTask = {
    title: title.value,
    complete: complete.value,
  };
  axios.post("api/tasks", result)
    .then((response: AxiosResponse) => {
      const data = JSON.parse(response.data) as ResponseTask[];
      tasks.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetch = () => {
  axios.get("api/tasks")
    .then((response: AxiosResponse) => {
      const data = JSON.parse(response.data) as ResponseTask[];
      tasks.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  fetch();
});
</script>

<template>
  <p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        id: {{ task.id }}
        title: {{ task.title }}
        complete: {{ task.complete }}
      </li>
    </ul>

  </p>

  <div>title : <input v-model="title" type="text" /></div>
  <div>complete : <input v-model="complete" type="checkbox"  /></div>
  <div>result - title : {{ title }} / complete : {{ complete }}</div>
  <button type="button" @click="send">Send</button>
</template>

<style scoped></style>
