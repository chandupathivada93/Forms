import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../shared/countries.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor(private _CountriesService: CountriesService) { }

  displayedColumns: string[] = ['Name', 'Capital', 'Region', 'Population', 'flag'];
  dataSource = CountriesService;

  public firstcomments: any;

  printThisPages(){
    window.print();
  }

  ngOnInit(): void {

    this._CountriesService.getCountries().subscribe(data => { this.firstcomments = data; });

  }

}
function html2canvas(nativeElement: HTMLImageElement) {
  throw new Error('Function not implemented.');
}

