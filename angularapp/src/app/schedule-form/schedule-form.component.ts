import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  scheduleForm = this.fb.group({
    fullName: [''],
    mobileNumber: [''],
    email: [''],
    address:  [''],
    area: [''],
    pincode:  [''],
    pickupDay: [''],
    pickupTimeSlot:  [''],
    packageId:  ['']

  });



  constructor(private fb : FormBuilder , private ss : ScheduleService) { }

  ngOnInit(): void {

   
  }
  onSubmit() {
    // if(this.scheduleForm.valid) {

    // }

  }

}
