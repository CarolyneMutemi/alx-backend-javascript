/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataArray = data.split('\n');
    const fields = {};
    let numberOfStudents = 0;
    for (const input of dataArray.slice(1)) {
      if (input.length > 0) {
        numberOfStudents += 1;
        const inputArray = input.split(',');
        const fieldName = inputArray[3];
        if (fieldName in fields) {
          fields[fieldName].push(inputArray[0]);
        } else {
          fields[fieldName] = [inputArray[0]];
        }
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
