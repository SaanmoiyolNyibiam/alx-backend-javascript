const fs = require('fs');
/*
Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an
error with the text Cannot load the database
If the database is available, it should log the following message
to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list
with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

function printList(inputList) {
  // prints a lisst in a specified format
  for (let idx = 0; idx < inputList.length; idx += 1) {
    if (idx === inputList.length - 1) {
      process.stdout.write(`${inputList[idx]}\n`);
    } else {
      process.stdout.write(`${inputList[idx]}, `);
    }
  }
}

module.exports = function countStudents(filePath) {
  // this is a function that reads a reads a file

  try {
    const fileOutput = fs.readFileSync(filePath, 'utf8');
    const rows = fileOutput.split('\n');
    const records = rows.slice(1).map((idxVal) => idxVal.split(','));

    const CSList = { course: 'CS', CScount: 0, fnames: [] };
    const SWEList = { course: 'SWE', SWEcount: 0, fnames: [] };
    const fieldList = { CSList, SWEList };

    for (const value of records) {
      if (value[value.length - 1] === 'CS') {
        CSList.CScount += 1;
        CSList.fnames.push(value[0]);
      } else if (value[value.length - 1] === 'SWE') {
        SWEList.SWEcount += 1;
        SWEList.fnames.push(value[0]);
      }
    }

    console.log(`Number of students: ${records.length}`);
    process.stdout.write(`Number of students in ${fieldList.CSList.course}: ${fieldList.CSList.CScount}. List: `);
    printList(fieldList.CSList.fnames);
    process.stdout.write(`Number of students in ${fieldList.SWEList.course}: ${fieldList.SWEList.SWEcount}. List: `);
    printList(fieldList.SWEList.fnames);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
