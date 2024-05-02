/* eslint-disable guard-for-in */
import process from 'process';
import readDatabase from '../utils';

if (process.argv.length !== 3) {
  console.log('Please pass in the database file path.');
  process.exit(1);
}

const filePath = process.argv[2];

export default class StudentsController {
  static async getAllStudents(req, res) {
    await readDatabase(filePath).then((dataObject) => {
      let responseText = 'This is the list of our students\n';
      for (const field in dataObject) {
        const studentsInField = dataObject[field];
        responseText += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
      }
      res.send(responseText.trim());
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      await readDatabase(filePath).then((dataObject) => {
        const responseText = `List: ${dataObject[major].join(', ')}`;
        res.send(responseText);
      })
        .catch((error) => {
          res.status(500).send(error.message);
        });
    }
  }
}
