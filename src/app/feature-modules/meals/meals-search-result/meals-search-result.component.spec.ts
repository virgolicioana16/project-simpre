import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsSearchResultComponent } from './meals-search-result.component';

describe('MealsSearchResultComponent', () => {
  let component: MealsSearchResultComponent;
  let fixture: ComponentFixture<MealsSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
