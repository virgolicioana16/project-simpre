import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MealPageComponent } from './meal-page/meal-page.component';

const routes: Routes = [
  {path: '', component: MealPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
