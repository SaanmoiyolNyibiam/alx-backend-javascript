// bypass eslint rules
/* eslint-disable */

// import modules
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// use the question method from the readline module to manipulate stdin
readline.question(`Welcome to ALX, what is your name? ${'\n'}`, name => {
    console.log(`Your name is: ${name}`)
    readline.close();
    process.on('exit', () => {
        console.log('This important software is now closing')
    });
})
