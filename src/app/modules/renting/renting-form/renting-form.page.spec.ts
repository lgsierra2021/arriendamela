import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentingFormPage } from './renting-form.page';

describe('RentingFormPage', () => {
  let component: RentingFormPage;
  let fixture: ComponentFixture<RentingFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RentingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
