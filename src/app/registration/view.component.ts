import { Component, OnInit } from '@angular/core';
import {CustomerData} from '../model/CustomerData';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class ViewComponent implements OnInit {
  cust_title : string = "View customer";
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
// opt: string= '';
opt: number = null;
loyal: boolean = false;

customers: any = [];

  ngOnInit() {
this.cust1 = this.acroute.snapshot.params['name'];
console.log(this.cust1);


this.customers = JSON.parse(localStorage.getItem("ass3"));
let J: number =0;
for(let i=0;i<this.customers.length;i++){
    if(this.customers[i].name == this.cust1){
        J=i;
        break;
    }
}
console.log(J);
// this.cust2 = this.customers[J];
// console.log(this.cust2);
this.name=this.customers[J].name;
this.desc= this.customers[J].desc;
this.mobno = this.customers[J].mobno;
this.noofemp = this.customers[J].noofemp;
this.age = this.customers[J].age;
this.charge= this.customers[J].charge;
this.pd= this.customers[J].pd;
this.dist = this.customers[J].dist;
this.opt= this.customers[J].opt;
this.loyal= this.customers[J].loyal;

  }

  onSubmit(){

console.log(this.actionFlag);
    this.actionFlag !=this.actionFlag;
    console.log(this.actionFlag);

    // console.log(this.name+" "+this.desc+" "+this.mobno+" "+this.age+" "+this.pd+" "+this.charge+" "+this.noofemp+" "+this.dist+ " "+this.opt+" "+this.loyal);

this.custs =new CustomerData(this.name,this.desc,this.mobno,this.age,this.charge,this.pd,this.noofemp,this.dist, this.opt,this.loyal);

      this.custList.push(this.custs);
// console.log(this.custList);
//  localStorage["ishita"]=JSON.stringify(this.regList);
localStorage["ass3"]=JSON.stringify(this.custList);
        this.router.navigate(['/home']);
        // localStorage["undo"]=JSON.stringify("add");

  }


}
