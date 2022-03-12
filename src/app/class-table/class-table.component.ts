import { Component, OnInit } from '@angular/core';
import {ClassService} from "../class.service";
import {Class} from "../class.model";
import {classes} from "../data";

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent implements OnInit {
  classData: Class[] = classes;
  maxNumber!: number[];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.maxNumber = this.classService.getClassMaxNoOfStudents();
  }

  displayedColumns: string[] = ['name', 'teacher', 'class-occupancy'];

}
