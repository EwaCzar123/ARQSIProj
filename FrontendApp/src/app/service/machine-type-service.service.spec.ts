import { TestBed, async } from '@angular/core/testing';

import { MachineTypeServiceService } from './machine-type-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { ManageComponent } from '../manage/manage/manage.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MachineOverviewComponent } from '../manage/machine-overview/machine-overview.component';
import { MachineDetailComponent } from '../manage/machine-detail/machine-detail.component';
import { MachineTypeOverviewComponent } from '../manage/machine-type-overview/machine-type-overview.component';
import { OperationOverviewComponent } from '../manage/operation-overview/operation-overview.component';
import { ProductOverviewComponent } from '../manage/product-overview/product-overview.component';
import { OperationDetailComponent } from '../manage/operation-detail/operation-detail.component';
import { ProductDetailComponent } from '../manage/product-detail/product-detail.component';
import { MachineTypeDetailComponent } from '../manage/machine-type-detail/machine-type-detail.component';

describe('MachineTypeServiceService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
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
    ReactiveFormsModule,
    MatIconModule,
    HttpClientTestingModule
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
    MachineTypeDetailComponent,
      ]
    }).compileComponents();
  }));


  it('should be created', () => {
    const service: MachineTypeServiceService = TestBed.get(MachineTypeServiceService);
    expect(service).toBeTruthy();
  });

  

});
