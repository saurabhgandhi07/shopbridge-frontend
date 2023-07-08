import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-add-popup',
  templateUrl: './product-add-popup.component.html',
  styleUrls: ['./product-add-popup.component.css']
})
export class ProductAddPopupComponent implements OnInit {

  public product: Product;
  public updatedProduct: Product;
  public isValueModified: boolean;

  constructor(
    private _productService: ProductService,
    public dialogRef: MatDialogRef<ProductAddPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.isValueModified = false;
    this.product = this.data;
    if (this.product) {
      this.updatedProduct = JSON.parse(JSON.stringify(this.product));
    }
    if (this.product == undefined) {
      this.product = new Product();
      this.product.productName = "";
      this.product.productDescription = "";
      this.product.productPrice = null;
      this.product.isActive = true;
      this.updatedProduct = this.product;
    }
  }

  updateValue(record: Product, key: string | number, value: any) {
    this.isValueModified = true;
    record[key] = value === undefined ? null : value;
    this.updatedProduct = record;
    console.log(this.product, this.updatedProduct);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.updatedProduct.productId) {
      if (!this.updatedProduct.productName || !this.updatedProduct.productPrice) {
        window.alert('Product Name and Product Price are required !');
        return;
      }
      let productId = this.updatedProduct.productId;
      let data = this.updatedProduct;
      this._productService.updateProduct(productId, data).subscribe(
        (response) => { this.data = response; window.alert('Product Updated Successfully'); this.dialogRef.close(this.data); }
      );
    } else {
      if (!this.updatedProduct.productName || !this.updatedProduct.productPrice) {
        window.alert('Product Name and Product Price are required !');
        return;
      }
      this._productService.addProduct(this.updatedProduct).subscribe(
        (response: any) => { this.data = response; window.alert('Product Added Successfully'); this.dialogRef.close(this.data); }
      );
    }
  }

}
