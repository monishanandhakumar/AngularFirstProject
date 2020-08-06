import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/emploee.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

employee=new Employee();
  constructor() { }
  title="Binding";
  path='assets/images/mark.png';
  ngOnInit() {
  }
  onSubmit(emp,p:HTMLInputElement)
  {
    console.log(emp.Name,emp.Age,p.value);

  }

  people: any[] = [
    {
      "name": "Sai",
      "age": 29,
     "dept":"HR"
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "dept":"Finance"
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "dept":"HR"
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "dept":"Designer"
     
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "dept":"Designer"
  
    }
  ];


}
