let EVT = new EventEmitter2();

document.addEventListener("DOMContentLoaded", function(event) {
    EVT.emit("init");
});