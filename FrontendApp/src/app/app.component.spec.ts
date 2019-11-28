import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
import { MatIconModule} from "@angular/material/icon"
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientTestingModule } from "@angular/common/http/testing"


describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontendApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontendApp');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontendApp!');
  // });
});
