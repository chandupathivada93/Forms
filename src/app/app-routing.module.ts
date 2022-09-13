import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartsComponent } from './charts/charts.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { RtfComponent } from './rtf/rtf.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {path:'test', component: TestComponent},
  {path:'table', component: TableComponent},
  {path:'themes', component: ThemesComponent},
  {path:'maps', component: MapsComponent},
  {path:'charts', component: ChartsComponent},
  {path:'barchart', component: BarchartComponent},
  {path:'doughnut',component:DoughnutComponent},
  {path:'radarchart', component:RadarchartComponent},
  {path:'piechart', component: PiechartComponent},
  // {path:'rtf', component: RtfComponent},
  {path:'home', component: HomeComponent},
  {path:'**', component: HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
