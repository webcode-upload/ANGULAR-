import { Component, OnInit } from '@angular/core';

// importing service and calling getCarEmpParent() to get car data.
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor(private obj:MyserviceService) { }

  ngOnInit() {
    this.fetchData();
  }

  myData:any[]=[];
  myData2:any[]=[];
  tdata:any[];

  fetchData(){
    this.obj.getEmpParent().subscribe(
      response=>{
        this.myData = response as string[];
        this.myData2 = this.myData
      })
  }

  getDetails(i:number){
    this.tdata = this.myData2[i];
  }
}
