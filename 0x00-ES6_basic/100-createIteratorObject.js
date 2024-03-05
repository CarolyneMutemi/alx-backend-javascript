/* Iterating through report objects */

export default function createIteratorObject(report) {
  const iter = [];
  for (const value of Object.values(report.allEmployees)) {
    iter.push(...value);
  }
  return iter;
}
