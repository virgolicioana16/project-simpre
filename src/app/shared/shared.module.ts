import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialLibModule } from './angular-material-lib/angular-material-lib.module';
import { NavbarComponent } from '../feature-modules/navbar/navbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialLibModule,
  ],
  exports: [
    AngularMaterialLibModule
  ]
})
export class SharedModule { }
