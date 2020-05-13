import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MealsRoutingModule } from '../meals/meals-routing.module';
import { CocktailRoutingModule } from '../cocktails/cocktail-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MealsRoutingModule,
    CocktailRoutingModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class NavbarModule { }
