const chalk = require('chalk')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let reply

const quiz = [
    { question: 'what is the color of the ocean? ', answer: 'blue' },
    { question: 'what language is spoken in japan? ', answer: 'japanese' },
    { question: 'what is the biggest mammal alive? ', answer: 'whale' },
]


const { question, answer } = quiz[parseInt(Math.random() * quiz.length)]
readline.question(question, userInput => {
    reply = userInput
    let isCorrect = reply !== 'exit' && reply === answer
    console.log(isCorrect ? chalk.green('correct answer') : chalk.red('wrong answer'))
    readline.close()
})
