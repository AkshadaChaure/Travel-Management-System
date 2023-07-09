import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerData} from '../model/CustomerData';
@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

desctype : any=[];
type: string;
  constructor(private router: Router  ) {
     this.customers = JSON.parse(localStorage.getItem("ass3"));
     for(let i=0;i<this.customers.length;i++)
       if(this.customers[i].opt == 1){
        this.desctype[i] = "Corporate";
        this.customers[i].type= "Corporate";
    }
    else{
this.desctype[i] = "Regular";
  this.customers[i].type= "Regular";
    }
// console.log(this.customers);
console.log(this.desctype);
  }

customers: any = [];

// if(this.customers.opt ==1){
//   this.opt_type="Regular";
// }
// else{
// this.opt_type="Corporate";
// }


onView(customer: CustomerData){
    console.log(customer);
this.router.navigate(['/view/'+customer.name]);
};

onEdit(customer: CustomerData){
    console.log(customer);
this.router.navigate(['/edit/'+customer.name]);
};

onDelete(customer: CustomerData){

// alert("Do you want to delete?");
if (confirm('Are you sure you want to delete?')) {
    // Save it!
    // console.log("yes");


this.customers = JSON.parse(localStorage.getItem("ass3"));
let J: number =0;
for(let i=0;i<this.customers.length;i++){
    if(this.customers[i].name == customer.name){
        J=i;
        break;
    }
}

this.customers.splice(J,1);
localStorage["ass3"]=JSON.stringify(this.customers);

} else {
    // console.log("no");
}

// console.log(J);
 };

  ngOnInit() {
  }

onAdd(){
  console.log("on add"  );
  this.router.navigate(['/add']);
}
}
