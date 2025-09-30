const chalk = require('chalk')

const nota = 5;

if (nota>= 7) {
    console.log(chalk.green('Parabéns você foi aprovado!'))
} else {
    console.log(chalk.hex('#DEADED')("Precisa estudar mais! "))
}