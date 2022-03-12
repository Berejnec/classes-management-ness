import {Injectable} from '@angular/core';
import {classes} from 'src/app/data';
import {Class} from "./class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classesData: Class[] = classes;

  constructor() { }

  getClassMaxNoOfStudents() {
    let maxNumber: number[] = [];
    this.classesData.forEach((obj, i) => {
       maxNumber[i] = obj.maxNoOfStudents;
    });
    return maxNumber;
  }

}
