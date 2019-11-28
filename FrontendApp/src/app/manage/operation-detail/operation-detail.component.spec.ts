import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailComponent } from './operation-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from 'src/app/app.component';
import { ManageComponent } from '../manage/manage.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { MachineOverviewComponent } from '../machine-overview/machine-overview.component';
import { MachineDetailComponent } from '../machine-detail/machine-detail.component';
import { MachineTypeOverviewComponent } from '../machine-type-overview/machine-type-overview.component';
import { OperationOverviewComponent } from '../operation-overview/operation-overview.component';
import { ProductOverviewComponent } from '../product-overview/product-overview.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MachineTypeDetailComponent } from '../machine-type-detail/machine-type-detail.component';

describe('OperationDetailComponent', () => {
  let component: OperationDetailComponent;
  let fixture: ComponentFixture<OperationDetailComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
