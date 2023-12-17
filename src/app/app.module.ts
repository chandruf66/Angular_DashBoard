import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardsComponent } from './cards/cards.component';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
// import { OwlModule } from 'ngx-owl-carousel';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';



// import { NgxOwlCarouselModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    TopBarComponent,
    CardsComponent,
    GridComponent,
    BarChartComponent,
    DetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
