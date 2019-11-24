import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageComponent } from './manage/manage/manage.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MachineOverviewComponent } from './manage/machine-overview/machine-overview.component';
import { HttpClientModule } from "@angular/common/http";
import { MachineDetailComponent } from './manage/machine-detail/machine-detail.component';
import { MachineTypeOverviewComponent } from './manage/machine-type-overview/machine-type-overview.component';
import { OperationOverviewComponent } from './manage/operation-overview/operation-overview.component';
import { ProductOverviewComponent } from './manage/product-overview/product-overview.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OperationDetailComponent } from './manage/operation-detail/operation-detail.component';
import { ProductDetailComponent } from './manage/product-detail/product-detail.component';
import { MachineTypeDetailComponent } from './manage/machine-type-detail/machine-type-detail.component';


const appRoutes: Routes = [
  { 
    path: 'home', 
    component: ManageComponent
  },
  { 
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full' },
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ManageComponent,
    NavbarComponent,
    MachineOverviewComponent,
    MachineDetailComponent,
    MachineTypeOverviewComponent,
    OperationOverviewComponent,
    ProductOverviewComponent,
    OperationDetailComponent,
    ProductDetailComponent,
    MachineTypeDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
