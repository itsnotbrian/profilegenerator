const Employee = require("./Employee");

class Manager extends Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getGitHub() {
        return this.officeNumber;
    }
}
module.exports = Manager;