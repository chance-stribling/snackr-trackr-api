import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackSummComponent } from './snack-summ.component';

describe('SnackSummComponent', () => {
  let component: SnackSummComponent;
  let fixture: ComponentFixture<SnackSummComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackSummComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackSummComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
