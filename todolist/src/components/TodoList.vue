<template>
    <section class="todoapp">
        <header class="header">
            <h1>Todos</h1>
            <input type="text" name="" id="" class="new-todo" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <div class="main">
            <input type="checkbox" class="toggle-all" v-model="allDone">
            <ul class="todo-list">
                <li class="todo  " v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo === editing}">
                    <div class="view">
                        <input type="checkbox" v-model="todo.completed" class="toggle">
                        <label @dblclick="editeTodo(todo)" for="">{{ todo.name }}</label>
                        <button class="destroy" @click.prevent="delectTodo(todo)"></button>
                    </div>
                    <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">
                </li>
            </ul>
        </div>
        <footer class="footer" v-show="todos.length > 0">
            <span class="todo-count"><strong>{{ remaining }}</strong>tâche à faire</span>
            <ul class="filters">
                <li><a href="#" :class="{selected : filter === 'all'}" @click.prevent="filter='all'">Toutes</a> </li>
                <li><a href="#" :class="{selected : filter === 'todo'}" @click.prevent="filter='todo'">A faire</a> </li>
                <li><a href="#" :class="{selected : filter === 'done'}" @click.prevent="filter='done'">Faites</a> </li>
            </ul>
            <button class="clear-completed" v-show="completed" @click.prevent="delectCompleted">Supprimer </button>
        </footer>
    </section>
</template>
<script>






export default {
    data () {
        return {
            
            todos: [],
            newTodo: '',
            filter: 'all',
            editing: null,
            oldTodo: ''
        }
    },
    methods :{
        addTodo () {
            this.todos.push({
                 completed:false,
                 name:this.newTodo
            })
            this.newTodo = ''
        },
        delectTodo (todo) {
            this.todos = this.todos.filter(i => i !== todo)
        },
        delectCompleted () {
            this.todos = this.todos.filter(todo => !todo.completed)

        },
        editeTodo(todo) {
            this.editing = todo
            this.oldTodo = todo.name
        },
        doneEdit (){
            this.editing = null
        },
        cancelEdit () {
            this.editing.name=this.oldTodo
            this.doneEdit()
        }
    },

    computed : {
        allDone: {
            get () {
                return this.remaining === 0

            },
            set (value) {
               if (value === true) {
                this.todos.forEach(todo => {
                    todo.completed = value
                })
               }
            },

        },
        remaining() {
           return this.todos.filter(todo => !todo.completed).length
        },
        completed() {
           return this.todos.filter(todo => todo.completed).length
        },
        filteredTodos(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => !todo.completed)
            } else if(this.filter === 'done') {
                return this.todos.filter(todo => todo.completed)
            }
            return this.todos
        }
    },
    directives: {
        focus(el , value) {
            if(value){
  
                el.focus()

            }
        }
    }

}

</script>
<style src="./todo.css">


</style>