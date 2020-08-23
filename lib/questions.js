const questions = [
    {
        type: "input",
        message: "What is the employees name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employees ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employees email?",
        name: "email"
    },
    {
        type: "list",
        message: "What type of employee?",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        when: (answers) => answers.employeeRole === "Engineer"
    },
    {
        type: "input",
        message: "What is your Office Number?",
        name: "officeNumber",
        when: (answers) => answers.employeeRole === "Manager"
    },
    {
        type: "input",
        message: "What is your School?",
        name: "school",
        when: (answers) => answers.employeeRole === "Intern"
    },
    {
        type: "confirm", 
        message: "Would you like to add another employee?", 
        name: "newEntry",
        default: true
    } 
];

module.exports = questions;
