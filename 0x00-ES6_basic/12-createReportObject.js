export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.entries(this.allEmployees).length;
    },
  };

  return newObject;
}
