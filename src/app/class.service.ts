import {Injectable} from '@angular/core';
import {Class} from "./class.model";
import {classes} from "./data";


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

  getClassOccupancy(maxNumber: number, studentsEnrolled: number) {
    return (studentsEnrolled / maxNumber * 100);
  }

}
