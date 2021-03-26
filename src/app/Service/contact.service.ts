import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactModel} from '../model/ContactModule';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

 getAllContact(): Observable<ContactModel> {
  return this.http.get<ContactModel>('/contact');
}

  getContact(id: number): Observable<ContactModel>{
    return  this.http.get<ContactModel>('/contact?id=' + id);
  }

  createContact(testContact: ContactModel): Observable<any> {
    return this.http.post('/contact', testContact);
  }

  updateContact(updateContact: ContactModel): Observable<any>{
    return this.http.put('/contact', updateContact );
  }

  deleteContact(id: number): Observable<any>  {
    return this.http.delete('/contact?id=' + id);
  }
}
