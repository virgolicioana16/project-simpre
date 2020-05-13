import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meals-search-bar',
  templateUrl: './meals-search-bar.component.html',
  styleUrls: ['./meals-search-bar.component.css']
})
export class MealsSearchBarComponent implements OnInit {

  public loading: boolean;
  value: string;
  @Output() searchedValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  copySearchedValue(value: string) {
    this.searchedValue.emit(value);
  }

}
