// import built-in modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// import custom module
import { HomeComponent } from './components/home/home.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { AppointmentService } from './services/appointment.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
