// import built-in modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import custom module
import { HomeComponent } from './components/home/home.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'schedule',
    component:ScheduleAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
