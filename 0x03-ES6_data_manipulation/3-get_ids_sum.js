export default function getStudentIdsSum(array) {
  if (array instanceof Array === false) {
    return 0;
  }

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);

  return sum;
}
