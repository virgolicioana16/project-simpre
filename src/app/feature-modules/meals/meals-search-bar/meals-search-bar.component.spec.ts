import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsSearchBarComponent } from './meals-search-bar.component';

describe('MealsSearchBarComponent', () => {
  let component: MealsSearchBarComponent;
  let fixture: ComponentFixture<MealsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
