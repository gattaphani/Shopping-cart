import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LightingComponent } from './lighting/lighting.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthService } from './login-auth.service';
import { LoginStatusService } from './login-status.service';


var myroutes:Routes=
[
  {
    path:"",component:OnlineShoppingComponent
  },
  {
    path:"electronics",component:ElectronicsComponent,canActivate:[LoginAuthService],
    children:
    [
      {
        path:"mobiles",component:MobilesComponent
      },
      {
        path:"laptops",component:LaptopsComponent
      }
      
    ]
  },
  {path:"appliances",component:AppliancesComponent,
   children:
[
  {
    path:"lightining",component:LightingComponent
  },
  {
    path:"furniture",component:FurnitureComponent
  }
]},
{path:"fashion",component:FashionComponent,
children:[
  {path:"men",component:MenComponent},
  {path:"women",component:WomenComponent}
]}
]

var myroutes2 = RouterModule.forRoot(myroutes)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OnlineShoppingComponent,
    AppliancesComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    LightingComponent,
    MobilesComponent,
    LaptopsComponent,
    MenComponent,
    WomenComponent,
    LoginComponent
  ],
  imports: [

BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    myroutes2
  ],
  providers: [LoginStatusService,LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
