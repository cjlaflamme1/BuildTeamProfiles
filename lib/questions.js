const initialQuestions = [
    {
        type: "input",
        message: "What is the manager's name? ",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the manager's Office Number?",
        name: "officeNumber",
    
    }
];

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
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        when: (answers) => answers.employeeRole === "Engineer"
    },
    {
        type: "input",
        message: "What is your School?",
        name: "school",
        when: (answers) => answers.employeeRole === "Intern"
    }
];


module.exports = {questions, initialQuestions};
