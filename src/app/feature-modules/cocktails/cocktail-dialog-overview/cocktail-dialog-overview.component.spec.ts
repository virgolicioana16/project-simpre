import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDialogOverviewComponent } from './cocktail-dialog-overview.component';

describe('CocktailDialogOverviewComponent', () => {
  let component: CocktailDialogOverviewComponent;
  let fixture: ComponentFixture<CocktailDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
