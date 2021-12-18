// import built-in modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

// import custom module
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentSchema } from '../../modals/appointmentSchema';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  appointments: any;
  saveTerms: boolean = false;
  guides: boolean = false;
  pageOneApplicationForm = false;
  pageTwoApplicationForm = false;
  pageThreeApplicationForm = false;
  startPageOne = false;
  selectedSite: any;
  selectedCity: any;
  selectedDeliverySite: any;
  selectedDate: any;
  selectedTime: any;
  appointmentDate: any;
  appointmentForm: any;

  // personal inputs
  firstName = new FormControl;
  fatherName = '';
  birthPlace = '';
  email = '';
  phone = '';
  martialStatus = '';
  passportPage = '';
  birthCertificate = '';

  constructor(private formBuilder: FormBuilder, private appointemnetService: AppointmentService) { }

  ngOnInit(): void {
    console.log('checkbox not clicked', this.saveTerms)
    if (!this.saveTerms) {
      this.guides = true;
    }
    this.appointmentDate = new Date();
    this.appointmentForm = this.formBuilder.group({
      appointmentDate: ''
    });

    this.getAllAppointnments();
  }

  isCheckboxChecked(value: boolean) {
    this.saveTerms = value;
    console.log('checkbox clicked', this.saveTerms)
  }

  requestAppointment() {
    if (this.saveTerms) {
      this.pageOneApplicationForm = true;
      this.guides = false;
      console.log('checked')
    }
    else {
      (<HTMLInputElement>document.getElementById("checkWarning")).innerHTML = "Please check this box if you want to proceed.";
      console.log('not checked')
    }
  }

  selectedSiteLocation() {
    console.log(this.selectedSite);
  }
  getSelectedCity() {
    console.log(this.selectedCity);
  }
  getSelectedDeliverySite() {
    console.log(this.selectedDeliverySite);
  }
  getSiteSection() {
    this.saveTerms = true;
    this.startPageOne = true;
    this.guides = false;
    this.pageOneApplicationForm = true;
    this.pageTwoApplicationForm = false;
    this.pageThreeApplicationForm = false;
  }
  getDateTimeSection() {
    this.saveTerms = true;
    this.startPageOne = false;
    this.guides = false;
    this.pageOneApplicationForm = false;
    this.pageTwoApplicationForm = true;
    this.pageThreeApplicationForm = false;
  }
  getPersonalSection() {
    this.saveTerms = true;
    this.startPageOne = false;
    this.guides = false;
    this.pageOneApplicationForm = false;
    this.pageTwoApplicationForm = false;
    this.pageThreeApplicationForm = true;

  }
  getNexForm() {
    if (this.selectedCity && this.selectedSite && this.selectedDeliverySite) {
      if (this.selectedDate == null || this.selectedTime == null) {
        this.getDateTimeSection();
      }
      else if (this.selectedDate && this.selectedTime) {
        this.getPersonalSection();
        console.log(this.selectedDate);
        console.log(this.selectedTime);
      }
    }
  }
  getPreviousForm() {

  }
  getAllInputs() {
    console.log("form Submitted", this.selectedSite, this.selectedDate, this.firstName, this.martialStatus, this.phone)
    this.appointments = {
      'site': this.selectedSite,
      'city': this.selectedCity,
      'deliverySite': this.getSelectedDeliverySite,
      'date': this.selectedDate,
      'time': this.selectedTime,
      'personalInfo': {
        'firstName': this.firstName,
        'fatherName': this.fatherName,
        'birthPlace': this.birthPlace,
        'email': this.email,
        'phone': this.phone,
        'martialStatus': this.martialStatus,
        'passportPage': this.passportPage,
        'birthCertificate': this.birthCertificate
      }
    }
    this.newRequestAppointment(this.appointments);
  }

  // presenting data to service
  // get appointments
  getAllAppointnments() {
    this.appointemnetService.getAllAppointnments()
      .subscribe((res) => {
        console.log('all appointment gained', res);
        this.appointments = res;
      });
  }

  // request appointments
  newRequestAppointment(appointments: any) {

    this.appointemnetService.requestAppointment(appointments)
      .subscribe((res) => {
        console.log('appointment requested successfully', res);
      });

  }
}
