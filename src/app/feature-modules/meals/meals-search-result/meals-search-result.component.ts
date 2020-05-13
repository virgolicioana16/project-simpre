import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IMeal } from '../model/imeal';
import { IMealResponse } from '../model/imeal-response';
import { Observable } from 'rxjs';
import { MealsService } from 'src/app/core/services/meals.service';
import { MatDialog } from '@angular/material/dialog';
import { MealDialogOverviewComponent } from '../meal-dialog-overview/meal-dialog-overview.component';

@Component({
  selector: 'app-meals-search-result',
  templateUrl: './meals-search-result.component.html',
  styleUrls: ['./meals-search-result.component.css']
})
export class MealsSearchResultComponent implements OnInit, OnChanges {

  dataSource: MatTableDataSource<IMeal> = new MatTableDataSource();
  meals: IMeal[];
  meals$: Observable<IMealResponse>;
  displayedColumns: string[] = ['image', 'name', 'category', 'area', 'instructions'];
  isLoading = true;
  @Input() mealName: string;

  constructor(private service: MealsService,
              public dialog: MatDialog) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.getMeals(this.mealName);
  }

  ngOnInit(): void {
    this.getMeals(this.mealName);
  }

  getMeals(mealName: string){
    this.meals$ = this.service.searchMealByName(mealName);
    this.meals$.subscribe(
      data => {
        this.isLoading = false;
        this.dataSource.data = data.meals;
      }
    )
  }

  openOverviewDialog(row: IMeal) {
    console.log(row);
    const DialogRef = this.dialog.open(MealDialogOverviewComponent,{
      width: '700px',
      data: row
    });
  }

}
