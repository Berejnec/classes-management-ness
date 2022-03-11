import { Injectable } from '@angular/core';
import { classes } from 'src/app/data';
import {Class} from "./class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classesData: Class[] = classes;

  constructor() { }

  getClassesData() {
    return this.classesData;
  }

  getClassName(id: number) {
    return this.classesData[id].name;
  }

  getClassTeacher(id: number) {
    return this.classesData[id].teacher;
  }

  getClassMaxNoOfStudents(id: number) {
    return this.classesData[id].maxNoOfStudents;
  }

  getClassStudents(id: number) {
    return this.classesData[id].students;
  }
}
