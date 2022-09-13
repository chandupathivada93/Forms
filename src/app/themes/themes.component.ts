import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']

})
export class ThemesComponent implements OnInit {

  public myColor="blue"
  public msg:any
  

  onClick(){
   this.myColor="red"
   }



  constructor() { }

  ngOnInit(): void {

    {
      
    }
  }

}
function changeColor() {
  throw new Error('Function not implemented.');
}

