// import built-in modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import custom module
import { AppointmentSchema } from '../modals/appointmentSchema';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private API_URL_USERS = 'http://localhost:3000/user';
  private API_URL_ADMIN = 'http://localhost:3000/admin';

  constructor( private http: HttpClient) { }

  // getting all appointments
  // getAllAppointnments(): Observable<AppointmentSchema>{
  //   return this.http.get<AppointmentSchema>(this.API_URL_USERS)
  //         .map(res => res.json());

  // }
  getAllAppointnments(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': this.authService.token
    });
    return this.http.get(this.API_URL_USERS, { headers: headers })
            .pipe(map(res => res));
  }

  // request appointment
  requestAppointment(appointment:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': this.authService.token
    });
    return this.http.post(`${this.API_URL_USERS}/appointment`,appointment,{ headers: headers }) 
          .pipe(map(res => res));
  }

   // update Appointment
   updateUserAppointment(id:String, data:Object){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': this.authService.token
    });
    return this.http.patch(`${this.API_URL_USERS}/${id}`, data, { headers: headers })
      .pipe(map(res => res));
  }

  // delete appointment
  cancelAppointment(id:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': this.authService.token
    });
    return this.http.delete(`${this.API_URL_USERS}/appointment/${id}`,{ headers: headers })
    .pipe(map(res => res));
  }
}
