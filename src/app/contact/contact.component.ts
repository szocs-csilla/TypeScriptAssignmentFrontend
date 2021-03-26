import { Component, OnInit } from '@angular/core';
import {ContactService} from '../Service/contact.service';
import {ContactModel} from '../model/ContactModule';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactService: ContactService;
  private contactModel: ContactModel = {id: 1, lastName: 'Sandor', firstName: 'Matyas', email: 'matyas@asd.hu' };

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
  }

  public createContact(): void {
    this.contactService.createContact(this.contactModel)
      .subscribe();
  }

  public getAllContact(): void {
    this.contactService.getAllContact()
      .subscribe((contacts: any) => {
        console.log(contacts);
      });
  }

  public getContact(id: number): void{
    this.contactService.getContact(id).subscribe((contact: any) =>
      console.log(contact));
  }

  public updateContact(): void {
    this.contactService.updateContact(this.contactModel)
      .subscribe((contact: any) => {
        console.log(contact);
      });
  }

  public deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe();
  }
}
