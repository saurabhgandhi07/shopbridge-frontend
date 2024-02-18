import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpClient: HttpClient) { }

  public getCustomers() {
    return this._httpClient.get('https://624312b8d126926d0c5b61bd.mockapi.io/api/v1/customers?isActive=true');
  }
}
