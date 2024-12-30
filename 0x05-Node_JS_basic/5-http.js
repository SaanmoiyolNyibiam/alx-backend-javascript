const http = require('http');
const fs = require('fs').promises;
/**
 * create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello ALX! in the page body
 * When the URL path is /students, it should display This is the list of our
 * students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
/*

*/

async function countStudents(filePath) {
  // this is a function that reads a reads a file asyncronously

  try {
    const fileOutput = await fs.readFile(filePath, 'utf8');
    const rows = fileOutput.split('\n');
    const records = rows.slice(1).filter((row) => row.trim() !== '').map((idxVal) => idxVal.split(','));

    const fieldList = {};
    records.forEach((value) => {
      const firstname = value[0];
      const course = value[value.length - 1];
      if (!fieldList[course]) {
        fieldList[course] = { count: 0, names: [] };
      }
      fieldList[course].count += 1;
      fieldList[course].names.push(firstname);
    });

    let output = `Number of students: ${records.length}\n`;
    for (const [course, data] of Object.entries(fieldList)) {
      output += `Number of students in ${course}: ${data.count}. List: ${data.names.join(', ')}\n`;
    }
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    try {
      const fileOutput = await countStudents(process.argv[2]);
      res.end(fileOutput);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
