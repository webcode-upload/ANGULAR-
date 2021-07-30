import { Injectable } from '@angular/core';

// importing httpclient to fetch json data
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private obj: HttpClient) { }


  getExtJson(){
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.obj.get(url);
  }


  getEmpParent(){
    let url = "https://cybotrix.com/ios/car.json";
    return this.obj.get(url);
  }

 

}