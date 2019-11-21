import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageComponent } from './manage/manage/manage.component';
import { Routes, RouterModule } from '@angular/router';

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
  declarations: [
    AppComponent,
    ManageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
