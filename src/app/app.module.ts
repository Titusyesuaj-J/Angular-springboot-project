import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
// import { MydetailsComponent } from './mydetails/mydetails.component';
import { RoutingComponent } from './routing/routing.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { DoctorTimeTableComponent } from './doctor-time-table/doctor-time-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';

const appRoutes: Routes=[
{path:'Register',component:RegisterComponent},
// {path:'MyDetails',component:MydetailsComponent},
{path:'Aboutus',component:AboutusComponent},
{path:'Routing',component:RoutingComponent},
{path:'Feedback',component:FeedbackComponent},
{path:'Home',component:HomeComponent},
{path:'DoctorTimeTable',component:DoctorTimeTableComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    // MydetailsComponent,
    RoutingComponent,
    FeedbackComponent,
    HomeComponent,
    DoctorTimeTableComponent,
    AboutusComponent,
    LoginnavbarComponent,
    UserloginComponent,
    UserregisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
