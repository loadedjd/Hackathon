import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatTabsModule, MatButtonModule,
  MatInputModule, MatFormFieldModule } from '@angular/material';
import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { DataSummaryViewComponent } from './data-summary-view/data-summary-view.component';
import { BuildingSummaryViewComponent } from './building-summary-view/building-summary-view.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'buildings',
    component: BuildingsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildingsComponent,
    DataSummaryViewComponent,
    BuildingSummaryViewComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
