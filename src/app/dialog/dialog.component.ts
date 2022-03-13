import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  action!: string;
  localData: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: {name: string}) {
    this.localData = {...data};
    this.action = this.localData.action;
  }

  addStudentAction() {
    this.dialogRef.close({
      event: this.action,
      data: this.localData
    });
  }

  closeDialog() {
    this.dialogRef.close({
      event: 'Cancel'
    });
  }

  ngOnInit(): void {
  }

}
