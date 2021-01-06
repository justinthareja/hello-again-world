let Todo = (function() {
    let $todoList, $todoInput;
    let todos = [{
        id: 0,
        text: "thing 1 from js",
        isCompleted: true
    }, {
        id: 1,
        text: "thing 2 from js",
        isCompleted: false
    }];
    

    function init() {
        $todoList = document.querySelector("[rel=js-todo-list]");
        $todoInput = document.querySelector("[rel=js-todo-input]");

        $todoList.addEventListener("click", handleTodoItemClick);
        $todoInput.addEventListener("keydown", handleTodoInputKeyDown)

        render();
    }

    function addTodo(text) {
        const newTodo = {
            id: todos.length,
            isCompleted: false,
            text,
        };
        
        todos.push(newTodo);
    }
    
    function removeTodo(id) {
        todos = todos.filter(function (todo) {
            return todo.id !== id;
        });
    }

    function toggleTodo(id) {
        todos = todos.map(function(todo) {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }

            return todo;
        });
    };
    
    function handleTodoInputKeyDown(e) {
        if (e.key === "Enter") {
            EVT.emit("submit-todo", e.target.value);
            e.target.value = "";
        }
    }

    function handleTodoItemClick(e) {
        if (!e.target.matches("[rel^=js-todo-item-]")) {
            return;
        }

        const id = e.target.getAttribute("rel").replace(/\D/g, "");

        EVT.emit("todo-clicked", Number(id));
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

    function render() {
        const todoElements = todos
            .map(renderTodo)
            .join("");
        
        $todoList.innerHTML = todoElements;
    }

    EVT.on("init", init);
    EVT.on("todo-clicked", function (id) {
        toggleTodo(id);
        render();
    });

    EVT.on("submit-todo", function (text) {
        addTodo(text);
        render();
    })

    return {

    };

})();