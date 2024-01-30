import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentingListPage } from './renting-list.page';

describe('RentingListPage', () => {
  let component: RentingListPage;
  let fixture: ComponentFixture<RentingListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RentingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
