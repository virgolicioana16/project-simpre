import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { CocktailRoutingModule } from './cocktail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CocktailDialogOverviewComponent } from './cocktail-dialog-overview/cocktail-dialog-overview.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [CocktailPageComponent, SearchBarComponent, SearchResultComponent, CocktailDialogOverviewComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarModule
  ],
})
export class CocktailsModule { }
