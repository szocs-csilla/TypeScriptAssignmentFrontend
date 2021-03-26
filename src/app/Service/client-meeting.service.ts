import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ClientMeetingModel} from '../model/ClientMeetingModel';

@Injectable({
  providedIn: 'root'
})
export class ClientMeetingService {

  constructor(private http: HttpClient) { }

  getAllClientMeeting(): Observable<ClientMeetingModel> {
    return this.http.get<ClientMeetingModel>('/client_meeting');
  }

  getClientMeeting(id: number): Observable<ClientMeetingModel>{
    return  this.http.get<ClientMeetingModel>('/client+meeting?id=' + id);
  }

  createClientMeeting(testClientMeeting: ClientMeetingModel): Observable<any> {
    return this.http.post('/client_meeting', testClientMeeting);
  }

  updateClientMeeting(updateClientMeeting: ClientMeetingModel): Observable<any>{
    return this.http.put('/client_meeting', updateClientMeeting );
  }

  deleteClientMeeting(id: number): Observable<any>  {
    return this.http.delete('/client_meeting?id=' + id);
  }

}
