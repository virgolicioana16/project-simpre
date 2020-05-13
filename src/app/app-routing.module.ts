import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './feature-modules/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path : 'cocktails', loadChildren: () => import('./feature-modules/cocktails/cocktails.module').then(m => m.CocktailsModule)},
  { path : 'meals', loadChildren: () => import('./feature-modules/meals/meals.module').then(m => m.MealsModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
