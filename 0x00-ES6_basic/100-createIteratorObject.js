export default function createIteratorObject(report) {
  const iterator = [];

  for (const deptEmployees of Object.values(report.allEmployees)) {
    for (const employee of deptEmployees) {
      iterator.push(employee);
    }
  }
  return iterator;
}
