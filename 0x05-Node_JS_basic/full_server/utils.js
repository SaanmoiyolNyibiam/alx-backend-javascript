import { promises } from 'fs';
/**
 * Creates a function named readDatabase that accepts a file path as argument
 * and reads the database
 */

/**
   * Reads a database
   *
   * @param{string} filePath - path to the database to be read
   * @returns{object} - array of the firstname of stdents in the database
   * @throws{Error} - the database cannot be read
   */
export default async function readDatabase(filePath) {
  try {
    const fileOutput = await promises.readFile(filePath, 'utf8');
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
    return fieldList;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
