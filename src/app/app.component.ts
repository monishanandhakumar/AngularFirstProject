import { Component } from '@angular/core';
import{Employee} from 'src/app/emploee.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstExample';

  name: string;
  age: number;
  numArray: number[];  //array
  strArray: Array<string>;  //array
  dynamicValue: any;
  IsTrue: boolean;
  tupleVal: [string, number, boolean];
  student: object;
  employee=new Employee();
  constructor() {

    this.name="Monisha";
    this.age = 52;
    this.numArray = [10, 11, 20];
    this.strArray = ["Saranya", "Kumar", "Nandha"];
    this.dynamicValue = 10000;
    this.IsTrue = false;
    this.tupleVal = ["Monisha", 32, true]; //tuple
    this.student = { name: "Monisha", age: "32", email: "a@b.com" }
    
  }
 

}

