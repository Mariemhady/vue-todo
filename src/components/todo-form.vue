<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <input 
          class="form-control" 
          :value="newTodo" 
          @change="getTodo" 
          placeholder="What do you have to do?">
        <v-btn 
          small 
          type="primary" 
          @click="addTodo">Add</v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    getTodo(e) {
        this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo() {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
    },
  },
  computed: {
    newTodo() {
        return this.$store.getters.newTodo
    }
  }

}
</script>