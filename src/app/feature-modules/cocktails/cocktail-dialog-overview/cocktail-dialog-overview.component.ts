import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICocktail } from '../model/ICocktail';

@Component({
  selector: 'app-cocktail-dialog-overview',
  templateUrl: './cocktail-dialog-overview.component.html',
  styleUrls: ['./cocktail-dialog-overview.component.css']
})
export class CocktailDialogOverviewComponent implements OnInit {

  public placeholder = ' | Measure: ';
  constructor(public dialogRef: MatDialogRef<CocktailDialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICocktail) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
