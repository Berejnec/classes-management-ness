import { Component, OnInit } from '@angular/core';
import {ClassService} from "../class.service";
import {Class} from "../class.model";
import {classes} from "../data";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent implements OnInit {
  classData: Class[] = classes;
  maxNumber!: number[];
  searchText!: string;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.maxNumber = this.classService.getClassMaxNoOfStudents();
  }

  displayedColumns: string[] = ['name', 'teacher', 'class-occupancy', 'actions'];
  dataSource = new MatTableDataSource(this.classData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete() {

  }

  add() {

  }

}
