import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-page',
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.css']
})
export class MealPageComponent implements OnInit {

  searchedValue: string;
  constructor() { }

  ngOnInit(): void {
  }

  getSearchedValue(searchedValue) {
    this.searchedValue = searchedValue;
  }
}
