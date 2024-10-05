export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(courseName) {
    if (typeof courseName !== 'string') throw new TypeError('name must be a string');
    this._name = courseName;
  }

  get name() {
    return this._name;
  }

  set length(courseLength) {
    if (typeof courseLength !== 'number') throw new TypeError('length must be a Number');
    this._length = courseLength;
  }

  get length() {
    return this._length;
  }

  set students(courseStudents) {
    if (!(Array.isArray(courseStudents))) throw new TypeError('students must be a list');
    this._students = courseStudents;
  }

  get students() {
    return this._students;
  }
}
