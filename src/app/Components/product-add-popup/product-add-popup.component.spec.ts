import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddPopupComponent } from './product-add-popup.component';

describe('ProductAddPopupComponent', () => {
  let component: ProductAddPopupComponent;
  let fixture: ComponentFixture<ProductAddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
