import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../model/ContactModule';
import {LocationModel} from '../model/LocationModel';
import {ClientMeetingModel} from '../model/ClientMeetingModel';
import {ClientMeetingService} from '../Service/client-meeting.service';

@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent implements OnInit {

  private clientMeetingService: ClientMeetingService;
  private contactModel: ContactModel = {id: 1, lastName: 'Sandor', firstName: 'Matyas', email: 'matyas@asd.hu' };
  private locationModel: LocationModel = {id: 1, address: 'Mora Ferenc', cityName: 'Szeged'};
  private clientMeetingModel: ClientMeetingModel ={id: 1, appointment:new Date(2022,1,  4).getTime(), contact: [this.contactModel], location: this.locationModel};

  constructor(clientMeetingService: ClientMeetingService) {
    this.clientMeetingService = clientMeetingService;
  }

  ngOnInit(): void {
  }

  public createClientMeeting(): void {

    this.clientMeetingService.createClientMeeting(this.clientMeetingModel)
      .subscribe();
  }

  public getAllClientMeeting(): void {
    this.clientMeetingService.getAllClientMeeting()
      .subscribe((meetings: any) => {
        console.log(meetings);
      });
  }

  public getClientMeeting(id: number): void{
    this.clientMeetingService.getClientMeeting(id).subscribe((meeting: any) =>
      console.log(meeting));
  }

  public updateClientMeeting(): void {


    this.clientMeetingService.updateClientMeeting(this.clientMeetingModel)
      .subscribe((meeting: any) => {
        console.log(meeting);
      });
  }

  public deleteClientMeeting(id: number): void {
    this.clientMeetingService.deleteClientMeeting(id).subscribe();
  }

}
