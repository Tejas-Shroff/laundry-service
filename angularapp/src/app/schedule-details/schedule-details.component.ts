import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  

  constructor(private ss : ScheduleService) { }
  schedules:any[]=[];
  packageOptions:any[]=[];
  statusOptions:any[]=[];
  ngOnInit(): void {
    this.ss.getSchedules().subscribe(data => {
      this.schedules = data;
    })
    this.ss.getPackages().subscribe(data => {
      this.packageOptions = data;
    })
    this.ss.getStatuses().subscribe(data => {
      this.statusOptions= data;
    })
  }
  scheduleId : any
  statusId : any
  updateStatus(s : {id : number , statusId : number}) : void {

    this.ss.updateSchedule(s.id,s.statusId).subscribe(() =>{
      this.schedules =[]
    })
 
  }
  deleteSchedule(id : number) : void {

    this.ss.deleteSchedule(id).subscribe(() =>{
      this.schedules =[]
    })
 
  }

}
