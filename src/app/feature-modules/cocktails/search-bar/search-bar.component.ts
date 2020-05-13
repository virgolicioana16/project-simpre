import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

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
