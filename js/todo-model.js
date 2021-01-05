let TodoModel = (function() {

    let todos;

    function init() {
        todos = [{
            id: 0,
            text: "thing 1 from js",
            isCompleted: true
        }, {
            id: 1,
            text: "thing 2 from js",
            isCompleted: false
        }];
    }

    function addTodo(text) {
        const todo = {
            id: todos.length,
            isCompleted: false,
            text,
        };

        todos.push(todo);
    }


    function removeTodo(id) {
        todos = todos.filter(function (todo) {
            return todo.id !== id;
        });
    }

    function toggleTodo(id) {
        todos = todos.map(function (todo) {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }

            return todo;
        });
    }

    function getTodos() {
        return todos;
    }

    const public_api = {
        addTodo,
        getTodos,
        removeTodo,
        toggleTodo,
        init
    };

    return public_api;
})();
