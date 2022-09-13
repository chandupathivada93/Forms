import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  
  constructor() { }
  
  form: FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
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
  }

  onSubmit() {
    console.log(this.form.value);
    localStorage.setItem("data",JSON.stringify(this.form.value.fullName));

    alert("Data saved")
    this.form.reset()
  }
  reset() {
    alert("Data Cleared")
    this.form.reset()
    localStorage.clear()

  }

}
