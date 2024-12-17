// import readline module
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// use the question method from the readline module to manipulate stdin
readline.question(`Welcome to ALX, what is your name? ${'\n'}`, name => {
    console.log(`Your name is: ${name}`)
    readline.close();
})
