/* eslint-disable guard-for-in */
import process from 'process';
import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    await readDatabase(process.argv[2]).then((dataObject) => {
      let responseText = 'This is the list of our students\n';
      for (const field in dataObject) {
        const studentsInField = dataObject[field];
        responseText += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
      }
      res.status(200).send(responseText.trim());
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      await readDatabase(process.argv[2]).then((dataObject) => {
        const responseText = `List: ${dataObject[major].join(', ')}`;
        res.status(200).send(responseText);
      })
        .catch((error) => {
          res.status(500).send(error.message);
        });
    }
  }
}
