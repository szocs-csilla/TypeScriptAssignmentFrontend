import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationModel} from '../model/LocationModel';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  getAllLocation(): Observable<LocationModel> {
    return this.http.get<LocationModel>('/location');
  }

  getLocation(id: number): Observable<LocationModel>{
    return  this.http.get<LocationModel>('/location?id=' + id);
  }

  createLocation(testLocation: LocationModel): Observable<any> {
    return this.http.post('/location', testLocation);
  }

  updateLocation(updateLocation: LocationModel): Observable<any>{
    return this.http.put('/location', updateLocation );
  }

  deleteLocation(id: number): Observable<any>  {
    return this.http.delete('/location?id=' + id);
  }
}
