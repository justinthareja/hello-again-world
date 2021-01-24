let Header = (function (EVT) {
    let $header;
    let todoFilter = "all"; // both Header and Todo module rely on this, find a good way to share this value

    function init () {
        $header = document.querySelector("[rel=js-header]");
        $header.addEventListener("click", handleHeaderClick);

        render();
    }

    function handleHeaderClick(e) {
        e.preventDefault();

        if (e.target.matches("[rel=js-hide-completed]")) {
            EVT.emit("hide-completed-click");
        }

        if (e.target.matches("[rel=js-show-completed]")) {
            EVT.emit("show-completed-click");
        }
    }


    function render() {
        let template = `
            <h1>Todo</h1>
            <div class="controls" rel="js-controls">
                ${todoFilter !== "remaining" ? '<a rel="js-hide-completed" href="#">Hide Completed</a>' : ""}
                ${todoFilter === "remaining" ? '<a rel="js-show-completed" href="#">Show Completed</a>' : ""}
            </div>
        `

        $header.innerHTML = template;
    }

    EVT.on("init", init);

    EVT.on("hide-completed-click", () => {
        todoFilter = "remaining";
        render();
    });

    EVT.on("show-completed-click", () => {
        todoFilter = "all";
        render();
    });

    const public_api = {};

    return public_api;
})(EVT);
