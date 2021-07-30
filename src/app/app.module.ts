import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing routermodule for routing
import{RouterModule, Routes} from '@angular/router';

//importing httpclientmodule for routing
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { SalesComponent } from './company/sales/sales.component';
import { TransportComponent } from './transport/transport.component';
import { TransdetailComponent } from './transdetail/transdetail.component';


const mypage:Routes=[
                      {path:"user",component:UserComponent},
                      {path:"company",component:CompanyComponent,
                           children:[
    
                                 {path:"sales",component:SalesComponent}
                           ]},
                      {path: "transport", component:TransportComponent}
  
  
                   ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    CompanyComponent,
    SalesComponent,
    TransportComponent,
    TransdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(mypage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
