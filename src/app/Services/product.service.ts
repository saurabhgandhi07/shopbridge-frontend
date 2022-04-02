import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  public getProducts() {
    return this._httpClient.get('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products?isActive=true');
  }

  public addProduct(params) {
    return this._httpClient.post('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products', params)
      .pipe(
        switchMap(() => this._httpClient.get('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products?isActive=true'))
      );
  }

  public updateProduct(id: number, product: any) {
    return this._httpClient.put(`https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products/${id}`, product)
      .pipe(
        switchMap(() => this._httpClient.get('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products?isActive=true'))
      );
  }

  public deleteProduct(id) {
    return this._httpClient.put(`https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products/${id}`, { isActive: false })
      .pipe(
        switchMap(() => this._httpClient.get('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/products?isActive=true'))
      )
  }

}
