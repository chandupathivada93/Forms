import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {

  title = 'mdf';
 
  // contactForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   department: new FormControl()
  // })


  
  // contactForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
  //   email: new FormControl(),
  //   mobile: new  FormControl(),
  //   city: new  FormControl(),
  //   gender: new FormControl(),
  //   hireDate: new FormControl(),
  //   isPermanent: new FormControl(),
  //   department: new FormControl()
  // })
  

  constructor() { }

  form: FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('',[Validators.required, Validators.minLength(10)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl('0'),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(false),
    }
  ) 

  departments = [
    {id: 1, name: 'angular'},
    {id: 1, name: 'React'},
    {id: 1, name: 'Node'},
    {id: 1, name: 'Bootstrap'},
    {id: 1, name: 'Firebase'}
  ]

  ngOnInit(): void {
    
    console.log("hii")
  }
  
  onSubmit() {
    console.log(this.form.value);
  }

}
