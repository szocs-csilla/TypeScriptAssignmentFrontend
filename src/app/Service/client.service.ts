import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientModel} from '../model/ClientModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getAllClient(): Observable<ClientModel> {
    return this.http.get<ClientModel>('/client');
  }

  getClient(id: number): Observable<ClientModel>{
    return  this.http.get<ClientModel>('/client?id=' + id);
  }

  createClient(testClient: ClientModel): Observable<any> {
    return this.http.post('/client', testClient);
  }

  updateClient(updateClient: ClientModel): Observable<any>{
    return this.http.put('/client', updateClient );
  }

  deleteClient(id: number): Observable<any>  {
    return this.http.delete('/client?id=' + id);
  }

}
