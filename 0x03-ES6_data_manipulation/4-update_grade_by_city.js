/* eslint-disable no-throw-literal */

function verifyArray(array, variableName) {
  if (array instanceof Array === false) {
    throw `TypeError: ${variableName} must be an array.`;
  }
}

function verifyString(string, variableName) {
  if (typeof (string) !== 'string') {
    throw `TypeError: ${variableName} must be a string`;
  }
}

function updateGrades(student, newGrades) {
  const updatedStudent = student;
  updatedStudent.grade = 'N/A';
  for (const grade of newGrades) {
    if (updatedStudent.id === grade.studentId) {
      updatedStudent.grade = grade.grade;
    }
  }

  return updatedStudent;
}

export default function updateStudentGradeByCity(array, city, newGrades) {
  verifyArray(array, 'Students list');
  verifyArray(newGrades, 'Grades');
  verifyString(city, 'City');

  const filteredList = array.filter((student) => student.location === city);
  const finalList = filteredList.map((student) => updateGrades(student, newGrades));

  return finalList;
}
