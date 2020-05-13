import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';

const routes: Routes = [
  {path: '', component: CocktailPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
