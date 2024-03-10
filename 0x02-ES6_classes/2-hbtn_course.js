export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse.verifyName(name);
    HolbertonCourse.verifyLength(length);
    HolbertonCourse.verifyStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    HolbertonCourse.verifyName(name);
    this._name = name;
  }

  set length(length) {
    HolbertonCourse.verifyLength(length);
    this._length = length;
  }

  set students(students) {
    HolbertonCourse.verifyStudents(students);
    this._students = students;
  }

  /* eslint-disable no-throw-literal */
  static verifyName(name) {
    if (typeof (name) !== 'string') {
      throw ('TypeError: Name must be a string');
    }
  }

  static verifyLength(length) {
    if (typeof (length) !== 'number') {
      throw ('TypeError: Length must be a string');
    }
  }

  static verifyStudents(students) {
    if (Array.isArray(students) === false) {
      throw ('TypeError: Students must be an array');
    }
  }
}
