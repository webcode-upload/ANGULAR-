import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  details:any[]=[
    {"id":1,"name":"akshay","number":9898765432,"email":"akshay@gmail.com"},
    {"id":29,"name":"birsa","number":9712699724,"email":"birsa@gmail.com"},
    {"id":9,"name":"Ervin Howell","number":9984794724,"email":"arvin@gmail.com"},
    {"id":12,"name":"Leanne Graham","number":9290234724,"email":"grahm@gmail.com"}
  ];

save(name:string,number:number,email:string){
let newdetails = {"name":name,"number":number,"email":email};
this.details = this.details.concat(newdetails);
}



}


 

