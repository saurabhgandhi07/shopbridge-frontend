import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddPopupComponent } from './customer-add-popup.component';

describe('CustomerAddPopupComponent', () => {
  let component: CustomerAddPopupComponent;
  let fixture: ComponentFixture<CustomerAddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
