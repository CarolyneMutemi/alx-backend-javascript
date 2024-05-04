const { readFile } = require('fs').promises;

async function readDatabase(path) {
  try {
    const dataString = await readFile(path, { encoding: 'utf-8' });
    const dataStringArray = dataString.split('\n');
    const dataObject = {};
    for (const line of dataStringArray.slice(1)) {
      if (line.length > 0) {
        const lineArray = line.split(',');
        const firstName = lineArray[0];
        const field = lineArray[3];
        if (field in dataObject) {
          dataObject[field].push(firstName);
        } else {
          dataObject[field] = [firstName];
        }
      }
    }
    return dataObject;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = readDatabase;
