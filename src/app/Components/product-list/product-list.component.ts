import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatTable } from '@angular/material/table';
import { ProductService } from 'src/app/Services/product.service';
import { ProductAddPopupComponent } from '../product-add-popup/product-add-popup.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
  public displayedColumns: string[] = ['editProduct', 'productName', 'productDescription', 'productPrice', 'deleteProduct'];
  public products: any;
  public ProductsCopy: any;
  @ViewChild('productTable') productTable: MatTable<any>;

  constructor(public dialog: MatDialog, private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (response) => { this.products = response; this.ProductsCopy = JSON.parse(JSON.stringify(this.products)); }
    );
  }

  public openAddProduct(product?: any) {
    const dialogRef = this.dialog.open(ProductAddPopupComponent, {
      disableClose: true,
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => this.ngOnInit(), 1000);
      } else {
        this.products = this.ProductsCopy;
      }
    });
  }

  public deleteProduct(product?: any) {
    const isDelete = window.confirm('Are you sure you want to delete ' + product.productName + '?');
    if (isDelete == true) {
      this._productService.deleteProduct(product.productId).subscribe(
        (result) => { setTimeout(() => this.ngOnInit(), 1000); window.alert('Successfully Deleted'); }
      )
    };
  }

}
