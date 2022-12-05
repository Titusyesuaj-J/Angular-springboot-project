import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DoctorTimeTableComponent } from './doctor-time-table/doctor-time-table.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';



const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'',redirectTo:'Userlogin',pathMatch:"full"},
  {path:'Feedback',component:FeedbackComponent},
  {path:'Routing',component:RoutingComponent},
  {path:'Aboutus',component:AboutusComponent},
  {path:'DoctorTimeTable',component:DoctorTimeTableComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Userlogin',component:UserloginComponent},
  {path:'Userregister',component:UserregisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
