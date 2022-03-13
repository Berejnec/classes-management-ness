import {Injectable} from '@angular/core';
import {Class} from "./class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes = [
    {
      name: "Graphics",
      teacher: "Kyle",
      maxNoOfStudents: 10,
      students: [{name: 'John'}, {name: 'Beth'}]
    },
    {
      name: "Mechatronics",
      teacher: "Allen",
      maxNoOfStudents: 15,
      students: [{name: "Stewie"}, {name: "Chris"}, {name: "Peter"}, {name: "Brian"}]
    },
    {
      name: "Robotics",
      teacher: "Anna",
      maxNoOfStudents: 5,
      students: [{name: "Andrew"}, {name: "Leia"}, {name: "John"}, {name: "Max"}]
    }
  ]

  constructor() { }

  getData() {
    return this.classes;
  }

  updateData(class1: Class[]) {
    const newClasses = [...this.classes];
    newClasses.push(...class1);
    this.classes = newClasses;
  }

  getClassMaxNoOfStudents(index: number) {
    return this.classes[index].maxNoOfStudents;
  }

  addStudent(student: {name: string}, index: number) {
    this.classes[index].students.push(student);
  }

}
