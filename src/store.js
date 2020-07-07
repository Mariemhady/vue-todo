import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: ''
    },
    mutations: {
        get(state, todo){
            state.newTodo =  todo
        },
        add(state){
            state.todos.push({
                body: state.newTodo,
                completed: false
            })
      		localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        edit(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        remove(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            
        },
        complete(state, todo){
            todo.completed = !todo.completed
        },
        clear(state){
            state.newTodo = ''
        }
    },
    actions: {
        getTodo({commit}, todo){
            commit('get', todo)
        },
        addTodo({commit}){
            commit('add')
        },
        editTodo({commit}, todo){
            commit('edit', todo)
        },
        removeTodo({commit}, todo){
            commit('remove', todo)
        },
        completeTodo({commit}, todo){
            commit('complete', todo)
        },
        clearTodo({commit}){
            commit('clear')
        }

    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {return !todo.completed}),
        completedTodos: state => state.todos.filter((todo) => {return todo.completed})
    }

})