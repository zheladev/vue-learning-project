<template>
  <div class="todos">
      <h3>Todos</h3>
      <div class="todo-item-container">
          <TodoItem class="todo-item" 
          v-for="todo in allTodos"
          :key="todo.id"
          v-bind:todo="todo" />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from '../components/TodoItem';

export default {
    name: "Todos",
    computed: mapGetters(["allTodos"]),
    methods: {
        ...mapActions(["fetchTodos"])
    },
    components: {
        TodoItem
    },
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
.todos {
    text-align: center;
}
.todo-item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>