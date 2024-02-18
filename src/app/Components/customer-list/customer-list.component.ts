import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public displayedColumns: string[] = ['editCustomer', 'customerName', 'customerEmail', 'customerAddress', 'customerDescription', 'deleteCustomer'];
  public customers: any;
  public customersCopy: any;
  @ViewChild('customerTable') customerTable: MatTable<any>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      (response) => {
        this.customers = response;
      });
  }

}
