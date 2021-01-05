let Todo = (function() {
    let $todoList;
    let todos = [{
        id: 1,
        text: "thing 1 from js",
        isCompleted: false
    }, {
        id: 2,
        text: "thing 2 from js",
        isCompleted: false
    }];
    

    function init() {
        $todoList = document.querySelector("[rel=js-todo-list]");
        
        $todoList.addEventListener("click", handleTodoItemClick);

        EVT.on("todo-clicked", function(id) {
            toggleTodo(id);
            render();
        });

        render();
    }


    function toggleTodo(id) {
        todos = todos.map(function(todo) {
            if (todo.id === Number(id)) {
                todo.isCompleted = !todo.isCompleted;
            }

            return todo;
        });

        return todos;
    };

    function handleTodoItemClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!e.target.matches("[rel^=js-todo-item-]")) {
            return;
        }

        const id = e.target.getAttribute("rel").replace(/\D/g, "");

        EVT.emit("todo-clicked", id);
    }

    // Takes a todo model and returns the corresponding HTML element
    function renderTodo(todo) {
        const { id, text, isCompleted } = todo;
        
        const $todoItem = document.createElement("li");
        const $todoInput = document.createElement("input");
        const $todoLabel = document.createElement("label");

        $todoInput.setAttribute("type", "checkbox");
        $todoInput.setAttribute("id", `todo-item-${id}`);
        $todoInput.setAttribute("rel", `js-todo-item-${id}`);
        $todoInput.checked = isCompleted;

        $todoLabel.setAttribute("for", `todo-item-${id}`);
        $todoLabel.append(text);

        $todoItem.setAttribute("class", "todo-item");
        $todoItem.appendChild($todoInput);
        $todoItem.appendChild($todoLabel);

        return $todoItem;
    }

    function render() {
        $todoList.innerHTML = "";

        todos.forEach(function(todo) {
            $todoList.appendChild(renderTodo(todo));
        });
    }

    EVT.on("init", init);

    return {

    };

})();