import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
import { ThemesComponent } from './themes/themes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import { CountriesService } from './shared/countries.service';
import { ChildComponent } from './child/child.component';
import { MapsComponent } from './maps/maps.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RtfComponent } from './rtf/rtf.component'



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TableComponent,
    ThemesComponent,
    HomeComponent,
    ChildComponent,
    MapsComponent,
    ChartsComponent,
    BarchartComponent,
    DoughnutComponent,
    RadarchartComponent,
    PiechartComponent,
    RtfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    NgChartsModule,
    GoogleMapsModule
    
    
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
