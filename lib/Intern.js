const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email,) {
        super(name, id, email);
        this.school = "school";
        this.title = Intern;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;