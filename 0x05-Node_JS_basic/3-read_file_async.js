/* eslint-disable guard-for-in */
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const dataArray = data.split('\n');
    const fields = {};
    let numberOfStudents = 0;
    for (const entry of dataArray.slice(1)) {
      if (entry.length > 1) {
        const entryArray = entry.split(',');
        const field = entryArray[3];
        const firstName = entryArray[0];
        if (field in fields) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
        numberOfStudents += 1;
      }
    }

    console.log(`Number of students: ${numberOfStudents}`);
    for (const fieldName in fields) {
      console.log(`Number of students in ${fieldName}: ${fields[fieldName].length}. List: ${fields[fieldName].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
