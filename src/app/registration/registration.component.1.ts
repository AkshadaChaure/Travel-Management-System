import { Component, OnInit } from '@angular/core';
import {CustomerData} from '../model/CustomerData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) {

   // console.log("in register");
   }

private custs: CustomerData;
//  regList = new Array<VehicleData>();
// regList :  Array<VehicleData> = [];
custList = new Array<CustomerData>();

desctype: string ;

name: string = '';
desc: string = '';
mobno:number = null;
age: number = null;
charge: number = null;
pd: string = null;
noofemp: number = null;
dist: number = null;
// opt: string= '';
opt: number = null;
loyal: boolean = false;
total: number = null;

  ngOnInit() {
this.custList = JSON.parse(localStorage.getItem("ass3"));
  }

  onSubmit(){
    if(this.opt == 1){
this.desctype = "Corporate";
    }
    else{
this.desctype = "Regular";
    }
    console.log(this.desctype);
    console.log(this.name+" "+this.desc+" "+this.mobno+" "+this.age+" "+this.pd+" "+this.charge+" "+this.noofemp+" "+this.dist+ " "+this.opt+" "+this.loyal);

this.custs =new CustomerData(this.name,this.desc,this.mobno,this.age,this.charge,this.pd,this.noofemp,this.dist, this.opt,this.loyal);

      this.custList.push(this.custs);
// console.log(this.custList);
//  localStorage["ishita"]=JSON.stringify(this.regList);
localStorage["ass3"]=JSON.stringify(this.custList);
        this.router.navigate(['/home']);
        // localStorage["undo"]=JSON.stringify("add");

  }


}
