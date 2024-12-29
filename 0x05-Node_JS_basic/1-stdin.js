// write string to welcome user
process.stdout.write('Welcome to ALX, what is your name?\n');

// write the users name to stdout
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

// handle closing of the program
process.on('exit', () => {
  console.log('This important software is now closing');
});
