import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'client';
  viewHome= true;
  viewSchedule= false;
  viewStatus= false;
  
  constructor() { }

  ngOnInit(): void {
  }
  getHome(){
    this.viewHome= true;
    this.viewSchedule = false;
    this.viewStatus=false;
    console.log('home clicked');
  }
  getSchedule(){
    this.viewHome= false;
    this.viewSchedule = true;
    this.viewStatus=false;
    console.log('schedule clicked');
    console.log(this.viewSchedule );
  }
  getStatus(){
    this.viewHome= false;
    this.viewSchedule = false;
    this.viewStatus=true;
    console.log('status clicked');
  }
 

}
