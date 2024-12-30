const fs = require('fs').promises;
/*
Create a function named countStudents. It should accept a
path in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error
with the text Cannot load the database
If the database is available, it should log the following message
to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list
with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

module.exports = async function countStudents(filePath) {
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

    console.log(`Number of students: ${records.length}`);
    for (const [course, data] of Object.entries(fieldList)) {
      console.log(`Number of students in ${course}: ${data.count}. List: ${data.names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
