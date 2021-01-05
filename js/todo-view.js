let TodoView = (function () {
    let $todoList, $todoInput;

    function init () {
        $todoList = document.querySelector("[rel=js-todo-list]");
        $todoInput = document.querySelector("[rel=js-todo-input]");
    }

    function bindTodoListClick(callback) {
        $todoList.addEventListener("click", callback);
    }

    function bindTodoInputKeyDown(callback) {
        $todoInput.addEventListener("keydown", callback);
    }

    // Takes a todo model and returns the corresponding HTML element
    function renderTodo(todo) {
        const { id, text, isCompleted } = todo;

        return (`
            <li class="todo-item ${isCompleted && "completed"}">
                <input type="checkbox" id="todo-item-${id}" rel="js-todo-item-${id}" ${isCompleted && "checked"}>
                <label for="todo-item-${id}">${text}</label>
            </li>
        `);
    }

    function render(todos) {
        const todoElements = todos
            .map(renderTodo)
            .join("");

        $todoList.innerHTML = todoElements;
    }

    const public_api = {
        init,
        bindTodoListClick,
        bindTodoInputKeyDown,
        render
    };

    return public_api;
})();