import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']



})
export class ChildComponent implements OnInit {


  @Output() public childInfo = new EventEmitter();
  public myStyle1={backgroundColor:"blue"}
  public myStyle2={backgroundColor:"red"}
  public myStyle3={backgroundColor:"green"}
  public myStyle4={backgroundColor:"brown"}

  public myStyle5={color:"white"}
  public myStyle6={color:"yellow"}
  public myStyle7={color:"red"}
  public myStyle8={color:"aqua"}

  
  bgcolorBlue(){
    this.childInfo.emit(this.myStyle1);
  }
  bgcolorRed(){
    this.childInfo.emit(this.myStyle2);
  }
  bgcolorGreen(){
    this.childInfo.emit(this.myStyle3);
  }
  bgcolorBrown(){
    this.childInfo.emit(this.myStyle4);
  }
  colorWhite(){
    this.childInfo.emit(this.myStyle5);
  }
  colorYellow(){
    this.childInfo.emit(this.myStyle6);
  }
  colorRed(){
    this.childInfo.emit(this.myStyle7);
  }
  colorAqua(){
    this.childInfo.emit(this.myStyle8);
  }
  

  


  constructor() { }

  ngOnInit(): void {
  }

  

}
