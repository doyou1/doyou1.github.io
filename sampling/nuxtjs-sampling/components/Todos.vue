<template>
  <div>
    <h2>result</h2>
    <div v-for="todo in result" :key="todo.id">
      id: {{ todo.id }}, title: {{ todo.title }}, complete: {{ todo.complete }},
    </div>
    <hr />
    <h2>input</h2>
    <div>
      <input type="text" v-model="title" placeholder="input todo.." />
      <button type="button" @click="add">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref();
const result = ref<ResponseTodo[]>([]);

const add = async () => {
  const { data } = await useFetch("/api/todos", {
    method: "post",
    body: {
      title: title.value,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  result.value = data.value as ResponseTodo[];
  title.value = "";
};

const { data } = await useFetch("/api/todos");
result.value = data.value as ResponseTodo[];
</script>
