let TodoController = (function (TodoModel, TodoView) {

    function init() {
        TodoView.init();
        TodoModel.init();

        TodoView.bindTodoListClick(handleTodoItemClick);
        TodoView.bindTodoInputKeyDown(handleTodoInputKeyDown);

        TodoView.render(TodoModel.getTodos());
    }

    function handleTodoInputKeyDown(e) {
        if (e.key === "Enter") {
            TodoModel.addTodo(e.target.value);
            TodoView.render(TodoModel.getTodos());
            e.target.value = "";
        }
    }

    function handleTodoItemClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!e.target.matches("[rel^=js-todo-item-]")) {
            return;
        }

        const id = e.target.getAttribute("rel").replace(/\D/g, "");

        TodoModel.toggleTodo(Number(id));
        TodoView.render(TodoModel.getTodos());
    }


    let public_api = {
        init
    };

    return public_api;

})(TodoModel, TodoView);