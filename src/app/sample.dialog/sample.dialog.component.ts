import { Component, OnInit } from '@angular/core';
import {  Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-sample.dialog',
  templateUrl: './sample.dialog.component.html',
  styleUrls: ['./sample.dialog.component.css']
})
export class SampleDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
    console.log('Dialog got', this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
