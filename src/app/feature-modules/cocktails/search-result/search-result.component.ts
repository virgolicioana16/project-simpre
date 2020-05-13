import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail } from '../model/ICocktail';
import { ApiResponse } from '../model/api-response';
import { MatTableDataSource } from '@angular/material/table';
import { CocktailsService } from 'src/app/core/services/cocktails.service';
import { MatDialog } from '@angular/material/dialog';
import { CocktailDialogOverviewComponent } from '../cocktail-dialog-overview/cocktail-dialog-overview.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges {

  dataSource: MatTableDataSource<ICocktail> = new MatTableDataSource();
  cocktails: ICocktail[];
  cocktails$: Observable<ApiResponse>;
  displayedColumns: string[] = ['image', 'name', 'category', 'instructions'];
  isLoading = true;
  @Input() cocktailName: string;

  constructor(private service: CocktailsService,
              public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCocktails(this.cocktailName);
  }

  ngOnInit() {
    this.getCocktails(this.cocktailName);
  }

  getCocktails(cocktailName: string) {
    this.cocktails$ = this.service.searchCocktailByName(cocktailName);
    this.cocktails$.subscribe(
      data => {
        this.isLoading = false;
        this.dataSource.data = data.drinks;
      }
    )
  }

  openOverviewDialog(row: ICocktail) {
    const DialogRef = this.dialog.open(CocktailDialogOverviewComponent,{
      width: '500px',
      data: row
    });
  }
}
