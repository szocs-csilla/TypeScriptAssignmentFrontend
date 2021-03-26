import {Component, OnInit} from '@angular/core';
import {ClientService} from '../Service/client.service';
import {ClientModel} from '../model/ClientModel';
import {ContactModel} from '../model/ContactModule';
import {LocationModel} from '../model/LocationModel';
import {ClientMeetingModel} from '../model/ClientMeetingModel';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private clientService: ClientService;

  private contactModel: ContactModel = {id: 1, lastName: 'Sandor', firstName: 'Matyas', email: 'matyas@asd.hu' };
  private locationModel: LocationModel = {id: 1, address: 'Mora Ferenc', cityName: 'Szeged'};
  private clientMeetingModel: ClientMeetingModel = {id: 1, appointment:new Date(2022,1,  4).getTime(), contact: [this.contactModel], location: this.locationModel};
  private clientModel: ClientModel = {clientName: 'Matyas', taxNumber: 123456456, id: 1, contact:[this.contactModel], location:[this.locationModel], clientMeeting:[this.clientMeetingModel] };


  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  ngOnInit(): void {

  }

  public createClient(): void {
    this.clientService.createClient(this.clientModel)
      .subscribe();
  }

  public getAllClient(): void {
    this.clientService.getAllClient()
      .subscribe((clients: any) => {
        console.log(clients);
      });
  }

  public getClient(id: number): void{
    this.clientService.getClient(id).subscribe((client:any) =>
    console.log(client));
  }

  public updateClient(): void {
    this.clientService.updateClient(this.clientModel)
      .subscribe((client: any) => {
        console.log(client);
      });
  }

  public deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe((client: any) => {
      console.log(client);
    });
  }
}
