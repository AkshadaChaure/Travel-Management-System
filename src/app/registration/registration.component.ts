import { Component, OnInit } from '@angular/core';
import {CustomerData} from '../model/CustomerData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

cust_title : string = "Add customer";

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
      if(this.noofemp>10)
      this.total = this.charge*this.dist*0.85;
      else
      this.total = this.charge*this.dist*0.9;
this.desctype = "Corporate";
    }
    else{
      if(this.loyal  == true)
        this.total = this.charge*this.dist*0.95;
        else
        this.total = this.charge*this.dist;
    
this.desctype = "Regular";
    }
    if(this.total ==0){
 this.total = null; 
 console.log("t5otal null")    ;
    }
    // else{

    // }
    console.log(this.desctype);
    console.log(this.name+" "+this.desc+" "+this.mobno+" "+this.age+" "+this.pd+" "+this.charge+" "+this.noofemp+" "+this.dist+ " "+this.opt+" "+this.loyal);

this.custs =new CustomerData(this.name,this.desc,this.mobno,this.age,this.charge,this.pd,this.noofemp,this.dist, this.opt,this.loyal,this.total);

      this.custList.push(this.custs);
// console.log(this.custList);
//  localStorage["ishita"]=JSON.stringify(this.regList);
localStorage["ass3"]=JSON.stringify(this.custList);
        this.router.navigate(['/home']);
        // localStorage["undo"]=JSON.stringify("add");


  }


}
