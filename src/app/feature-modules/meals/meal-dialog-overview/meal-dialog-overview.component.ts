import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMeal } from '../model/imeal';

@Component({
  selector: 'app-meal-dialog-overview',
  templateUrl: './meal-dialog-overview.component.html',
  styleUrls: ['./meal-dialog-overview.component.css']
})
export class MealDialogOverviewComponent implements OnInit {

  public placeholder = ' | Measure: ';
  constructor(public dialogRef: MatDialogRef<MealDialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMeal) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
