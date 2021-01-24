// Classic/ Revealing module pattern

var workshop = (function Module(teacher) {
    var publicAPI = { ask };
    return publicAPI;

    // ***********

    function ask(question) {
        console.log(teacher, question);
    }
})("Kyle");

workshop.ask("Is this a module?");



// Factory Module
// Each have their own state

function WorkshopModule(teacher) {
    var publicAPI = { ask };
    return publicAPI;

    // ***********

    function ask(question) {
        console.log(teacher, question);
    }
}

var workshop = WorkshopModule("Kyle");

workshop.ask("Is this a factory?")
