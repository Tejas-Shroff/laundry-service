import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  public  apiBaseUrl = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api'

  constructor(private httpclient : HttpClient) { }

  getSchedules() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiBaseUrl + '/laundry/schedules')
  }
  getPackages() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiBaseUrl + '/laundry/packages')
  }
  getStatuses() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiBaseUrl + '/laundry/status')
  }
  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  
  createSchedule(scheduleData : any) : Observable<any>{
    return this.httpclient.post<any>(this.apiBaseUrl + '/laundry/schedule/add',scheduleData,this.httpOptions)
  }
  updateSchedule(scheduleId : number , statusId : number) : Observable<any>{
    return this.httpclient.put<any>(this.apiBaseUrl + '/laundry/schedule/update/' + scheduleId + '/' + statusId , this.httpOptions)
  }
  deleteSchedule(scheduleId : number) : Observable<any>{
    return this.httpclient.delete<any>(this.apiBaseUrl +'/laundry/schedule/delete/' + scheduleId)
  }
  



}
