<template>
  <div>
    <v-card v-if="completed.length > 0">
      <v-card-title>
        <h3>Completed ({{completed.length}})</h3>
      </v-card-title>
      <v-card-title primary-title v-for="todo in completed">
        <div>
          <div v-model="todo.body">
              <h3 class="headline mb-0 ">{{ todo.body }}</h3>
          </div>
        </div>
        <v-btn @click="complete(todo)">
          UnComplete
        </v-btn>
        <v-btn color="error" @click="remove(todo)">
          Delete
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    remove(todo) {
        this.$store.dispatch('removeTodo', todo)
    },
    complete(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
  },
  computed: {
    completed() {
        return this.$store.getters.completedTodos
    }
  }
}
</script>