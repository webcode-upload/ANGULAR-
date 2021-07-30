import { Component, OnInit } from '@angular/core';
// import service
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.fetchData();
  }

  empData:any[]=[];
  fetchData(){
    this.myservice.getExtJson().subscribe(
      response=>{
        this.empData = response as string[];
      })
  }

}