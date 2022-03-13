import {Component, OnInit, ViewChild} from '@angular/core';
import {ClassService} from "../class.service";
import {Class} from "../class.model";
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent implements OnInit {

  @ViewChild(MatTable, {static: true}) table!: MatTable<any>;

  searchText!: string;

  constructor(private classService: ClassService, public dialog: MatDialog) { }

  classData: Class[] = this.classService.getData();

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'teacher', 'class-occupancy', 'actions'];
  dataSource = new MatTableDataSource(this.classData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateDataSource() {
    this.dataSource.data = this.classData;
    this.classService.updateData(this.classData);
  }

  delete(index: number) {
    this.classData.splice(index, 1);
    this.updateDataSource();
  }

  add(rowStudent: {name: string}, index: number) {
    this.classData[index].students.push(rowStudent);
    this.classService.updateData(this.classData);
  }

  openDialog(action: string, obj: any, index: number) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add') {
        this.add(result.data, index);
      }
    })
  }

}
