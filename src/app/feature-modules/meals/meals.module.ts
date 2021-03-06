import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPageComponent } from './meal-page/meal-page.component';
import { MealsRoutingModule } from './meals-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MealsSearchBarComponent } from './meals-search-bar/meals-search-bar.component';
import { MealsSearchResultComponent } from './meals-search-result/meals-search-result.component';
import { MealDialogOverviewComponent } from './meal-dialog-overview/meal-dialog-overview.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [MealPageComponent, MealsSearchBarComponent, MealsSearchResultComponent, MealDialogOverviewComponent],
  imports: [
    CommonModule,
    MealsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarModule
  ]
})
export class MealsModule { }
