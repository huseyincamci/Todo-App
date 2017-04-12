var app = new Vue({
    el: '#app',
    data: {
        todoText: '',
        todos: [],
        showTodos: false
    },
    methods: {
        createTodo: function (){
            var todoText = this.todoText.trim();
            if (todoText) {
                this.todos.push({ title: todoText });
                this.todoText = '';
            }
        },
        clearTodo: function () {
            this.todoText = '';
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }
    }
})
