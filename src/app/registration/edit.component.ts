import { Component, OnInit } from '@angular/core';
import {CustomerData} from '../model/CustomerData';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class EditComponent implements OnInit {
  cust_title : string = "Edit customer";
  // actionFlag: any;
actionFlag: boolean;
  constructor(private acroute: ActivatedRoute,private router: Router) {
   // console.log("in register");
   }
cust1 : CustomerData ;

private custs: CustomerData;
//  regList = new Array<VehicleData>();
// regList :  Array<VehicleData> = [];
custList = new Array<CustomerData>();

name: string = '';
desc: string = '';
mobno:number = null;
age: number = null;
charge: number = null;
pd: string = null;
noofemp: number = null;
dist: number = null;
opt: number= null;
loyal: boolean = false;
total: number = null;

customers: any = [];
J: number =0;
  ngOnInit() {
this.cust1 = this.acroute.snapshot.params['name'];
console.log(this.cust1);

this.customers = JSON.parse(localStorage.getItem("ass3"));

for(let i=0;i<this.customers.length;i++){
    if(this.customers[i].name == this.cust1){
        this.J=i;
        break;
    }
}
console.log(this.J);
// this.cust2 = this.customers[J];
// console.log(this.cust2);
this.name=this.customers[this.J].name;
this.desc= this.customers[this.J].desc;
this.mobno = this.customers[this.J].mobno;
this.noofemp = this.customers[this.J].noofemp;
this.age = this.customers[this.J].age;
this.charge= this.customers[this.J].charge;
this.pd= this.customers[this.J].pd;
this.dist = this.customers[this.J].dist;
this.opt= this.customers[this.J].opt;
this.loyal= this.customers[this.J].loyal;
  if(this.opt == 1){
      if(this.noofemp>10)
      this.total = this.charge*this.dist*0.85;
      else
      this.total = this.charge*this.dist*0.9;
    }
    else{
      if(this.loyal  == true)
        this.total = this.charge*this.dist*0.95;
        else
        this.total = this.charge*this.dist;
    }


  }

  onSubmit(){

// console.log(this.actionFlag);
//     this.actionFlag !=this.actionFlag;
//     console.log(this.actionFlag);

    // console.log(this.name+" "+this.desc+" "+this.mobno+" "+this.age+" "+this.pd+" "+this.charge+" "+this.noofemp+" "+this.dist+ " "+this.opt+" "+this.loyal);

this.custList = JSON.parse(localStorage.getItem("ass3"));

this.custs =new CustomerData(this.name,this.desc,this.mobno,this.age,this.charge,this.pd,this.noofemp,this.dist, this.opt,this.loyal,this.total);


this.custList.splice(this.J,1);

      this.custList.push(this.custs);
// console.log(this.custList);
//  localStorage["ishita"]=JSON.stringify(this.regList);
localStorage["ass3"]=JSON.stringify(this.custList);
        this.router.navigate(['/home']);
        // localStorage["undo"]=JSON.stringify("add");

  }


}
