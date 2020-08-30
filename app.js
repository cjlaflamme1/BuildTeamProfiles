const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { questions, initialQuestions } = require('./lib/questions');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



const render = require("./lib/htmlRenderer");
const employeeList = [];
const employeeRender = async () => {
    if (employeeList.length === 0) {
        await inquirer.prompt(initialQuestions).then(({ name, id, email, officeNumber}) => {
            employeeList.push(new Manager(name, id, email, officeNumber));
        })
        addAnotherEmployee();
    } else if (employeeList.length > 0) {
        await inquirer.prompt(questions).then(({ name, id, email, employeeRole, github, school }) => {
            switch (employeeRole) {
                case "Engineer":
                    employeeList.push(new Engineer(name, id, email, github));
                    break;
                case "Intern":
                    employeeList.push(new Intern(name, id, email, school));
                    break;
            }
        })
        addAnotherEmployee();
    }
};

const addAnotherEmployee = () => {
    inquirer.prompt({
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "newEntry",
        default: true
    }).then(val => {
        if (val.newEntry) {
            employeeRender();
        } else {
            fs.writeFile(outputPath, render(employeeList), (err) => {
                if (err) throw err;
                console.log('The html page has been rendered!');
            })
        }
    })
};

employeeRender();
