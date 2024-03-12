export default function getStudentsByLocation(array, city) {
  if (array instanceof Array === false) {
    return [];
  }

  const filteredArray = array.filter((student) => student.location === city);

  return filteredArray;
}
