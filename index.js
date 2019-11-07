const readline = require('readline-sync');

let name = readline.question('Who are you?')
let height = readline.questionInt('How tall are you?')
console.log(`Pleased to meet you ${name}`)

if (height > 7) {
    console.log('Do basketball')
} else {
    console.log(`don't play basketball`)
}
