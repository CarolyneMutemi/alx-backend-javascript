/* Let's create a report object. */

export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      let total = 0;
      // eslint-disable-next-line
      for (const department in employeesList) {
        total += 1;
      }
      return total;
    },
  };

  return report;
}
