export default function getStudentIdsSum(studentsList) {
  const idList = studentsList.map((studentsList) => studentsList.id);
  return idList.reduce((total, currentValue) => total + currentValue);
}
