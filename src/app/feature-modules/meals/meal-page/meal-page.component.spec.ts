import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPageComponent } from './meal-page.component';

describe('MealPageComponent', () => {
  let component: MealPageComponent;
  let fixture: ComponentFixture<MealPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
