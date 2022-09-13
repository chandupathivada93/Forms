import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'admin';
  opened = false;
  fullName:any
  ngOnInit(): void {
    let fullName:any=localStorage.getItem('data')
    this.fullName=JSON.parse(fullName)

    
  }
  
  
}
