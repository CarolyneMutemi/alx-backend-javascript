export default function getListStudentIds(array) {
  if (array instanceof Array === false) {
    return [];
  }

  const studentIds = array.map((student) => student.id);

  return studentIds;
}
