import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})

export class CocktailPageComponent implements OnInit {

  searchedValue: string;
  constructor() { }

  ngOnInit() {
  }

  getSearchedValue(searchedValue) {
    this.searchedValue = searchedValue;
  }
}


