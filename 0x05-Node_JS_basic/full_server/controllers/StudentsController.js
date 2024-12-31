// eslint-disable-next-line import/extensions
import readDatabase from '../utils.js';
/**
 * defines a StudentsController class
 */
export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const outputData = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      for (const [course, data] of Object.entries(outputData)) {
        output += `Number of students in ${course}: ${data.count}. List: ${data.names.join(', ')}\n`;
      }
      response.status(200).set('Content-Type', 'text/plain').send(output.trim());
    } catch (error) {
      response.status(500).set('Content-Type', 'text/plain').send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const majorValue = request.params.major;
    try {
      const outputData = await readDatabase(process.argv[2]);
      if (!(majorValue in outputData)) {
        response.status(500).set('Content-Type', 'text/plain').send('Major parameter must be CS or SWE');
      }
      const output = `List: ${outputData[majorValue].names.join(', ')}`;
      response.status(200).set('Content-Type', 'text/plain').send(output);
    } catch (error) {
      response.status(500).set('Content-Type', 'text/plain').send('Cannot load the database');
    }
  }
}
