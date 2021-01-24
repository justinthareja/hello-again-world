function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
}

var deepJS = new Workshop("Keyl");

deepJS.ask = function (question) {
    this.__proto__.ask(question.toUpperCase());
}

deepJS.ask("is this infinite recursion?");
