import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDialogOverviewComponent } from './meal-dialog-overview.component';

describe('MealDialogOverviewComponent', () => {
  let component: MealDialogOverviewComponent;
  let fixture: ComponentFixture<MealDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
