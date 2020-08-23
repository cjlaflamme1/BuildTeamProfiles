const questions = require('./questions');

function employeeGenerator(questions) {
    return function (answers ) {
        return answers[questions];
    };
}


module.exports = employeeGenerator;