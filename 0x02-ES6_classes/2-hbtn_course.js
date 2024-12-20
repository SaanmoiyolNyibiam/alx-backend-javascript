// this is a module that defines a HolbertonCourse class

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // sets the course name
  set name(courseName) {
    if (typeof courseName !== 'string') throw new TypeError('name must be a string');
    this._name = courseName;
  }

  // gets the course name
  get name() {
    return this._name;
  }

  // sets the course length
  set length(courseLength) {
    if (typeof courseLength !== 'number') throw new TypeError('length must be a Number');
    this._length = courseLength;
  }

  // gets the course length
  get length() {
    return this._length;
  }

  // sets the students for the course
  set students(courseStudents) {
    if (!(Array.isArray(courseStudents)) || !courseStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = courseStudents;
  }

  // gets the students for the course
  get students() {
    return this._students;
  }
}
