<template>
  <div class="todo-item">
      <p>{{todo.title}}</p>
  </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {

    }
}
</script>

<style scoped>
.todo-item {
  border: 1px solid #ccc;
  background: #bdbdbd;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>