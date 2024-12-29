// write string to welcome user
process.stdout.write('Welcome to ALX, what is your name?\n');

if (process.stdin.isTTY) {
  // write the users name to stdout
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  // write the users name to stdout
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  // handle closing of the program
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
