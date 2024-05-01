/* eslint-disable guard-for-in */
const express = require('express');
const { readFile } = require('fs').promises;
const process = require('process');

const app = express();
if (process.argv.length < 3) {
  console.log('Usage: node 5-http <file path>');
  process.exit(1);
}
const filePath = process.argv[2];

async function readDatabase(path) {
  try {
    const dataString = await readFile(path, { encoding: 'utf-8' });
    const dataStringArray = dataString.split('\n');
    let numberOfStudents = 0;
    const fields = {};
    for (const line of dataStringArray.slice(1)) {
      if (line.length > 0) {
        const columns = line.split(',');
        const field = columns[3];
        const firstName = columns[0];
        if (field in fields) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
        numberOfStudents += 1;
      }
    }
    let displayMessage = `Number of students: ${numberOfStudents}\n`;
    for (const fieldName in fields) {
      displayMessage += `Number of students in ${fieldName}: ${fields[fieldName].length}. List: ${fields[fieldName].join(', ')}\n`;
    }
    return displayMessage;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', (req, res) => {
  readDatabase(filePath).then((text) => {
    res.send(`This is the list of our students\n${text.trim()}`);
  })
    .catch((error) => res.send(`This is the list of our students\n${error.message}`));
});

app.listen(1245);

module.exports = app;
