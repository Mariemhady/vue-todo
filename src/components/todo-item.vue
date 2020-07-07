<template>
  <div>
    <v-card>
      <v-card-title v-if="todos.length > 0">
        <h3>Current ({{todos.length}})</h3>
      </v-card-title>
      <v-card-title primary-title  v-for="todo in todos">
          <div>
              <quick-edit v-model="todo.body">
                  <h3 class="headline mb-0 ">{{ todo.body }}</h3>
              </quick-edit>
          </div>
          <v-btn @click="complete(todo)">
              Complete
          </v-btn>
          <v-btn color="error" @click="remove(todo)">
              Delete
          </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
import QuickEdit from 'vue-quick-edit';

export default {
    components: {
        QuickEdit,
    },
    methods: {
        complete(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        },
        toggleEdit(ev, todo) {
            this.$store.dispatch('editTodo', todo)
            if (todo.edit) {
                Vue.nextTick(function() {
                    ev.$$.input.focus();
                })
            }
        },
        saveEdit(ev, todo) {
            this.toggleEdit(ev, todo);
        }
    },
    computed: {
        todos() {
            return this.$store.getters.todos
        }
    }
}
</script>
<style scoped="scoped">
.vue-quick-edit__link {
    color: black !important;
}
</style>