function createStudent(id, firstName, location) {
  return { id, firstName, location };
}

export default function getListStudents() {
  const firstStudent = createStudent(1, 'Guillaume', 'San Francisco');
  const secondStudent = createStudent(2, 'James', 'Columbia');
  const thirdStudent = createStudent(5, 'Serena', 'San Francisco');

  return [firstStudent, secondStudent, thirdStudent];
}
