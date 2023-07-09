import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductAddPopupComponent } from './Components/product-add-popup/product-add-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerAddPopupComponent } from './Components/customer-add-popup/customer-add-popup.component';
import { HomeComponent } from './Components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddPopupComponent,
    CustomerListComponent,
    CustomerAddPopupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatTableModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
