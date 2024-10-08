export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const cityStudents = studentsList.filter((student) => student.location === city);

  const gradedStudents = cityStudents.map((student) => {
    const theStudent = student;
    const newGradeObj = newGrades.find((grade) => grade.studentId === theStudent.id);

    theStudent.grade = newGradeObj ? newGradeObj.grade : 'N/A';
    return theStudent;
  });

  return gradedStudents;
}
